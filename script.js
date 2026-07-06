function calculateGPA() {
  let grade = document.getElementById("grade").value;
  grade = parseFloat(grade);

  let usGPA = (grade - 2) / 3 * 4;

  let ects = "";
  if (grade >= 4.5) {
    ects = "A";
  } else if (grade >= 3.5) {
    ects = "B";
  } else if (grade >= 2.5) {
    ects = "C";
  } else {
    ects = "D";
  }

  document.getElementById("result").innerText =
    "US GPA: " + usGPA.toFixed(2) + " | Европейский эквивалент: " + ects;
}