import { useSelector } from "react-redux";

const RighSidebar = () => {
  const { songs, artists, albums, genres } = useSelector(
    (state: RootState) => state.song
  );

  return (
    <div className="w-64 h-full min-h-96 bg-zinc-800 text-zinc-200 flex justify-center items-center fixed right-0 pt-2">
      <div className="w-full h-full bg-zinc-800 flex flex-col justify-start items-center pt-4 ">
        <div className="w-64 h-auto flex justify-center items-center py-2 ">
          <div className="w-48 h-20 rounded-md flex flex-row justify-center items-center space-x-2 px-3  bg-sky-600">
            <h1 className="text-4xl font-bold">{songs.length}</h1>
            <h2 className="text-lg text-end">Songs</h2>

            <i className="fas fa-music text-3xl pl-5"></i>
          </div>
        </div>

        <div className="w-full h-auto flex justify-center items-center py-2">
          <div className="w-48 h-20 rounded-md flex flex-row justify-center items-center space-x-2 px-3 bg-sky-600">
            <h1 className="text-4xl font-bold">{artists.length}</h1>
            <h2 className="text-lg text-end">Artists</h2>

            <i className="fas fa-music text-3xl pl-5"></i>
          </div>
        </div>

        <div className="w-full h-auto flex justify-center items-center py-2">
          <div className="w-48 h-20 rounded-md flex flex-row justify-center items-center space-x-2 px-3 bg-sky-600">
            <h1 className="text-4xl font-bold">{albums.length}</h1>
            <h2 className="text-lg text-end">Albums</h2>

            <i className="fas fa-music text-3xl pl-5"></i>
          </div>
        </div>

        <div className="w-full h-auto flex justify-center items-center py-2">
          <div className="w-48 h-20 rounded-md flex flex-row justify-center items-center space-x-2 px-3 bg-sky-600">
            <h1 className="text-4xl font-bold">{genres.length}</h1>
            <h2 className="text-lg text-end">Genres</h2>

            <i className="fas fa-music text-3xl pl-5"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RighSidebar;
