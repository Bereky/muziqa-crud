const LeftSidebar = () => {
  return (
    <div className="w-64 h-full bg-zinc-800 text-sky-600 flex justify-center items-center p-3 pt-5">
      <div className="w-full h-full flex flex-col justify-start items-center p-2">
        <div className="w-full h-16 flex justify-center items-center py-2">
          <button className="w-48 h-full outline outline-sky-500 rounded-md bg-sky-600 text-zinc-200">
            All Songs
          </button>
        </div>
        <div className="w-full h-16 flex justify-center items-center py-2">
          <button className="w-48 h-full outline outline-slate-500 rounded-md">
            Artists
          </button>
        </div>
        <div className="w-full h-16 flex justify-center items-center py-2">
          <button className="w-48 h-full outline outline-slate-500 rounded-md">
            Albums
          </button>
        </div>
        <div className="w-full h-16 flex justify-center items-center py-2">
          <button className="w-48 h-full outline outline-slate-500 rounded-md">
            Genres
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
