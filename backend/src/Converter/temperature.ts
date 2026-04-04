const velidTypeUnit = ["Celsius", "Fahrenheit", "Kelvin"];

export default function temperatureConverter(
  FromUnit: string,
  ToUnit: string,
  Value: number,
): number {
  /* verification  */
  if (!velidTypeUnit.includes(FromUnit) || !velidTypeUnit.includes(ToUnit)) {
    throw new Error("unit error");
  }

  if (FromUnit === ToUnit) {
    return Value;
  }

  // Celsius
  if (FromUnit === "Celsius" && ToUnit === "Fahrenheit")
    return (Value * 9) / 5 + 32;
  if (FromUnit === "Celsius" && ToUnit === "Kelvin") return Value + 273.15;

  // Fahrenheit
  if (FromUnit === "Fahrenheit" && ToUnit === "Celsius")
    return ((Value - 32) * 5) / 9;
  if (FromUnit === "Fahrenheit" && ToUnit === "Kelvin")
    return ((Value - 32) * 5) / 9 + 273.15;

  // Kelvin
  if (FromUnit === "Kelvin" && ToUnit === "Celsius") return Value - 273.15;
  if (FromUnit === "Kelvin" && ToUnit === "Fahrenheit")
    return ((Value - 273.15) * 9) / 5 + 32;

  throw new Error("Conversion not supported this units");
}
