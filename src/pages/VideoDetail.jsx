import { useQuery, useQueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import { GetSuggestVideos, GetVideoComment, GetVideoDetail } from "../api/Api";
import { SlLike, SlDislike } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { LuScreenShare } from "react-icons/lu";
import ReactPlayer from "react-player";
import SuggestVideoCard from "../components/SuggestVideoCard";
import { useState } from "react";
import Comment from "../components/Comment";
import SkeletonVideoScreen from "../components/skeleton/SkeletonVideoScreen";
import SkeletonComment from "../components/skeleton/SkeletonComment";
import SkeletonSuggest from "../components/skeleton/SkeletonSuggest";

const Video = () => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  const [screen, setScreen] = useState(false);
  const [count, setCount] = useState(10);
  const queryClient = useQueryClient();
  const { id } = useParams();
  const {
    data: VideoDetail,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["video", id],
    queryFn: () => GetVideoDetail(id),

    onSuccess: () => {
      queryClient.invalidateQueries(["suggest"]);
    },
  });

  const { data: Suggestion } = useQuery({
    queryKey: ["suggest"],
    queryFn: () => GetSuggestVideos(id, count),
  });
  const { data: Comments } = useQuery({
    queryKey: ["comments"],
    queryFn: () => GetVideoComment(id),
  });
  const max = 12;
  const date = new Date(
    VideoDetail?.items[0]?.snippet?.publishedAt
  ).toDateString();

  if (isLoading)
    return (
      <>
        <SkeletonVideoScreen />
        <div className="flex flex-col md:flex-row gap-6">
          {/* Comments */}
          <div className="flex flex-col flex-1">
            {Array(max)
              .fill(0)
              .map((comment) => (
                <SkeletonComment key={comment} />
              ))}
          </div>

          {/* Suggestions */}
          {!screen && (
            <div className="flex mt-3 flex-col flex-1">
              {Array(max)
                .fill(0)
                .map((comment) => (
                  <SkeletonSuggest key={comment} />
                ))}
            </div>
          )}
        </div>
      </>
    );
  if (isError) return { error };

  return (
    <div
      className={`${
        !screen ? "" : "grid grid-cols-6 gap-3"
      } containe text-white px-3  mx-auto`}
    >
      <div className={`${!screen ? "" : "col-span-4"} mb-3`}>
        <div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${VideoDetail?.items[0]?.id}`}
            controls={true}
            width="100%"
            height="500px"
          />
        </div>

        <div className="statistic  py-5">
          <h1 className="text-2xl flex justify-between font-semibold  text-white">
            {VideoDetail?.items[0]?.snippet.title}
            <LuScreenShare
              onClick={() => setScreen(!screen)}
              className="cursor-pointer hidden md:flex mt-1 mr-2 hover:text-blue-400"
            />
          </h1>
          <div className="py-3 flex justify-between items-center">
            <h3 className="text-white cursor-pointer hover:text-blue-300 text-xl font-semibold">
              <Link to={`/channel/${VideoDetail?.items[0]?.snippet.channelId}`}>
                {" "}
                {VideoDetail?.items[0]?.snippet?.channelTitle}
              </Link>
            </h3>
            <span className="flex items-center gap-2 bordr px-4 py-[6px] bg-gray-700 rounded-full">
              <SlLike className="cursor-pointer" />
              {formatter.format(VideoDetail?.items[0]?.statistics?.viewCount)}
              <SlDislike className="cursor-pointer h-full ps-1 text-xl border-l " />
            </span>
            <span className="flex cursor-pointer items-center gap-2 bordr px-4 py-[6px] bg-gray-700 rounded-full">
              <PiShareFatLight />
              Share
            </span>
            <span className="flex cursor-pointer items-center gap-2 bordr px-4 py-[6px] bg-gray-700 rounded-full">
              <AiOutlineComment />{" "}
              {formatter.format(VideoDetail?.items[0]?.statistics?.likeCount)}
            </span>
          </div>
        </div>
        {/* ===== */}
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            <span className="gap-5 mb-2 flex items-end ">
              {formatter.format(VideoDetail?.items[0]?.statistics?.likeCount)}{" "}
              views
              <p className="text-sm  text-gray-300">{date}</p>
            </span>

            <p className="text-sm">
              {VideoDetail?.items[0]?.snippet?.description.substring(0, 150)}
              {" ... "}
              <br />
            </p>
          </div>
          <div className="collapse-content">
            <div className="Desc">
              {VideoDetail?.items[0]?.snippet?.description}
            </div>
            <div className="Tags">
              {VideoDetail?.items[0]?.snippet?.tags?.map((tag, i) => (
                <div key={i} className="badge badge-neutral">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ======= */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Comments */}
          <div className="flex flex-col flex-1">
            {Comments?.items?.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>

          {/* Suggestions */}
          {!screen && (
            <div className="flex mt-3 flex-col flex-1">
              {Suggestion?.items.map((video) => (
                <SuggestVideoCard key={video?.id?.videoId} video={video} />
              ))}
            </div>
          )}
        </div>
      </div>

      {screen && (
        <div className={`${!screen ? "" : "col-span-2"}`}>
          {Suggestion?.items.map((video) => (
            <SuggestVideoCard key={video?.id?.videoId} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Video;
