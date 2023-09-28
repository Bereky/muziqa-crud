import Header from "../views/Header";
import Body from "../views/Body/Body";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "song/fetchSongPending" });
  }, [dispatch]);
  return (
    <div className="relative">
      <Header />
      <Body />
    </div>
  );
};

export default MainLayout;
