
import { useState } from "react";
import { motion } from "framer-motion";

/* img */
import bg from "./assets/image/bg.jpg";

/* components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Result from "./components/Result";
import Form from "./components/Forms";

/*type*/
import type { objResponse } from "./types/Api";
import type { all_ConvertedType_avaliavle } from "./types/Api";




export default function App() {
  const [result, setResult] = useState<objResponse | null>(null)
  const [typeCoverted, setTypeCorverted] = useState<all_ConvertedType_avaliavle>("temperature")


  return (
    <main className="w-screen h-screen  bg-bg1 flex flex-col  justify-center items-center ">
      <section className=" relative bg-black lg:bg-transparent w-full lg:w-[900px] h-full  lg:max-h-[550px]   flex flex-col justify-between items-center">
        <Navbar setTypeConverted={setTypeCorverted} />

        <motion.section
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.90, ease: "easeOut" }}
          className="relative w-full lg:w-[900px] h-full h-auto  lg:h-[550px] py-10 lg:p-0  bg-amber-300  clip gap-y-6  flex  justify-center  items-center"
          style={{
            backgroundImage: `url(${bg})`,
          }}>
          <div className=" absolute w-full h-full bg-black opacity-78 "></div>
          <div className="absolute w-full h-full bg-radial from-transparent  to-black  lg:hidden"></div>

          <div className="z-10 my-10 lg:my-0 w-[80%] h-auto flex gap-6 flex-col lg:flex-row justify-between items-center ">

            {typeCoverted === "temperature" && <Form typeForms="temperature" setResult={setResult} />}
            {typeCoverted === "weight" && <Form typeForms="weight" setResult={setResult} />}
            {typeCoverted === "length" && <Form typeForms="length" setResult={setResult} />}

            <Result result={result} />
          </div>
        </motion.section>

        <Footer />
      </section>
    </main>
  );
}
