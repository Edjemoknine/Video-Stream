import { Link } from "react-router-dom";

const SuggestVideoCard = ({ video }) => {
  // console.log(video);
  const date = new Date(video?.snippet?.publishedAt).toDateString();

  return (
    <div className="mb-3  cursor-pointer max-w-full w-[500px]  rounded-lg overflow-hidden  bg-base-100">
      <Link to={`/video/${video?.id?.videoId}`}>
        <div className="flex items-start h-full">
          <figure className="flex- w-1/2  h-full">
            <img
              className="w-full h-full object-contain rounded-lg"
              src={video?.snippet.thumbnails?.medium?.url}
              alt="Video"
            />
          </figure>
          <div className="flex-1  h-1/2 pt-2 flex flex-col justify-between px-3">
            <h4 className="mb-3 text-sm font-semibold">
              {video?.snippet?.title}
            </h4>
            <Link to={`/channel/${video?.snippet?.channelId}`}>
              {" "}
              <p className="cursor-pointer text-xs mb-1 hover:text-white text-gray-400">
                {video?.snippet?.channelTitle}
              </p>
            </Link>
            <span className="text-gray-400 text-xs">{date}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SuggestVideoCard;
