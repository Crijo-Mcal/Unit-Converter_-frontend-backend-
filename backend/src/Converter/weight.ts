const validUnitType = ["mg", "cg", "dg", "g", "dag", "hg", "kg"];

export default function weightConverter(
  FromUnit: string,
  ToUnit: string,
  Value: number,
): number {
  /* verification */
  if (!validUnitType.includes(FromUnit) || !validUnitType.includes(ToUnit)) {
    throw new Error("invali Unit");
  }

  if (FromUnit === ToUnit) {
    return Value;
  }

  const indexFromUnit: number = validUnitType.indexOf(FromUnit);
  const indexTomUnit: number = validUnitType.indexOf(ToUnit);
  const DistanceUnit: number = Math.abs(indexTomUnit - indexFromUnit);

  if (indexFromUnit > indexTomUnit) {
    return Value / 10 ** DistanceUnit;
  }

  if (indexFromUnit < indexTomUnit) {
    return Value * 10 ** DistanceUnit;
  }

  throw new Error("Conversion not supported");
}
