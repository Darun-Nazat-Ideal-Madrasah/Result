const { createClient } = window.supabase;
let sb = null;
let students = [];
let attendanceCache = {};
let results = [];

const $ = id => document.getElementById(id);
const today = () => new Date().toISOString().slice(0,10);

function configured(){
  return window.SUPABASE_URL && window.SUPABASE_ANON_KEY &&
    !window.SUPABASE_URL.includes("PASTE_") && !window.SUPABASE_ANON_KEY.includes("PASTE_");
}
function msg(text, error=false){ $("appMsg").textContent=text; $("appMsg").style.color=error?"#b42318":"#067647"; }
function showPage(id){
  document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.page===id));
  $(id).classList.add("active");
  if(id==="students") loadStudents();
  if(id==="attendance") loadAttendance();
  if(id==="results") loadResults();
  if(id==="dashboard") refreshDashboard();
}
function openModal(html){ $("modalContent").innerHTML=html; $("modal").classList.remove("hidden"); }
function closeModal(){ $("modal").classList.add("hidden"); }

async function start(){
  if(!configured()){
    $("loginPage").classList.remove("hidden");
    $("app").classList.add("hidden");
    $("loginMsg").textContent="প্রথমে config.js-এ Supabase URL ও Publishable/Anon Key বসাতে হবে।";
    return;
  }
  sb = createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
  const {data:{session}} = await sb.auth.getSession();
  if(session) showApp();
  else { $("loginPage").classList.remove("hidden"); $("app").classList.add("hidden"); }
  sb.auth.onAuthStateChange((_event, session)=> session ? showApp() : showLogin());
}
function showApp(){
  $("loginPage").classList.add("hidden"); $("app").classList.remove("hidden"); $("logoutBtn").classList.remove("hidden");
  $("attendanceDate").value=today(); refreshDashboard();
}
function showLogin(){
  $("loginPage").classList.remove("hidden"); $("app").classList.add("hidden"); $("logoutBtn").classList.add("hidden");
}
async function refreshDashboard(){
  if(!sb)return;
  const {count}=await sb.from("students").select("*",{count:"exact",head:true});
  $("totalStudents").textContent=count||0;
  const d=today();
  const {data}=await sb.from("attendance").select("status").eq("date",d);
  $("presentToday").textContent=(data||[]).filter(x=>x.status==="present").length;
  $("absentToday").textContent=(data||[]).filter(x=>x.status==="absent").length;
}
async function loadStudents(){
  const {data,error}=await sb.from("students").select("*").order("roll",{ascending:true});
  if(error){msg(error.message,true);return}
  students=data||[]; renderStudents();
  renderAttendanceStudents();
}
function renderStudents(){
  const q=($("studentSearch").value||"").toLowerCase();
  const arr=students.filter(s=>`${s.name} ${s.roll} ${s.class_name}`.toLowerCase().includes(q));
  $("studentList").innerHTML=arr.length?arr.map(s=>`
  <div class="item"><strong>${esc(s.name)}</strong>
  <span class="small">রোল: ${esc(s.roll||"—")} • শ্রেণি: ${esc(s.class_name||"—")}</span>
  <span class="small">অভিভাবক: ${esc(s.father_name||"—")} • ফোন: ${esc(s.phone||"—")}</span></div>`).join(""):"কোনো ছাত্র পাওয়া যায়নি।";
}
function renderAttendanceStudents(){
  const date=$("attendanceDate").value||today();
  $("attendanceList").innerHTML=students.length?students.map(s=>{
    const v=attendanceCache[`${s.id}_${date}`]||"present";
    return `<div class="att-row"><span><strong>${esc(s.name)}</strong><br><span class="small">রোল ${esc(s.roll||"—")}</span></span>
    <select data-att="${s.id}"><option value="present" ${v==="present"?"selected":""}>উপস্থিত</option><option value="absent" ${v==="absent"?"selected":""}>অনুপস্থিত</option><option value="late" ${v==="late"?"selected":""}>বিলম্ব</option></select></div>`
  }).join(""):"আগে ছাত্র যোগ করুন।";
}
async function loadAttendance(){
  if(!students.length) await loadStudents();
  const date=$("attendanceDate").value||today();
  const {data,error}=await sb.from("attendance").select("*").eq("date",date);
  if(error){msg(error.message,true);return}
  attendanceCache={};
  (data||[]).forEach(x=>attendanceCache[`${x.student_id}_${date}`]=x.status);
  renderAttendanceStudents();
}
async function saveAttendance(){
  const date=$("attendanceDate").value||today();
  const rows=[...document.querySelectorAll("[data-att]")].map(sel=>({student_id:Number(sel.dataset.att),date,status:sel.value}));
  if(!rows.length)return;
  const {error}=await sb.from("attendance").upsert(rows,{onConflict:"student_id,date"});
  if(error) msg(error.message,true); else {msg("উপস্থিতি সংরক্ষণ হয়েছে।");refreshDashboard();}
}
async function loadResults(){
  const {data,error}=await sb.from("results").select("*").order("created_at",{ascending:false});
  if(error){msg(error.message,true);return}
  results=data||[];
  $("resultList").innerHTML=results.length?results.map(r=>{
    const s=students.find(x=>x.id===r.student_id);
    return `<div class="item"><strong>${esc(s?s.name:"ছাত্র #"+r.student_id)}</strong>
    <span>পরীক্ষা: ${esc(r.exam_name||"—")} • বিষয়: ${esc(r.subject||"—")}</span><br>
    <span>নম্বর: ${esc(r.marks)} / ${esc(r.total_marks)}</span></div>`
  }).join(""):"কোনো ফলাফল নেই।";
}
function addStudent(){
  openModal(`<h2>নতুন ছাত্র</h2>
  <input id="mName" placeholder="ছাত্রের নাম">
  <div class="row"><input id="mRoll" placeholder="রোল"><input id="mClass" placeholder="শ্রেণি"></div>
  <input id="mFather" placeholder="পিতার/অভিভাবকের নাম"><input id="mPhone" placeholder="ফোন নম্বর">
  <button id="doAdd">সংরক্ষণ</button>`);
  $("doAdd").onclick=async()=>{
    const name=$("mName").value.trim(); if(!name){alert("নাম দিন");return}
    const {error}=await sb.from("students").insert({name,roll:$("mRoll").value.trim(),class_name:$("mClass").value.trim(),father_name:$("mFather").value.trim(),phone:$("mPhone").value.trim()});
    if(error) alert(error.message); else {closeModal();loadStudents();refreshDashboard();msg("ছাত্র যোগ হয়েছে।")}
  };
}
function addResult(){
  const opts=students.map(s=>`<option value="${s.id}">${esc(s.name)} — ${esc(s.roll||"")}</option>`).join("");
  openModal(`<h2>ফলাফল যোগ</h2>
  <select id="rStudent">${opts}</select>
  <input id="rExam" placeholder="পরীক্ষার নাম">
  <input id="rSubject" placeholder="বিষয়">
  <div class="row"><input id="rMarks" type="number" placeholder="প্রাপ্ত নম্বর"><input id="rTotal" type="number" value="100" placeholder="পূর্ণ নম্বর"></div>
  <button id="doResult">সংরক্ষণ</button>`);
  $("doResult").onclick=async()=>{
    const {error}=await sb.from("results").insert({student_id:Number($("rStudent").value),exam_name:$("rExam").value.trim(),subject:$("rSubject").value.trim(),marks:Number($("rMarks").value),total_marks:Number($("rTotal").value)});
    if(error)alert(error.message);else{closeModal();loadResults();msg("ফলাফল যোগ হয়েছে।")}
  };
}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>showPage(b.dataset.page));
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>showPage(b.dataset.go));
$("loginBtn").onclick=async()=>{
  if(!sb)return;
  $("loginMsg").textContent="লগইন হচ্ছে...";
  const {error}=await sb.auth.signInWithPassword({email:$("email").value.trim(),password:$("password").value});
  $("loginMsg").textContent=error?error.message:"";
};
$("logoutBtn").onclick=()=>sb.auth.signOut();
$("addStudentBtn").onclick=addStudent;
$("addResultBtn").onclick=()=>{if(!students.length){alert("আগে একজন ছাত্র যোগ করুন।");return}addResult()};
$("saveAttendance").onclick=saveAttendance;
$("studentSearch").oninput=renderStudents;
$("attendanceDate").onchange=loadAttendance;
$("closeModal").onclick=closeModal;
$("modal").onclick=e=>{if(e.target===$("modal"))closeModal()};

start();