import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const Comment = ({ comment }) => {
  console.log(comment);

  const date = new Date(
    comment?.snippet?.topLevelComment?.snippet?.publishedAt
  ).toDateString();
  return (
    <div className=" mb-2 gap-3 flex p-3  rounded-md">
      <div className="w-10 h-10 ">
        <img
          className="w-full h-full rounded-full"
          src={
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
          }
          alt="avatar"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 text-xs">
        <div className="flex  items-center gap-3">
          <h3 className="font-semibold">
            {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </h3>
          <p className="text-[10px] text-gray-400">{date}</p>{" "}
        </div>

        <p>{comment?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
        {comment?.snippet?.topLevelComment?.snippet?.likeCount > 0 && (
          <span className="flex items-center gap-2">
            <BiLike className="cursor-pointer text-sm  hover:text-blue-500" />{" "}
            {comment?.snippet?.topLevelComment?.snippet?.likeCount}{" "}
            <BiDislike className="cursor-pointer text-sm hover:text-blue-500 " />{" "}
            <button>Replay</button>
          </span>
        )}
        {comment?.snippet?.totalReplayCount && (
          <p className="flex items-center gap-2">
            <MdOutlineArrowDropDownCircle className="cursor-pointer text-blue-500" />
            {comment?.snippet?.totalReplyCount} replies
          </p>
        )}
      </div>
    </div>
  );
};

export default Comment;
