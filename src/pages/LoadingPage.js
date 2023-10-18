const LoadingPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap animate-bounce">
          <div className="animate-spin bg-light-pink mt-2 rounded-md h-6 w-6 mr-3 "></div>
          <p className="text-3xl md:text-5xl font-bold text-light-pink">
            Tunggu Sebentar....
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
