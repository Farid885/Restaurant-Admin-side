import React from "react";
import { Route, Routes } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
import Addmenu from "../pages/Addmenu";
import Categories from "../pages/Categories";
import Waitress from "../pages/Waitress";
import Tables from "../pages/Tables";
import Menu from "../pages/Menu";
import Orders from "../pages/Orders";
import Reservations from "../pages/Reservations";
import NoPage from "../pages/Nopage";
import EditOrders from "../pages/Editorder";
import Orderdetail from "../pages/Orderdetail";
import Editmenu from "../pages/Editmenu";
import Newpage from '../pages/Newpage'

function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<Categories />} />
      {/* <Route exact path="/"  element={</>} /> */}
      {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
      <Route exact path="/categories" element={<Categories />} />
      <Route exact path="/waitress" element={<Waitress />} />
      <Route exact path="/tables" element={<Tables />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/menu/add" element={<Addmenu />} />
      <Route exact path="/menu/edit/:id" element={<Editmenu />} />
      <Route exact path="/orders" element={<Orders />} />
      <Route exact path="/orders/edit" element={<EditOrders />} />
      <Route exact path="/orders/detail" element={<Orderdetail />} />
      <Route exact path="/reservations" element={<Reservations />} />
      <Route exact path="/newpage" element={<Newpage />} />
      <Route exact path="*" element={<NoPage />} />
    </Routes>
  );
}

// 1. Dashboard
// 2. Categories
// 3. Waitress
// 4. Tables
// 5. Menu
// 6. Orders
// 7. Reservations

export default Routing;
