function myFunction() {
  var personFirst = prompt("Please enter your first name", "Peter");
  var personLast = prompt("Please enter your last name", "Parker");
  var age = prompt("Please enter your age", "23");
  var birthMonth = prompt("Enter your birth month as a number", "6");
  var color = prompt("What is your favorite ROYGBIV color?", "R");
  var siblings = prompt("How many siblings do you have?", "0");
  document.getElementById("demo").innerHTML =
    "Hello " + personFirst + " " + personLast;
  (".");
}

function ageFunction() {
  var yearsToRetirement;
  if (age % 2 == 0) {
    yearsToRetirement = 20;
  } else {
    yearsToRetirement = 300;
  }
}
function birthMonthFunction() {
  var bankBalance;
  if (birthMonth <= 4) {
  }
}
