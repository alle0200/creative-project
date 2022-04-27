import { colord } from "colord";

colord("#ff0000").grayscale().alpha(0.25).toRgbString(); // "rgba(128, 128, 128, 0.25)"
colord("rgb(192, 192, 192)").isLight(); // true
colord("hsl(0, 50%, 50%)").darken(0.25).toHex(); // "#602020"

//the value of the word that is submitted
var wordValue;

//this is for parsing the string that is passed into the site
var charArray;
var stringLength;
var stringThird;

//these are the individual color values
var value1;
var value2;
var value3;

//the string where the final color is stored
var colorString;

const button = document.getElementById("submitButton");
button.addEventListener("click", getInputValue, false);

var colorBox = document.getElementById("colorBox");

function getInputValue()
{
	let wordValue = document.getElementById("wordInput").value;
	colorBox.textContent = wordValue;

	console.log(wordValue);
	generateWordNumber(wordValue);
}

function generateWordNumber(wordValue)
{
	let value1 = 0;
	let value2 = 0;
	let value3 = 0;

	let stringLength = wordValue.length;
	// console.log(stringLength);

	let stringThird = Math.ceil(stringLength/3);
	// console.log(stringThird);

	let charArray = wordValue.split('');

	for (let count = 0; count < stringLength; count++)
	{
		if (count <= stringThird)
		{
			value1 += charArray[count].charCodeAt(0);


			if (count == stringThird)
			{
				value1 = value1/stringThird;
			}

			if (value1 > 255)
			{
				value1 = 255;
			}
		}

		if (count > stringThird && count <= stringThird * 2)
		{
			value2 += charArray[count].charCodeAt(0);

			if (count == stringThird * 2)
			{
				value2 = value2/stringThird;
			}

			if (value2 > 255)
			{
				value2 = 255;
			}
		}

		if (count > stringThird * 2)
		{
			value3 += charArray[count].charCodeAt(0);

			if (count == stringThird * 3)
			{
				value3 = value3/stringThird;
			}

			if (value3 > 255)
			{
				value3 = 255;
			}
		}
	}

	console.log(value1);
	console.log(value2);
	console.log(value3);

	generateColor(value1, value2, value3);

	// let wordNumber = wordValue.charCodeAt(0);
	// console.log(wordNumber);

}

function generateColor(value1, value2, value3)
{
	let colorString = "rgb(" + value1 + ", " + value2 + ", " + value3 + ")";
	console.log(colorString);

	colorBox.style.color = colorString;

}