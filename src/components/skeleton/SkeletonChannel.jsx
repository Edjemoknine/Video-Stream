import Skeleton from "react-loading-skeleton";

const SkeletonChannel = () => {
  return (
    <div className="flex justify-center max-w-screen-md gap-3  p-5 items-center h-80 bg-base-100 shadow-xl">
      <figure className="w-44  h-44 hidden sm:block">
        <Skeleton circle width={150} height={150} />
      </figure>
      <div className="flex-1 ">
        <h2 className="text-2xl font-semibold text-white mb-2">
          <Skeleton />
        </h2>
        {/* <span className="flex flex-col items-center"> */}
        <Skeleton />
        <Skeleton />
        <Skeleton />
        {/* </span> */}
        <p></p>
        <button className="btn-sm mt-6 ">
          <Skeleton width={120} height={40} />
        </button>
      </div>
    </div>
  );
};

export default SkeletonChannel;
