import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";
import QRScanner from "./components/QRScanner";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/qr-scanner" element={<QRScanner />} />
      </Route>
      <Route path="/login" index element={<Login />} />
      <Route path="/register" index element={<Register />} />
    </>
  )
);

export default router;
