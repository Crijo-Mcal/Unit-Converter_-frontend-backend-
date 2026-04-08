export type all_ConvertedType_avaliavle = "temperature" | "length" | "weight";

export interface objResponse {
    result: number,
    status: number;
    fromUnit?: string,
    toUnit?: string,
    type?: string;
    value?: string
}