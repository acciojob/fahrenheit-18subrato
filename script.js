function toFahrenheit(celsius) {
	celsius = Number(celsius);
	let val =  (celsius * 9/5) + 32;
	return val.toFixed(2);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
