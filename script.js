const $ = id => document.getElementById(id);
const bn = value => String(value ?? "").replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);

let data = null;

function classStudents(cls){
  return Array.isArray(cls.students) ? cls.students : (Array.isArray(cls.results) ? cls.results : []);
}
function className(cls){
  return cls?.nameBn || cls?.classBn || cls?.name || cls?.class || "";
}
function subjectRows(student){
  if(!student?.subjects || typeof student.subjects !== "object") return [];
  return Object.entries(student.subjects).map(([name,mark]) => ({name,mark}));
}

async function init(){
  const response = await fetch("data/results-2026.json");
  if(!response.ok) throw new Error("data load failed");
  data = await response.json();

  const year = data.year || 2026;
  $("year").innerHTML =
    `<option value="${year}">${bn(year)}</option>` +
    `<option disabled>২০২৭ (শীঘ্রই)</option>` +
    `<option disabled>২০২৮ (শীঘ্রই)</option>`;

  const exams = Array.isArray(data.exams) && data.exams.length
    ? data.exams
    : [{nameBn:"দ্বিতীয় সাময়িক পরীক্ষা"}];

  $("exam").innerHTML =
    `<option value="">পরীক্ষা নির্বাচন করুন</option>` +
    exams.map((e,i) =>
      `<option value="${i}">${e.nameBn || e.examBn || e.name || "পরীক্ষা"}</option>`
    ).join("");

  const classes = Array.isArray(data.classes) ? data.classes : [];
  $("classSelect").innerHTML =
    `<option value="">শ্রেণি নির্বাচন করুন</option>` +
    classes.map((c,i) => `<option value="${i}">${className(c)}</option>`).join("");
}

$("resultForm").addEventListener("submit", event => {
  event.preventDefault();
  $("message").hidden = true;

  const cls = data?.classes?.[Number($("classSelect").value)];
  const roll = $("roll").value.trim();
  const student = cls && classStudents(cls).find(s => String(s.roll ?? s.rollNo ?? "").trim() === roll);

  if(!student){
    $("resultSection").hidden = true;
    $("message").textContent = "দুঃখিত, এই তথ্য অনুযায়ী কোনো ফলাফল পাওয়া যায়নি।";
    $("message").hidden = false;
    return;
  }

  const total = student.total ?? student.totalMarks;
  const average = student.average ?? student.avg;
  const point = student.point ?? student.gpa;
  const grade = student.grade ?? student.resultGrade;
  const position = student.position ?? student.rank ?? "";
  const rows = subjectRows(student);

  $("result").innerHTML = `
    <article class="result-card">
      <div class="student-header">
        <div>
          <h3>${student.name || "নাম পাওয়া যায়নি"}</h3>
          <div class="student-meta">রোল: ${bn(student.roll)} · ${className(cls)}</div>
        </div>
        <div class="rank-badge">
          <div><strong>${position ? bn(position) : "—"}</strong><small>অবস্থান</small></div>
        </div>
      </div>

      <div class="summary">
        <div class="stat"><small>মোট নম্বর</small><strong>${total == null ? "—" : bn(total)}</strong></div>
        <div class="stat"><small>গড়</small><strong>${average == null ? "—" : bn(average)}</strong></div>
        <div class="stat"><small>পয়েন্ট</small><strong>${point == null ? "—" : bn(point)}</strong></div>
        <div class="stat"><small>গ্রেড</small><strong>${grade || "—"}</strong></div>
      </div>

      ${rows.length ? `
      <div class="table-wrap">
        <table>
          <thead><tr><th>বিষয়</th><th>নম্বর</th></tr></thead>
          <tbody>
            ${rows.map(x => `<tr><td>${x.name}</td><td>${x.mark === "" || x.mark == null ? "—" : bn(x.mark)}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>` : ""}

      ${(student.status === "অসম্পূর্ণ" || total == null)
        ? `<div class="incomplete">এই শিক্ষার্থীর ফলাফল অসম্পূর্ণ।</div>` : ""}
    </article>
  `;

  $("resultSection").hidden = false;
  $("resultSection").scrollIntoView({behavior:"smooth",block:"start"});
});

$("printButton").addEventListener("click", () => window.print());

init().catch(error => {
  console.error(error);
  $("message").textContent = "ফলাফলের ডেটা লোড করা যাচ্ছে না।";
  $("message").hidden = false;
});
