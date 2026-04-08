/* type */
import type { all_ConvertedType_avaliavle } from "../types/Api";

type prop = {
  setTypeConverted: React.Dispatch<React.SetStateAction<all_ConvertedType_avaliavle>>;
}

export default function Navbar({ setTypeConverted }: prop) {


  return (
    <nav className="lg:absolute w-full lg:w-[435px] h-[60px] bg-secondary lg:top-0 lg:right-0 lg:rounded-tr-2xl lg:rounded-bl-2xl overflow-hidden">
      <ol className="w-full h-full flex justify-around items-center text-primary ">
        <li className="text-shadow-none hover:text-shadow-[0_0_4px_#fca311] cursor-pointer transition"
          onClick={() => setTypeConverted("temperature")}>temperature</li>
        <li className="text-shadow-none hover:text-shadow-[0_0_4px_#fca311] cursor-pointer"
          onClick={() => setTypeConverted("length")}>length</li>
        <li className="text-shadow-none hover:text-shadow-[0_0_4px_#fca311] cursor-pointer"
          onClick={() => setTypeConverted("weight")}>weight</li>
      </ol>
    </nav>
  );
}
