import Skeleton from "react-loading-skeleton";

const SkeletonVideoScreen = () => {
  return (
    <div>
      <Skeleton height={500} />
      <div className="statistic  py-5">
        <Skeleton width={400} height={35} borderRadius={20} />

        <div className="py-3 flex justify-between items-center">
          <Skeleton width={200} height={25} borderRadius={20} />
          <span className="flex items-center gap-2 bordr px-4 py-[6px]  rounded-full">
            <Skeleton width={70} height={25} borderRadius={20} />
          </span>
          <span className="flex cursor-pointer items-center gap-2 bordr px-4 py-[6px] rounded-full">
            <Skeleton width={70} height={25} borderRadius={20} />
          </span>
          <span className="flex cursor-pointer items-center gap-2 bordr px-4 py-[6px]  rounded-full">
            <Skeleton width={70} height={25} borderRadius={20} />
          </span>
        </div>
      </div>
      <div className="px-3">
        <Skeleton height={100} borderRadius={10} />
      </div>
    </div>
  );
};

export default SkeletonVideoScreen;
