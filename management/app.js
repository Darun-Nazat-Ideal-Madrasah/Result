const $=s=>document.querySelector(s);
const today=()=>new Date().toISOString().slice(0,10);
let students=JSON.parse(localStorage.getItem("mms_students")||"[]");
let attendance=JSON.parse(localStorage.getItem("mms_attendance")||"{}");
let results=JSON.parse(localStorage.getItem("mms_results")||"[]");

function save(){localStorage.setItem("mms_students",JSON.stringify(students));localStorage.setItem("mms_attendance",JSON.stringify(attendance));localStorage.setItem("mms_results",JSON.stringify(results));}
function page(name){document.querySelectorAll(".page").forEach(x=>x.classList.toggle("active",x.id===name));document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.page===name)); if(name==="dashboard")renderDash();if(name==="students")renderStudents();if(name==="attendance")renderAttendance();if(name==="results")renderResults();}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>page(b.dataset.page));
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>page(b.dataset.go));

function renderDash(){
 $("#totalStudents").textContent=students.length;
 const a=attendance[today()]||{};
 $("#presentToday").textContent=students.filter(s=>a[s.id]==="P").length;
 $("#absentToday").textContent=students.filter(s=>a[s.id]==="A").length;
}
function openModal(html){$("#modalContent").innerHTML=html;$("#modal").classList.remove("hidden")}
$("#closeModal").onclick=()=>$("#modal").classList.add("hidden");
$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.add("hidden")};

$("#addStudentBtn").onclick=()=>openModal(`
<h2>নতুন ছাত্র যোগ</h2><form class="form" id="studentForm">
<input name="name" required placeholder="ছাত্রের নাম">
<input name="father" placeholder="পিতার নাম">
<input name="roll" placeholder="রোল">
<input name="className" placeholder="শ্রেণি/বিভাগ">
<input name="phone" placeholder="মোবাইল নম্বর">
<button>সংরক্ষণ</button></form>`);
document.addEventListener("submit",e=>{
 if(e.target.id==="studentForm"){e.preventDefault();const f=new FormData(e.target);students.push({id:Date.now().toString(),name:f.get("name"),father:f.get("father"),roll:f.get("roll"),className:f.get("className"),phone:f.get("phone")});save();$("#modal").classList.add("hidden");renderStudents();renderDash();}
 if(e.target.id==="resultForm"){e.preventDefault();const f=new FormData(e.target);results.push({id:Date.now().toString(),studentId:f.get("studentId"),subject:f.get("subject"),marks:f.get("marks"),exam:f.get("exam")});save();$("#modal").classList.add("hidden");renderResults();}
});
function renderStudents(){
 const q=($("#studentSearch").value||"").toLowerCase();
 const arr=students.filter(s=>(s.name+" "+s.roll+" "+s.className).toLowerCase().includes(q));
 $("#studentList").innerHTML=arr.length?arr.map(s=>`<div class="student"><div><b>${esc(s.name)}</b><br><small>রোল: ${esc(s.roll||"-")} • ${esc(s.className||"-")}<br>অভিভাবক: ${esc(s.father||"-")} • ${esc(s.phone||"-")}</small></div><div class="actions"><button class="danger" onclick="removeStudent('${s.id}')">মুছুন</button></div></div>`).join(""):`<p class="muted">কোনো ছাত্র পাওয়া যায়নি।</p>`;
}
$("#studentSearch").oninput=renderStudents;
window.removeStudent=id=>{if(confirm("এই ছাত্রকে মুছে ফেলবেন?")){students=students.filter(s=>s.id!==id);save();renderStudents();renderDash()}};

$("#attendanceDate").value=today(); $("#attendanceDate").onchange=renderAttendance;
function renderAttendance(){
 const d=$("#attendanceDate").value||today(), a=attendance[d]||{};
 $("#attendanceList").innerHTML=students.length?students.map(s=>`<div class="attendance-row"><div><b>${esc(s.name)}</b><br><small>${esc(s.className||"")} • রোল ${esc(s.roll||"-")}</small></div><label><input type="radio" name="att_${s.id}" value="P" ${a[s.id]!=="A"?"checked":""}> উপস্থিত</label><label><input type="radio" name="att_${s.id}" value="A" ${a[s.id]==="A"?"checked":""}> অনুপস্থিত</label></div>`).join(""):`<p class="muted">আগে ছাত্র যোগ করুন।</p>`;
}
$("#saveAttendance").onclick=()=>{const d=$("#attendanceDate").value||today();attendance[d]={};students.forEach(s=>{const x=document.querySelector(`input[name="att_${s.id}"]:checked`);attendance[d][s.id]=x?x.value:"P"});save();renderDash();alert("উপস্থিতি সংরক্ষণ হয়েছে।")};

$("#addResultBtn").onclick=()=>openModal(`<h2>ফলাফল যোগ</h2><form class="form" id="resultForm">
<select name="studentId" required>${students.map(s=>`<option value="${s.id}">${esc(s.name)} — রোল ${esc(s.roll||"-")}</option>`).join("")}</select>
<input name="exam" required placeholder="পরীক্ষার নাম">
<input name="subject" required placeholder="বিষয়ের নাম">
<input name="marks" required type="number" min="0" max="100" placeholder="প্রাপ্ত নম্বর">
<button>সংরক্ষণ</button></form>`);
function renderResults(){
 $("#resultList").innerHTML=results.length?results.slice().reverse().map(r=>{const s=students.find(x=>x.id===r.studentId);return `<div class="result-row"><div><b>${esc(s?.name||"মুছে ফেলা ছাত্র")}</b><br><small>${esc(r.exam)} • ${esc(r.subject)}</small></div><span class="badge">${esc(r.marks)} / 100</span></div>`}).join(""):`<p class="muted">এখনও কোনো ফলাফল নেই।</p>`;
}
function esc(x){return String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
renderDash();renderStudents();renderAttendance();renderResults();

let deferred;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferred=e;$("#installBtn").classList.remove("hidden")});
$("#installBtn").onclick=async()=>{if(deferred){deferred.prompt();deferred=null;$("#installBtn").classList.add("hidden")}};
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
