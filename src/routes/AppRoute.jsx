import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts";
import SpacecraftBuild from "../pages/SpacecraftBuild/SpacecraftBuild";
import Spacecraft from "../pages/Spacecraft/Spacecraft.jsx";
import Planets from "../pages/Planets/Planets";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spacecrafts" element={<Spacecrafts />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/spacecraft/:id" element={<Spacecraft />} />
      <Route path="/spacecraft/build" element={<SpacecraftBuild />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoute;
