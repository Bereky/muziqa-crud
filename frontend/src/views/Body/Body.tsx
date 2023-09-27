import { Outlet } from "react-router-dom";
import LeftSidebar from "../Sidebar/LeftSidebar";
import RighSidebar from "../Sidebar/RightSidebar";

const Body = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-row justify-start items-start absolute z-10 top-0 pt-20">
      <LeftSidebar />
      <div className="w-auto h-full  flex justify-start items-start pt-8 p-4">
        <Outlet />
      </div>
      <RighSidebar />
    </div>
  );
};

export default Body;
