import { motion } from "framer-motion";

/* componenet */
import TemperatureForm from "./FormstType/TemperatureForm";
import WeightForm from "./FormstType/WeightForm";
import LengthForm from "./FormstType/LengthForm";

/* type*/
import type { all_ConvertedType_avaliavle, objResponse } from "../types/Api";

type FormsProp = {
    typeForms: all_ConvertedType_avaliavle,
    setResult: React.Dispatch<React.SetStateAction<objResponse | null>>;
}


export default function Form({ typeForms, setResult }: FormsProp) {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden w-screen max-w-[330px] h-[300px] rounded-2xl flex justify-center gap-6 items-center flex-col bg-bg1 shadow-[0_0_6px_#e5e5e5] shadow-bg1 overflow-hidden">
            <h3 className="text-xl font-extrabold text-secondary text-center text-shadow-md">{typeForms} Converter</h3>
            {typeForms === "temperature" && <TemperatureForm setResult={setResult} />}
            {typeForms === "weight" && <WeightForm setResult={setResult} />}
            {typeForms === "length" && <LengthForm setResult={setResult} />}

        </motion.div>

    );
}
