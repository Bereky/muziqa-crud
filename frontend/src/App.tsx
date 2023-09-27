import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="" element={<MainLayout />} />
          <Route path="artists" element={<MainLayout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
