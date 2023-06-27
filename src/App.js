import './App.css';
import Navbar from './componenets/Navbar';
import ModsLayout from './layouts/ModsLayout';
import Home from './pages/Home';
import Modules from './pages/Modules';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Mod1 from './pages/Modules/Mod1';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="modules" element={<ModsLayout />}>
          <Route index element={<Modules />} />
          <Route path='mod1' element={<Mod1 />} />
        </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;