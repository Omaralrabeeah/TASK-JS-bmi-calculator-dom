function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let heightMeters = height / 100;
  let BMI = (weight / heightMeters) * heightMmeters;
  if (BMI < 18.5) {
    window.alert("underweight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    Window.alert("healthy weight");
  } else if (BMI >= 25.5 && BMI <= 29.9) {
    Window.alert("overweight");
  } else if (BMI >= 30) {
  }
}
