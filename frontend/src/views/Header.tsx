const Header = () => {
  return (
    <div className="w-full h-20 bg-zinc-800 text-sky-600 flex flex-row justify-start items-center absolute z-20 right-0 border-b-2 border-zinc-700">
      <div className="w-64 h-full bg-slate-00 flex justify-start items-center ml-3 px-5">
        <h1 className="text-4xl font-extrabold">MuziQa</h1>
      </div>
      <div className="w-64 h-full flex justify-start items-center p-0">
        <h1 className="text-xl font-bold">All Songs</h1>
      </div>
      <div className="w-52 h-full bg-slate-00 flex justify-center items-center absolute right-0 p-5 mr-3">
        <button className="w-48 h-full outline outline-sky-600 rounded-md">
          Add Song
        </button>
      </div>
    </div>
  );
};

export default Header;
