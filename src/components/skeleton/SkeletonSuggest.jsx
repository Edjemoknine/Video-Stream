import Skeleton from "react-loading-skeleton";

const SkeletonSuggest = () => {
  return (
    <div className="mb-3  cursor-pointer max-w-full w-[500px]  rounded-lg overflow-hidden  bg-base-100">
      <div className="flex items-start h-full">
        <figure className="flex- w-1/2  h-full">
          <Skeleton height={120} width={"100%"} />
        </figure>
        <div className="flex-1  h-1/2 pt-2 flex flex-col justify-between px-3">
          <h4 className="mb-2 text-sm font-semibold">
            <Skeleton height={15} />
            <Skeleton height={15} width={"30%"} />
          </h4>

          <p className="cursor-pointer text-xs mb-1 hover:text-white text-gray-400">
            <Skeleton width={70} height={12} />
          </p>

          <span className="text-gray-400 text-xs">
            <Skeleton width={30} height={10} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSuggest;
