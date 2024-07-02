import { Link } from "react-router-dom";
const formatter = Intl.NumberFormat("en", { notation: "compact" });
const ChannelCard = ({ item, stats }) => {
  return (
    <Link to={`/channel/${item?.id?.channelId}`} className="block">
      <div className="flex justify-center max-w-7xl w-full gap-5 p-5 items-center  h-80 bg-base-100 shadow-xl">
        <figure className="w-44 h-44 hidden sm:block">
          <img
            className="h-full w-full rounded-full"
            src={item?.snippet?.thumbnails?.medium.url}
            alt="channel"
          />
        </figure>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-white mb-2">
            {item?.snippet?.title}
          </h2>
          <span className="flex items-center mb-2 gap-3">
            {stats && (
              <>
                {" "}
                <p>{item.snippet.customUrl}</p>
                <p className="text-sm">
                  {formatter.format(stats.subscriberCount)} subscribers{" "}
                </p>
                <p className="text-sm">
                  {formatter.format(stats.videoCount)} videos
                </p>
              </>
            )}
          </span>
          <p className=" max-w-2xl w-full">{item?.snippet?.description}</p>
          <button className="btn-sm mt-6 btn-primary">Subscribe</button>
        </div>
      </div>
    </Link>
  );
};

export default ChannelCard;
