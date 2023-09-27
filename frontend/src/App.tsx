import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Artists from "./views/Body/Artists";
import Songs from "./views/Body/Songs";
import Albums from "./views/Body/Albums";
import Genres from "./views/Body/Genres";
import NotFound from "./views/Body/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Songs />} />
          <Route path="artists" element={<Artists />} />
          <Route path="albums" element={<Albums />} />
          <Route path="genres" element={<Genres />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
