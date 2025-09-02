
let num = prompt("입력:");
if (num > 0) {
  console.log("양수");
} else if (num < 0) {
  console.log("음수");
} else {
  console.log("0");
}


let score = prompt("Your score:");
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Your grade: " + grade);



let skills = ["HTML", "CSS", "Javascript", "React"];
if (skills.includes("Javascript") && skills.includes("React")) {
  console.log("합격");
} else if (skills.includes("Javascript") || skills.includes("React")) {
  console.log("예비");
} else {
  console.log("탈락");
}