
import { useState } from "react";

/* img */
import bg from "./assets/image/bg.jpg";

/* components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TemperatureForm from "./components/Forms/TemperatureForm";
import LengthForm from "./components/Forms/LengthForm";
import WeightForm from "./components/Forms/WeightForm"
import Result from "./components/Result";

/*type*/
import type { objResponse } from "./types/Api";
import type { all_ConvertedType_avaliavle } from "./types/Api";




export default function App() {
  const [result, setResult] = useState<objResponse | null>(null)
  const [typeCoverted, setTypeCorverted] = useState<all_ConvertedType_avaliavle>("temperature")


  return (
    <main className="w-screen h-screen  bg-bg1 flex flex-col  justify-center items-center ">
      <section className=" relative bg-black lg:bg-transparent w-full lg:w-[900px] h-full lg:h-[550px]   flex flex-col justify-between items-center">
        <Navbar setTypeConverted={setTypeCorverted} />

        <section className="relative w-full lg:w-[900px] h-auto min-h-[550px] py-10 lg:p-0  bg-amber-300  clip gap-y-6  flex  justify-center  items-center"
          style={{
            backgroundImage: `url(${bg})`,
          }}>
          <div className=" absolute w-full h-full bg-black opacity-78 "></div>
          <div className="absolute w-full h-full bg-radial from-transparent  to-black  lg:hidden"></div>

          <div className="z-10 w-[80%] h-auto flex gap-6 flex-col lg:flex-row justify-between items-center">
            <div className="z mt-0 lg:mt-8">
              {typeCoverted === "temperature" && <TemperatureForm setResult={setResult} />}
              {typeCoverted === "length" && <LengthForm setResult={setResult} />}
              {typeCoverted === "weight" && <WeightForm setResult={setResult} />}
            </div>

            <Result result={result} />
          </div>
        </section>

        <Footer />
      </section>
    </main>

  );
}
