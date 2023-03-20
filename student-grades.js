//prompt user to input marks
let marks = prompt("Enter student marks (between 0 and 100): ");

//determine correct grade
if (marks >= 80 && marks <= 100) {
  console.log("Grade: A");
} else if (marks >= 60 && marks <= 79) {
  console.log("Grade: B");
} else if (marks >= 50 && marks <= 59) {
  console.log("Grade: C");
} else if (marks >= 40 && marks <= 49) {
  console.log("Grade: D");
} else if (marks < 40 && marks >= 0) {
  console.log("Grade: E");
} else {
  console.log("Invalid input. Please enter marks between 0 and 100.");
}
