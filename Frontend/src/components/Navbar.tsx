export default function Navbar() {
  return (
    <nav className="absolute w-[435px] h-[60px] bg-secondary top-0 right-0 rounded-tr-2xl rounded-bl-2xl ">
      <ol className="w-full h-full flex justify-around items-center text-primary ">
        <li className="text-shadow-none hover:text-shadow-[0_0_4px_#fca311] cursor-pointer transition">temperature</li>
        <li className="text-shadow-none hover:text-shadow-[0_0_4px_#fca311] cursor-pointer" >length</li>
        <li className="text-shadow-none hover:text-shadow-[0_0_4px_#fca311] cursor-pointer">weight</li>
      </ol>
    </nav>
  );
}
