import { Link, useLocation } from "react-router-dom";

const LeftSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 h-full bg-zinc-800 text-sky-600 flex justify-center items-center p-3 pt-5">
      <div className="w-full h-full flex flex-col justify-start items-center p-2">
        <div className="w-full h-16 flex justify-center items-center py-2">
          <Link to={""} className="w-48 h-full">
            <button
              className={`w-48 h-full outline outline-sky-600 rounded-md ${
                location.pathname === "/"
                  ? "bg-sky-600 text-zinc-200"
                  : "bg-none text-sky-600"
              } `}
            >
              All Songs
            </button>
          </Link>
        </div>
        <div className="w-full h-16 flex justify-center items-center py-2">
          <Link to={"artists"} className="w-48 h-full">
            <button
              className={`w-48 h-full outline outline-sky-600 rounded-md ${
                location.pathname === "/artists"
                  ? "bg-sky-600 text-zinc-200"
                  : "bg-none text-sky-600 "
              } `}
            >
              Artists
            </button>
          </Link>
        </div>
        <div className="w-full h-16 flex justify-center items-center py-2">
          <Link to={"albums"} className="w-48 h-full">
            <button
              className={`w-48 h-full outline outline-sky-600 rounded-md ${
                location.pathname === "/albums"
                  ? "bg-sky-600 text-zinc-200"
                  : "bg-none text-sky-600 "
              } `}
            >
              Albums
            </button>
          </Link>
        </div>
        <div className="w-full h-16 flex justify-center items-center py-2">
          <Link to={"genres"} className="w-48 h-full">
            <button
              className={`w-48 h-full outline outline-sky-600 rounded-md ${
                location.pathname === "/genres"
                  ? "bg-sky-600 text-zinc-200"
                  : "bg-none text-sky-600 "
              } `}
            >
              Genres
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
