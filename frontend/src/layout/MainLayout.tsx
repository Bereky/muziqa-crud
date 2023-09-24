import { Children, ReactNode } from "react";
import SideBar from "../components/SideBar";

const MainLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Body />
    </div>
  );
};

const Header = () => {
  return (
    <div className="w-full h-20 bg-zinc-800 text-sky-600 flex flex-row justify-start items-center absolute z-20 right-0 border-b-2 border-zinc-700">
      <div className="w-64 h-full bg-slate-00 flex justify-center items-center p-5">
        <h1 className="text-3xl font-bold">MuziQa</h1>
      </div>
      <div className="w-64 h-full flex justify-start items-center p-5">
        <h1 className="text-xl font-bold">All Songs</h1>
      </div>
      <div className="w-52 h-full bg-slate-00 flex justify-center items-center absolute right-0 p-5 mr-3">
        <button className="w-48 h-full outline outline-slate-500 rounded-md">
          Add Song
        </button>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-row justify-start items-start absolute z-10 top-0 pt-20">
      <LeftSidebar />
      <div className="w-auto h-full  flex justify-start items-start pt-8 p-4">
        <Table />
      </div>
      <RighSidebar />
    </div>
  );
};

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

const Table = () => {
  return (
    <table className="min-w-full bg-zin-800 border-none text-zinc-200">
      <thead>
        <tr>
          <th className="py-1 px-1 w-5 text-start">#</th>
          <th className="py-2 px-4 w-40 text-start">Title</th>
          <th className="py-2 px-4 w-48 text-start">Artist</th>
          <th className="py-2 px-4 w-36 text-start">Album</th>
          <th className="py-2 px-4 w-24 text-start">Genre</th>
          <th className="py-2 px-4 w-32 text-start">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-1 px-1 ">1</td>
          <td className="py-2 px-4 ">Earth Song</td>
          <td className="py-2 px-4 ">Michael Jackson</td>
          <td className="py-2 px-4 ">-</td>
          <td className="py-2 px-4 ">Pop</td>
          <td className="py-2 px-4 ">
            <div className="flex justify-start items-center flex-row space-x-4">
              <button className="w-8 h-8 outline outline-slate-500 rounded-md hover:bg-slate-500">
                <i className="fas fa-pen-to-square text-sm text-sky-400"></i>
              </button>
              <button className="w-8 h-8 outline outline-slate-500 rounded-md text-center hover:bg-slate-500">
                <i className="fas fa-trash text-sm text-red-500"></i>
              </button>
            </div>
          </td>
        </tr>

        <tr>
          <td className="py-1 px-1 ">1</td>
          <td className="py-2 px-4 ">Earth Song</td>
          <td className="py-2 px-4 ">Michael Jackson</td>
          <td className="py-2 px-4 ">-</td>
          <td className="py-2 px-4 ">Pop</td>
        </tr>

        <tr>
          <td className="py-1 px-1 ">1</td>
          <td className="py-2 px-4 ">Earth Song</td>
          <td className="py-2 px-4 ">Michael Jackson</td>
          <td className="py-2 px-4 ">-</td>
          <td className="py-2 px-4 ">Pop</td>
        </tr>

        <tr>
          <td className="py-1 px-1 ">1</td>
          <td className="py-2 px-4 ">Earth Song</td>
          <td className="py-2 px-4 ">Michael Jackson</td>
          <td className="py-2 px-4 ">-</td>
          <td className="py-2 px-4 ">Pop</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MainLayout;
