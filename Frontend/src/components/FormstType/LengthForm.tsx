
import React, { useState } from "react";

/* api */
import { apicall } from "../../api/Api.ts";

/* type */
import type { lengthUnitType } from "../../types/UnitType.ts";
import type { objResponse } from "../../types/Api.ts";

/* variavel */
const validUnitType = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

type FormProps = {
    setResult: React.Dispatch<React.SetStateAction<objResponse | null>>;
};


export default function Form({ setResult }: FormProps) {
    const [fromUnit, setFromunit] = useState<lengthUnitType>("mm");
    const [toUnit, setTounit] = useState<lengthUnitType>("cm");
    const [value, setValue] = useState<string>("");



    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        try {
            if (isNaN(Number(value)) || value === "") return
            const data = await apicall("length", fromUnit, toUnit, Number(value));

            setResult(data);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <form className="w-full h-[50%] flex flex-col justify-between items-center text-secondary font-medium text-[11pt]"
            onSubmit={handleSubmit}>
            <select className="w-[75%] h-8 bg-primary rounded-full border-x-15 border-primary outline-none text-center"
                id="fromUnit"
                value={fromUnit}
                onChange={(e) => setFromunit(e.target.value as lengthUnitType)}
            >
                {validUnitType.map((x, key) => (
                    <option key={key} value={x} className="bg-bg1">{x}</option>
                ))}


            </select>

            <select className="w-[75%] h-8 bg-primary rounded-full border-x-15 border-primary outline-none text-center"
                value={toUnit}
                onChange={(e) => setTounit(e.target.value as lengthUnitType)}
            >
                {validUnitType.map((x, key) => (
                    <option key={key} value={x} className="bg-bg1">{x}</option>
                ))}
            </select>

            <input className="w-[75%] h-7  rounded-full border-x-15 border-bg1   outline-2 outline-offset-2 text-center"
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button className="w-[75%] h-8 bg-secondary rounded-full border-x-15 border-secondary outline-none text-center text-primary hover:bg-black hover:border-black transition duration-500 ease-in-out"
                type="submit">coverter</button>
        </form>

    );
}
