const RighSidebar = () => {
  return (
    <div className="w-64 h-full bg-zinc-800 text-zinc-200 flex justify-center items-center p-3 absolute right-0 top-0">
      <div className="w-full h-full bg-slate-00 flex flex-col justify-start items-center pt-20">
        <div className="w-full h-24 flex justify-center items-center py-2 ">
          <div className="w-48 h-full rounded-md flex flex-row justify-center items-center space-x-2 px-3  bg-sky-600">
            <h1 className="text-4xl font-bold">12</h1>
            <h2 className="text-lg text-end">Songs</h2>

            <i className="fas fa-music text-3xl pl-5"></i>
          </div>
        </div>

        <div className="w-full h-24 flex justify-center items-center py-2">
          <div className="w-48 h-full rounded-md flex flex-row justify-center items-center space-x-2 px-3 bg-sky-600">
            <h1 className="text-4xl font-bold">4</h1>
            <h2 className="text-lg text-end">Artists</h2>

            <i className="fas fa-music text-3xl pl-5"></i>
          </div>
        </div>

        <div className="w-full h-24 flex justify-center items-center py-2">
          <div className="w-48 h-full rounded-md flex flex-row justify-center items-center space-x-2 px-3 bg-sky-600">
            <h1 className="text-4xl font-bold">2</h1>
            <h2 className="text-lg text-end">Albums</h2>

            <i className="fas fa-music text-3xl pl-5"></i>
          </div>
        </div>

        <div className="w-full h-24 flex justify-center items-center py-2">
          <div className="w-48 h-full rounded-md flex flex-row justify-center items-center space-x-2 px-3 bg-sky-600">
            <h1 className="text-4xl font-bold">10</h1>
            <h2 className="text-lg text-end">Genres</h2>

            <i className="fas fa-music text-3xl pl-5"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RighSidebar;
