import { useEffect, useState } from "react";
import type { objResponse } from "../types/Api";

type ResultProps = {
    result: objResponse | null;
};

export default function Result({ result }: ResultProps) {

    const [fromUnit, setFromunit] = useState<string>("");
    const [toUnit, setTounit] = useState<string>("");
    const [value, setValue] = useState<number>(0);

    useEffect(() => {

        if (result) {
            setFromunit(result.fromUnit || "");
            setTounit(result.toUnit || "");
            setValue(Number(result.result.toFixed(2)));
            console.log(result);
        }

    }, [result])



    return (

        <section className=" w-[330px] h-[300px] rounded-2xl flex justify-center gap-4 items-center flex-col text-shadow-md ">

            {result && <>
                <div className=" w-[330px] h-[18%] bg-amber-300 rounded-2xl flex justify-center gap-6 items-center flex-col bg-bg1 shadow-[0_0_6px_#e5e5e5] shadow-bg1 ">
                    <h1 className="text-xl font-extrabold text-secondary ">{fromUnit}  <samp className="text-primary">To</samp> {toUnit}</h1>
                </div>

                <div className=" w-[330px] h-[80%]  rounded-2xl flex justify-center gap-6 items-center border-2 border-bg1 shadow-[0_0_6px_#e5e5e5] shadow-bg1">
                    <h1 className="text-primary text-shadow-[0_0_10px_#fca311] text-shadow-primary text-5xl">
                        {value}
                    </h1>
                </div>
            </>}


        </section>

    );
}
