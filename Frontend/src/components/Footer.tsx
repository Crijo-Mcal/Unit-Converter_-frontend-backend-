import githubImg from "../assets/image/github.png";
import instagramImg from "../assets/image/instagram.png";

export default function Footer() {
  return (
    <footer className="absolute w-[330px] h-[60px]  bottom-0 right-0 flex justify-between items-center ">
      <div className=" w-[150px] h-[60px] bg-secondary rounded-tl-2xl rounded-br-2xl shadow-2xl  flex justify-center items-center">
        <img src={githubImg} alt="github" className="w-10" />
      </div>
      <div className=" w-[150px] h-[60px] bg-secondary  rounded-tl-2xl rounded-br-2xl shadow-2xl flex justify-center items-center">
        <img src={instagramImg} alt="instagram" className="w-10" />
      </div>
    </footer>
  );
}
