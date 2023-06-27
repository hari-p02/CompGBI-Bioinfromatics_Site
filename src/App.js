import './App.css';
import Navbar from './componenets/Navbar';
import Home from './pages/Home';
import Modules from './pages/Modules';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/modules" element={<Modules />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;