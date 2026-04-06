export default function Navbar() {
  return (
    <nav className="absolute w-[435px] h-[60px] bg-secondary top-0 right-0 rounded-tr-2xl rounded-bl-2xl shadow-2xl ">
      <ol className="w-full h-full flex justify-around items-center text-primary">
        <li>temperature</li>
        <li>length</li>
        <li>weight</li>
      </ol>
    </nav>
  );
}
