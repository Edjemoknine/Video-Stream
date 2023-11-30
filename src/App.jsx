import { Routes, Route } from "react-router-dom";
// import { Home, VideoDetail, ChannelDetail } from "./pages";

import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Suspense, lazy, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

const Home = lazy(() => import("./pages/Home"));
const VideoDetail = lazy(() => import("./pages/VideoDetail"));
const ChannelDetail = lazy(() => import("./pages/ChannelDetail"));

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [Term, setTerm] = useState("React");
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Navbar toggle={toggle} setTerm={setTerm} />
      <SideBar toggle={toggle} isOpen={isOpen} />
      <SkeletonTheme baseColor="#ccc" highlightColor="#fff">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"Loading..."}>
                <Home Term={Term} />
              </Suspense>
            }
          />
          <Route
            path="/channel/:id"
            element={
              <Suspense fallback={"Loading..."}>
                <ChannelDetail />
              </Suspense>
            }
          />
          <Route
            path="/video/:id"
            element={
              <Suspense fallback={"Loading..."}>
                <VideoDetail />
              </Suspense>
            }
          />
        </Routes>
      </SkeletonTheme>
    </>
  );
}

export default App;
