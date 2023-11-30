import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { GetChannelDetail, GetChannelVidoes } from "../api/Api";
import ChannelCard from "../components/ChannelCard";
import VideoCard from "../components/VideoCard";
import SkeletonCard from "../components/skeleton/Skeleton";
import Skeleton from "react-loading-skeleton";
import SkeletonChannel from "../components/skeleton/SkeletonChannel";

const channel = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const {
    data: channelDetail,
    isError,
    error,
  } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => GetChannelDetail(id),

    // onSuccess: () => {
    //   queryClient.invalidateQueries(["suggest"]);
    // },
  });
  const { data: channelVideos, isLoading } = useQuery({
    queryKey: ["channelVideos", id],
    queryFn: () => GetChannelVidoes(id),
  });

  const max = 12;
  if (isLoading) {
    return (
      <>
        <div className="w-full h-40 px-6">
          <Skeleton height={160} borderRadius={10} />
        </div>
        <div>
          <SkeletonChannel />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-3">
          {Array(max)
            .fill(0)
            .map((item) => (
              <SkeletonCard key={item.id} />
            ))}
        </div>
      </>
    );
  }
  if (isError) return { error };
  return (
    <div className="w-full ">
      <div className="w-full h-40 px-6">
        <img
          className="w-full h-full rounded-xl object-cover"
          src={
            channelDetail?.items[0]?.brandingSettings?.image?.bannerExternalUrl
          }
          alt="cover"
        />
      </div>
      <div>
        <ChannelCard
          item={channelDetail.items[0]}
          stats={channelDetail.items[0].statistics}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-3 h-screen overflow-y-auto">
        {channelVideos?.items.map((video) => (
          <VideoCard key={video?.id?.videoId} item={video} />
        ))}
      </div>
    </div>
  );
};

export default channel;
