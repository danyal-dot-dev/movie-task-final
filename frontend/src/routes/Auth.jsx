import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Index";
import Register from "../pages/Register/Index";
import Logout from "../pages/Logout/Index";
import Outlet from "./Outlet";

export default function Auth() {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route element={<Outlet />}>
        <Route path='logout' element={<Logout />} />
      </Route>
    </Routes>
  );
}
