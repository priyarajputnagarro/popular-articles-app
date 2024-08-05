const Shimmer = () => {
  return (
    <div className="w-[60vw] mt-12 m-auto" data-testid="shimmer_container">
      {[1, 2, 3, 4]?.map((item) => (
        <div className="flex mb-10" key={item} data-testid="shimmer">
          <div className="flex-1 mr-5">
            <div className="h-10 bg-gray-200 mb-5" />
            <div className="w-48 h-5 bg-gray-200 mr-5" />
          </div>
          <div className="w-52 h-32 bg-gray-200" />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
