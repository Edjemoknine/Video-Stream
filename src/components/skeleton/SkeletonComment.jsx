import Skeleton from "react-loading-skeleton";

const SkeletonComment = () => {
  return (
    <div className=" mb-2 gap-3 flex p-3  rounded-md">
      <div className="w-10 h-10 ">
        <Skeleton circle width={40} height={40} />
      </div>
      <div className="flex-1 flex flex-col gap-2 text-xs">
        <div className="flex  items-end gap-3">
          <h3 className="font-semibold">
            <Skeleton width={70} height={15} />
          </h3>
          <p className="text-[10px] text-gray-400">
            <Skeleton width={50} />
          </p>{" "}
        </div>

        <p className="flex flex-col gap-1">
          <Skeleton width={"80%"} />
          <Skeleton width={"50%"} />
        </p>

        <span className="flex items-center gap-2">
          <Skeleton width={25} height={25} circle />
          <Skeleton width={25} height={25} circle />
        </span>
      </div>
    </div>
  );
};

export default SkeletonComment;
