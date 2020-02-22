console.log("heeey!")

name_input = document.getElementById('name'); 
weight_input = document.getElementById('weight');
height_input = document.getElementById('height');


function getMe() {
	alert("Hi " +  name_input.value + ", your weight is " + weight_input.value + " kilograms, your height is " + height_input.value + " meters. Your BMI is " + getBMIindex());
}

function getBMIindex() {
	var bmi = weight_input.value/Math.pow(height_input.value,2);
	return parseFloat(bmi).toFixed(2);
}