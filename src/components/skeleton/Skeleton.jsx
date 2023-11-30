import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <div className=" md:w-80 h-80 rounded-lg cursor-pointer hover:scale-10 transition duration-300 hover:shadow-2xl  bg-base-100 shadow-xl">
      <Skeleton height={208} />
      <div className="py-3 ">
        <div className="flex gap-3">
          <div className="w-10 h-10 ml-2 flex">
            <Skeleton circle width={40} height={40} />
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-white font-semibold">
              <Skeleton />
            </h2>

            <p className="text-sm hover:text-white">
              <Skeleton />
            </p>

            <div className="card-actions justify-start">
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
