// test.ts
// Karena Anda menggunakan module.exports dengan object, import seperti ini:
const { temperatureConverter } = require("./temperature");

// Atau jika ingin import semua:
// const converter = require("./Converter/temperature");
// const result = converter.temperatureConverter("Celsius", "Fahrenheit", 40);

const result = temperatureConverter("Celsius", "Fahrenheit", 40);
console.log(result); // Output: 104

// Test konversi lainnya
console.log(temperatureConverter("Fahrenheit", "Celsius", 104)); // Output: 40
console.log(temperatureConverter("Celsius", "Kelvin", 0)); // Output: 273.15
console.log(temperatureConverter("Kelvin", "Celsius", 273.15)); // Output: 0
console.log(temperatureConverter("Fahrenheit", "Kelvin", 32)); // Output: 273.15
