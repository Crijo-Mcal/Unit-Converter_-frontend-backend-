
export type { objResponse } from "../types/Api"
const url: string = "http://localhost:3000";


import type { objResponse } from "../types/Api";
import type { temperatureUnitType } from "../types/Temperature";

export async function temperatureApicall(fromUnit: temperatureUnitType, toUnit: temperatureUnitType, value: number): Promise<objResponse> {

    try {
        const response = await fetch(`${url}/temperature/${fromUnit}/${toUnit}/${value}`);
        const data: objResponse = await response.json();
        return data;
    }
    catch (err: any) {
        console.log(err.message);
        throw new Error(err.mssage);
    }

}