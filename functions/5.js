function celsiusParaFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

const temperaturaCelsius = 25;
const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);
console.log(`${temperaturaCelsius}°C equivale a ${temperaturaFahrenheit}°F`);
