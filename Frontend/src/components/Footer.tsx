import githubImg from "../assets/image/github.png";
import instagramImg from "../assets/image/instagram.png";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.90, ease: "easeOut" }}
      className="lg:absolute w-full lg:w-[330px] h-[60px] bg-secondary lg:bg-transparent  bottom-0 right-0 flex justify-center lg:justify-between items-center ">
      <div className=" w-[150px] h-[60px] bg-secondary lg:rounded-tl-2xl lg:rounded-br-2xl lg:shadow-2xl  flex justify-center items-center">
        <img src={githubImg} alt="github" className="lg:w-10 w-8 cursor-pointer" />
      </div>
      <div className=" w-[150px] h-[60px] bg-secondary  lg:rounded-tl-2xl lg:rounded-br-2xl lg:shadow-2xl flex justify-center items-center">
        <img src={instagramImg} alt="instagram" className="lg:w-10 w-8 cursor-pointer" />
      </div>
    </motion.footer>
  );
}
