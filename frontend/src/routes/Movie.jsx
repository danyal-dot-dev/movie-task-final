import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Index";
import Register from "../pages/Register/Index";
import ViewMovie from "../pages/ViewMovie/Index";
import AddMovie from "../pages/AddMovie/Index";
import Outlet from "./Outlet";
export default function Movie() {
  return (
    <Routes>
      <Route path=":id" element={<ViewMovie />} />
      <Route element={<Outlet />}>
        <Route path='add' element={<AddMovie />} />
      </Route>
    </Routes>
  );
}
