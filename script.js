// ========================================
// DARIN-NAZAR MADRASA RESULT SYSTEM
// ========================================

// Side menu
function toggleMenu() {
  const drawer = document.getElementById("drawer");

  if (drawer) {
    drawer.classList.toggle("open");
  }
}


// Close menu after clicking a menu item
document.addEventListener("DOMContentLoaded", function () {

  const menuLinks = document.querySelectorAll("#drawer a");

  menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      const drawer = document.getElementById("drawer");

      if (drawer) {
        drawer.classList.remove("open");
      }

    });

  });

});


// ========================================
// RESULT SEARCH
// ========================================

async function searchResult() {

  const exam = document.getElementById("examSelect").value;
  const selectedClass = document.getElementById("classSelect").value;
  const roll = document.getElementById("rollInput").value.trim();

  const message = document.getElementById("resultMessage");
  const resultCard = document.getElementById("resultCard");

  // Hide previous result
  resultCard.style.display = "none";

  message.innerHTML = "";


  // Check exam
  if (!exam) {

    message.innerHTML = "⚠️ অনুগ্রহ করে পরীক্ষা নির্বাচন করুন।";

    return;
  }


  // Check class
  if (!selectedClass) {

    message.innerHTML = "⚠️ অনুগ্রহ করে শ্রেণি নির্বাচন করুন।";

    return;
  }


  // Check roll
  if (!roll) {

    message.innerHTML = "⚠️ অনুগ্রহ করে রোল নম্বর লিখুন।";

    return;
  }


  message.innerHTML = "⏳ ফলাফল খোঁজা হচ্ছে...";


  try {

    const response = await fetch("data/results.json");


    if (!response.ok) {

      throw new Error("Result data could not be loaded.");

    }


    const data = await response.json();


    // Find result
    const student = data.results.find(function (item) {

      return (
        String(item.exam) === String(exam) &&
        String(item.class) === String(selectedClass) &&
        String(item.roll) === String(roll)
      );

    });


    if (!student) {

      message.innerHTML =
        "❌ এই পরীক্ষা, শ্রেণি ও রোল নম্বরের কোনো ফলাফল পাওয়া যায়নি।";

      return;
    }


    // Show result
    displayResult(student, data);


  } catch (error) {

    console.error(error);

    message.innerHTML =
      "❌ ফলাফল ডাটা লোড করা যাচ্ছে না।";

  }

}



// ========================================
// DISPLAY RESULT
// ========================================

function displayResult(student, data) {

  const resultCard = document.getElementById("resultCard");
  const message = document.getElementById("resultMessage");


  // Student name
  document.getElementById("studentName").textContent =
    student.name || "-";


  // Roll
  document.getElementById("studentRoll").textContent =
    student.roll || "-";


  // Class
  document.getElementById("studentClass").textContent =
    getClassName(student.class, data);


  // Exam
  document.getElementById("studentExam").textContent =
    getExamName(student.exam, data);


  // Marks table

  const table = document.getElementById("marksTable");

  table.innerHTML = "";


  if (student.subjects && student.subjects.length > 0) {

    student.subjects.forEach(function (subject, index) {

      const row = document.createElement("tr");


      row.innerHTML = `

        <td>${index + 1}</td>

        <td>${subject.name || "-"}</td>

        <td>${subject.mark ?? "-"}</td>

        <td>${subject.grade || "-"}</td>

        <td>${subject.point ?? "-"}</td>

      `;


      table.appendChild(row);

    });

  } else {

    table.innerHTML = `

      <tr>

        <td colspan="5">
          কোনো বিষয়ের তথ্য পাওয়া যায়নি।
        </td>

      </tr>

    `;

  }


  // Total
  document.getElementById("totalMarks").textContent =
    student.total ?? "-";


  // Average
  document.getElementById("averageMarks").textContent =
    student.average ?? "-";


  // Grade
  document.getElementById("overallGrade").textContent =
    student.grade || "-";


  // Point
  document.getElementById("overallPoint").textContent =
    student.point ?? "-";


  // Position
  document.getElementById("position").textContent =
    student.position || "-";


  message.innerHTML =
    "✅ ফলাফল পাওয়া গেছে।";


  resultCard.style.display = "block";


  // Result card এ স্ক্রল
  resultCard.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}



// ========================================
// CLASS NAME
// ========================================

function getClassName(classId, data) {

  if (!data.classes) {
    return classId;
  }


  const found = data.classes.find(function (item) {

    return String(item.id) === String(classId);

  });


  return found ? found.name : classId;

}



// ========================================
// EXAM NAME
// ========================================

function getExamName(examId, data) {

  if (!data.exams) {
    return examId;
  }


  const found = data.exams.find(function (item) {

    return String(item.id) === String(examId);

  });


  return found ? found.name : examId;

}



// ========================================
// PRINT RESULT
// ========================================

function printResult() {

  const resultCard = document.getElementById("resultCard");


  if (
    !resultCard ||
    resultCard.style.display === "none"
  ) {

    alert("আগে একটি ফলাফল খুঁজে বের করুন।");

    return;
  }


  window.print();

}



// ========================================
// ENTER KEY SEARCH
// ========================================

document.addEventListener("DOMContentLoaded", function () {

  const rollInput = document.getElementById("rollInput");

  if (rollInput) {

    rollInput.addEventListener("keydown", function (event) {

      if (event.key === "Enter") {

        searchResult();

      }

    });

  }

});
