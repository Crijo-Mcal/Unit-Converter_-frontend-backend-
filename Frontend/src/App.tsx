
import { useState } from "react";

/* components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TemperatureForm from "./components/Forms/TemperatureForm";
import Result from "./components/Result";

/*type*/
import type { objResponse } from "./types/Api";




export default function App() {
  const [result, setResult] = useState<objResponse | null>(null)


  return (
    <>
      <main className="w-screen h-screen bg-bg1 flex justify-center items-center">
        <section className=" relative w-[900px]  h-[550px]   flex justify-center items-center">
          <Navbar />

          <section className="rel clip bg-cyan-500 flex justify-evenly items-center ">
            <div className="absolute w-full h-full bg-black opacity-78 -z-10"></div>
            <TemperatureForm setResult={setResult} />
            <Result result={result} />
          </section>

          <Footer />
        </section>
      </main>
    </>
  );
}
