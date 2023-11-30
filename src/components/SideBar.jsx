import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BiComment, BiSolidSlideshow } from "react-icons/bi";
import { BsCollectionPlayFill, BsFlag } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { MdVideoLibrary } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { Link } from "react-router-dom";

const SideBar = ({ toggle, isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        !isOpen ? "hidden" : ""
      } w-[240px] sideBar flex  flex-col text-white items-center z-10 shadow-2xl h-screen overflow-y-auto absolute top-0 left-0  bg-[#1D232A]`}
    >
      <div className=" w-full sticky top-0 left-0 mb-2  flex bg-[#1D232A] py-3 px-7 items-center gap-3 ">
        <LuMenu
          onClick={toggle}
          className="text-3xl text-white cursor-pointer "
        />

        <Link to={"/"} className="flex items-end gap-1">
          <SiYoutubemusic className="text-3xl text-red-500 cursor-pointer" />
          <h3 className="text-xl font-semibold text-white">YouTube</h3>
        </Link>
      </div>
      <div className="flex gap-2 flex-col items-center">
        <Link
          to={"/"}
          className=" w-full px-3 flex items-center gap-6 cursor-pointer rounded-lg py-2 hover:bg-white/20 "
        >
          <AiFillHome className="text-2xl text-white" />
          <p className="text-sm">Home</p>
        </Link>
        <div className=" w-full px-3 flex items-center gap-6 cursor-pointer rounded-lg py-2 hover:bg-white/20">
          <MdVideoLibrary className="text-2xl text-white" />
          <p className="text-sm">Shorts</p>
        </div>
        <div className=" w-full px-3 flex items-center gap-6 cursor-pointer rounded-lg py-2 hover:bg-white/20">
          <BiSolidSlideshow className="text-2xl text-white" />
          <p className="text-sm">Abonnements</p>
        </div>
        <div className=" w-full px-3 flex items-center gap-6 cursor-pointer rounded-lg py-2 hover:bg-white/20">
          <BsCollectionPlayFill className="text-2xl text-white" />
          <p className="text-sm">Vous</p>
        </div>
        <div className=" w-full px-3 flex items-center gap-6 cursor-pointer rounded-lg py-2 hover:bg-white/20">
          <AiFillSetting className="text-2xl text-white" />
          <p className="text-sm">Setting</p>
        </div>
        <div className=" w-full px-3 flex items-center gap-6 cursor-pointer rounded-lg py-2 hover:bg-white/20">
          <BsFlag className="text-2xl text-white" />
          <p className="text-sm">Historique </p>
        </div>
        <div className=" w-full px-3 flex items-center gap-6 cursor-pointer rounded-lg py-2 hover:bg-white/20">
          <IoIosHelpCircleOutline className="text-2xl text-white" />
          <p className="text-sm">Help </p>
        </div>
        <div className=" w-full px-3 flex items-center gap-6 cursor-pointer rounded-lg py-2 hover:bg-white/20">
          <BiComment className="text-2xl text-white" />
          <p className="text-sm">Send Comments </p>
        </div>
        <div className=" w-full px-3 flex items-center gap-6 cursor-pointer rounded-lg py-2 hover:bg-white/20">
          <p className="text-sm text-gray-400 font-semibold">
            {" "}
            About Press Copyright <br />
            Contact us Creators <br />
            Advertise Developers
          </p>
        </div>
        <div className=" w-full px-3 flex items-center gap-6 cursor-pointer rounded-lg py-2 hover:bg-white/20">
          <p className="text-sm text-gray-400 font-semibold">
            Terms Privacy Policy&Safety <br />
            How YouTube works <br />
            Test new features{" "}
          </p>
        </div>
      </div>
      <p>&copy; 2013 Google LLC</p>
    </div>
  );
};

export default SideBar;
