import { useQuery } from "react-query";
import { GetVideos } from "../api/Api";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { Suspense, useState } from "react";
import SkeletonCard from "./skeleton/Skeleton";
import Skeleton from "react-loading-skeleton";
import SkeletonChannel from "./skeleton/SkeletonChannel";

const Feeds = ({ Term }) => {
  const [currentPage, onChangePage] = useState("");
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["Videos", Term, currentPage],
    queryFn: () => GetVideos(Term, currentPage),
    keepPreviousData: true,
  });
  const handlenPrevPage = () => onChangePage(data?.prevPageToken);
  const handlenNextPage = () => onChangePage(data?.nextPageToken);
  const max = 12;
  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-3">
        {Array(max)
          .fill(0)
          .map((item) => (
            <SkeletonCard key={item.id} />
          ))}
      </div>
    );
  }

  if (isError) return <div>{error}</div>;
  return (
    <div className="pb-20 h-screen overflow-y-auto">
      <div className="flex flex-wrap gap-4 mt-3 ">
        {data &&
          data?.items?.map((item, i) => (
            <div key={i}>
              {item?.id?.videoId && (
                // <SkeletonCard />
                <Suspense fallback={"Loading.."}>
                  <VideoCard key={item?.id?.videoId} item={item} />
                </Suspense>
              )}
              {item?.id?.channelId && (
                // <SkeletonChannel />
                <Suspense fallback={"Loading..."}>
              <div className="w-[100wh - 200px]">
                  <ChannelCard key={item?.id?.videoId} item={item} stats={""} />
              </div>
                </Suspense>
              )}
            </div>
          ))}
      </div>
      <div className="w-32 text-white  m-10 flex gap-6">
        <button
          disabled={!data.prevPageToken}
          className={`${
            !data.prevPageToken ? "bg-gray-400" : " bg-blue-500"
          } p-3`}
          onClick={handlenPrevPage}
        >
          Prev
        </button>
        <button
          disabled={!data.nextPageToken}
          className="p-3 bg-blue-500"
          onClick={handlenNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Feeds;
