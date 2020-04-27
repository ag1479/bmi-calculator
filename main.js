let button = document.getElementById("calculate-button");

button.addEventListener("click", function () {
  let weight = document.getElementById("weight-input").value;
  let height = document.getElementById("height-input").value;
  let calculatedBmi = (weight / (height * height)) * 10000;
  document.getElementById("calculated-bmi").value = calculatedBmi;
});
