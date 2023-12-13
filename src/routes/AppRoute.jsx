import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts";
// import SpacecraftBuild from "../pages/SpacecraftBuild/SpacecraftBuild";
// import Spacecraft from "../pages/Spacecraft/Spacecraft";
import Planets from "../pages/Planets/Planets";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spacecrafts" element={<Spacecrafts />} />
      <Route path="/planets" element={<Planets />} />
    </Routes>
  );
}

export default AppRoute;
