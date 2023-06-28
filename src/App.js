import "./App.css";
import Navbar from "./componenets/Navbar";
import ModsLayout from "./layouts/ModsLayout";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Mod1 from "./pages/Modules/Mod1";
import Mod2 from "./pages/Modules/Mod2";
import Mod3 from "./pages/Modules/Mod3";
import Mod4 from "./pages/Modules/Mod4";
import Mod5 from "./pages/Modules/Mod5";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="modules" element={<ModsLayout />}>
        <Route index element={<Modules />} />
        <Route path="mod1" element={<Mod1 />} />
        <Route path="mod2" element={<Mod2 />} />
        <Route path="mod3" element={<Mod3 />} />
        <Route path="mod4" element={<Mod4 />} />
        <Route path="mod5" element={<Mod5 />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
