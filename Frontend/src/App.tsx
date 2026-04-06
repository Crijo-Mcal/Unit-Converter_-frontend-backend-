/* components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main className="w-screen h-screen bg-bg1 flex justify-center items-center">
        <section className=" relative w-[900px]  h-[550px]   flex justify-center items-center">
          <Navbar />

          <div className="clip bg-cyan-500 ">
            <div className="w-full h-full bg-black opacity-78"></div>
          </div>

          <Footer />
        </section>
      </main>
    </>
  );
}
