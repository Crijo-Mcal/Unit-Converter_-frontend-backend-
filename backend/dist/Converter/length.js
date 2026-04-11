const validUnitType = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
export default function lengthConverter(FromUnit, ToUnit, Value) {
    /* verification */
    if (!validUnitType.includes(FromUnit) || !validUnitType.includes(ToUnit)) {
        throw new Error("invali Unit");
    }
    if (FromUnit === ToUnit) {
        return Value;
    }
    /*converted*/
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
