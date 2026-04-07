
import React, { useState } from "react";

/* api */
import { temperatureApicall } from "../../api/Api.ts";

/* type */
import type { temperatureUnitType } from "../../types/Temperature.ts";
import type { objResponse } from "../../api/Api.ts";


type FormProps = {
    setResult: React.Dispatch<React.SetStateAction<objResponse | null>>;
};


export default function Form({ setResult }: FormProps) {
    const [fromUnit, setFromunit] = useState<temperatureUnitType>("Celsius");
    const [toUnit, setTounit] = useState<temperatureUnitType>("Fahrenheit");
    const [value, setValue] = useState<string>("");



    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        try {
            if (isNaN(Number(value)) || value === "") return
            const data = await temperatureApicall(fromUnit, toUnit, Number(value));

            setResult(data);
        } catch (err) {
            console.log(err);
        }
    }




    return (
        <div className=" w-[330px] h-[300px] bg-amber-300 rounded-2xl flex justify-center gap-6 items-center flex-col bg-bg1 shadow-[0_0_6px_#e5e5e5] shadow-bg1">
            <h3 className="text-xl font-extrabold text-secondary text-center text-shadow-md">Temperature Converter</h3>
            <form className="w-full h-[50%] flex flex-col justify-between items-center text-secondary font-medium text-[11pt]"
                onSubmit={handleSubmit}>
                <select className="w-[75%] h-8 bg-primary rounded-full border-x-15 border-primary outline-none text-center"
                    id="fromUnit"
                    value={fromUnit}
                    onChange={(e) => setFromunit(e.target.value as temperatureUnitType)}
                >
                    <option value="Celsius" className="bg-bg1">Celcios</option>
                    <option value="Fahrenheit" className="bg-bg1">farhenheit</option>
                    <option value="Kelvin" className="bg-bg1">kelsin</option>
                </select>

                <select className="w-[75%] h-8 bg-primary rounded-full border-x-15 border-primary outline-none text-center"
                    value={toUnit}
                    onChange={(e) => setTounit(e.target.value as temperatureUnitType)}
                >
                    <option value="Celsius" className="bg-bg1">Celcios</option>
                    <option value="Fahrenheit" className="bg-bg1">farhenheit</option>
                    <option value="Kelvin" className="bg-bg1">kelsin</option>
                </select>

                <input className="w-[75%] h-7  rounded-full border-x-15 border-bg1   outline-2 outline-offset-2 text-center"
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button className="w-[75%] h-8 bg-secondary rounded-full border-x-15 border-secondary outline-none text-center text-primary hover:bg-black hover:border-black transition duration-500 ease-in-out"
                    type="submit">coverter</button>
            </form>
        </div>
    );
}
