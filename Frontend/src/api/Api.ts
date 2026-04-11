const url: string = import.meta.env.VITE_URL;


import type { objResponse, all_ConvertedType_avaliavle } from "../types/Api";
import type { All_UnitType_avaliavle } from "../types/UnitType";

export async function apicall(
    typecoverted: all_ConvertedType_avaliavle,
    fromUnit: All_UnitType_avaliavle,
    toUnit: All_UnitType_avaliavle,
    value: number
): Promise<objResponse> {

    try {
        const response = await fetch(`${url}/${typecoverted}/${fromUnit}/${toUnit}/${value}`);
        const data: objResponse = await response.json();
        return data;
    }
    catch (err: any) {
        console.log(err.message);
        throw new Error(err.mssage);
    }

}


