import { AiFillHome } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { BiSolidSlideshow } from "react-icons/bi";
import { BsCollectionPlayFill } from "react-icons/bs";
import Feeds from "../components/Feeds";
const Home = ({ Term }) => {
  return (
    <div className="flex fixed w-full ">
      <div className="  w-[100px] hidden  py-3 bg-gray-80 md:flex items-center gap-3 flex-col side">
        <div className="w-[70px] h-[70px] rounded-lg justify-center cursor-pointer hover:bg-white/20 flex flex-col items-center">
          <AiFillHome className="text-[24px]" />
          <p className="text-[10px]">Home</p>
        </div>
        <div className="w-[70px] h-[70px] rounded-lg justify-center cursor-pointer hover:bg-white/20 flex flex-col items-center">
          <MdVideoLibrary className="text-[24px]" />
          <p className="text-[10px]">Shorts</p>
        </div>
        <div className="w-[70px] h-[70px] rounded-lg justify-center cursor-pointer hover:bg-white/20 flex flex-col items-center">
          <BiSolidSlideshow className="text-[24px]" />
          <p className="text-[10px]">Abonnements</p>
        </div>
        <div className="w-[70px] h-[70px] rounded-lg justify-center cursor-pointer hover:bg-white/20 flex flex-col items-center">
          <BsCollectionPlayFill className="text-[24px]" />
          <p className="text-[10px]">Vous</p>
        </div>
      </div>
      <div className="px-8 ">
        <Feeds Term={Term} />
      </div>
    </div>
  );
};

export default Home;
