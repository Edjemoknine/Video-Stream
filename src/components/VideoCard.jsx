import { Link } from "react-router-dom";

const VideoCard = ({ item }) => {
  return (
    <Link to={`/video/${item.id.videoId}`}>
      <div className="sm:w-80 w-96 h-80 my-3 rounded-lg cursor-pointer hover:scale-10 transition duration-300 hover:shadow-2xl  bg-base-100 shadow-xl">
        <figure className="h-52">
          <img
            src={item?.snippet?.thumbnails?.medium?.url}
            alt="Shoes"
            className="w-full h-full  rounded-lg"
          />
        </figure>
        <div className="py-3 ">
          <div className="flex gap-3">
            <div className="w-10 h-10 ml-2 flex">
              <img
                className="w-full h-full rounded-full"
                src="https://imgs.search.brave.com/TIU8s-MRsMR36Rp-J7u8O33qmKgD0VPzAAyGd67z9NI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODY0MDcwMTQxNzYt/YjU5MmQ2ZTJkMTZi/P2F1dG89Zm9ybWF0/JmZpdD1jcm9wJnE9/ODAmdz0xMDAwJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRKOGZH/NWhkSFZ5WVd4OFpX/NThNSHg4TUh4OGZE/QT0.jpeg"
                alt="channelImg"
              />
            </div>
            <div className="flex-1 px-3">
              <h2 className="text-white font-semibold">
                {item?.snippet.title.substring(0, 40)}
              </h2>
              <Link to={`/channel/${item?.snippet.channelId}`}>
                <p className="text-sm hover:text-white">
                  {item.snippet.channelTitle}
                </p>
              </Link>
              <div className="card-actions justify-start">
                <div className="text-sm ">914K views</div>
                <div className="text-sm">1 year ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
