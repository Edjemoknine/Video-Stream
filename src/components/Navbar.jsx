import { LuMenu } from "react-icons/lu";
import { SiYoutubemusic } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineVideoCameraAdd, AiOutlineBell } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggle, setTerm }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      setTerm(search);
      navigate("/");
    }
  };
  return (
    <div className="w-full sticky bg-[#1D232A] top-0 left-0 ">
      <div className=" p-3 px-8  mx-auto gap-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <LuMenu
            onClick={toggle}
            className="text-3xl z-50  text-white cursor-pointer hover:bg-white/20 h-10 w-10 rounded-full p-1"
          />
          <div className="flex items-end gap-1">
            <SiYoutubemusic className="md:text-3xl text-2xl text-red-500 cursor-pointer" />
            <h3 className="md:text-xl font-semibold text-white">YouTube</h3>
          </div>
        </div>
        <form
          className="border-gray-700 w-1/2 flex items-center justify-between border rounded-full overflow-hidden"
          onSubmit={handleSubmit}
        >
          <input
            className="px-4 py-1 flex-1 text-sm bg-transparent outline-none border-none"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="px-4 bg-slate-600 py-1.5 cursor-pointer"
            type="submit"
          >
            <IoIosSearch className="text-xl cursor-pointer " />
          </button>
        </form>

        <div className="flex items-center gap-6 ">
          <AiOutlineVideoCameraAdd className="hidden md:flex text-2xl cursor-pointer hover:bg-white/20 h-8 w-8 rounded-full p-1" />
          <AiOutlineBell className=" hidden md:flex text-2xl cursor-pointer  hover:bg-white/20 h-8 w-8 rounded-full p-1" />
          <img
            className="w-8 h-8 rounded-full object-cover"
            src="https://imgs.search.brave.com/pg5nXxULxa0ub8PCG0P1DzTjUdYfvXYD2Oz4vwywmIQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvZmlsZXR5/cGVzL3Bob3RvLndl/YnA"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
