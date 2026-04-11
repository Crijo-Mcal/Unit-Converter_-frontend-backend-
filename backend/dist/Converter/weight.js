const validUnitType = ["mg", "cg", "dg", "g", "dag", "hg", "kg"];
export default function weightConverter(FromUnit, ToUnit, Value) {
    /* verification */
    if (!validUnitType.includes(FromUnit) || !validUnitType.includes(ToUnit)) {
        throw new Error("invali Unit");
    }
    if (FromUnit === ToUnit) {
        return Value;
    }
    const indexFromUnit = validUnitType.indexOf(FromUnit);
    const indexTomUnit = validUnitType.indexOf(ToUnit);
    const DistanceUnit = Math.abs(indexTomUnit - indexFromUnit);
    if (indexFromUnit > indexTomUnit) {
        return Value / 10 ** DistanceUnit;
    }
    if (indexFromUnit < indexTomUnit) {
        return Value * 10 ** DistanceUnit;
    }
    throw new Error("Conversion not supported");
}
