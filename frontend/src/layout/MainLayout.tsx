import Header from "../views/Header";
import Body from "../views/Body/Body";

const MainLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Body />
    </div>
  );
};

export default MainLayout;
