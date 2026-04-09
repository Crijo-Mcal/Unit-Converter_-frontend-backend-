/* type */
import type { all_ConvertedType_avaliavle } from "../types/Api";
import { motion } from "framer-motion";

type prop = {
  setTypeConverted: React.Dispatch<React.SetStateAction<all_ConvertedType_avaliavle>>;
}

export default function Navbar({ setTypeConverted }: prop) {


  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.90, ease: "easeOut" }}
      className="lg:absolute w-full lg:w-[435px] min-h-[60px] flex justify-center items-center bg-secondary lg:top-0 lg:right-0 lg:rounded-tr-2xl lg:rounded-bl-2xl overflow-hidden">
      <ol className="w-full h-full  flex justify-around items-center text-primary ">
        <li className="text-shadow-none hover:text-shadow-[0_0_4px_#fca311] cursor-pointer transition"
          onClick={() => setTypeConverted("temperature")}>temperature</li>
        <li className="text-shadow-none hover:text-shadow-[0_0_4px_#fca311] cursor-pointer"
          onClick={() => setTypeConverted("length")}>length</li>
        <li className="text-shadow-none hover:text-shadow-[0_0_4px_#fca311] cursor-pointer"
          onClick={() => setTypeConverted("weight")}>weight</li>
      </ol>
    </motion.nav>
  );
}
