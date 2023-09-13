import React, { useEffect } from "react";
import "./App.css";
import PrivateRoutes from "./View/PrivateRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../src/View/Dashboard/Index";
import "../src/assets/base.css";
import Main from "./Layout/Main";

import Login from "./AdminAuthentication/Login";
import Register from "./AdminAuthentication/Register";
import AddAndManageCountry from "./View/Category/AddAndManageCountry";
import AddAndManageCategoryBanner from "./View/Category/AddAndManageCategoryBanner";
import AddAndManageLanguage from "./View/Category/AddAndManageLanguage";
import AddAndManageSubCategory from "./View/Category/AddAndManageSubCategory";
import AddAndManageBanner from "./View/Category/AddAndManageBanner";
import AddAndManageUnit from "./View/Category/AddAndManageUnit";

import { Toaster } from "react-hot-toast";

import AddState from "./View/State/AddState";
import AddCategory from "./View/Category/AddCategory";

function App() {
  return (
    <React.Fragment>
      <Toaster />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Main />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-state" element={<AddState />} />
            <Route path="/add-manage-category" element={<AddCategory />} />
            <Route
              path="/add-manage-language"
              element={<AddAndManageLanguage />}
            />
            <Route
              path="/add-manage-country"
              element={<AddAndManageCountry />}
            />
            <Route
              path="/add-manage-category-banner"
              element={<AddAndManageCategoryBanner />}
            />
            <Route
              path="/add-manage-subcategory"
              element={<AddAndManageSubCategory />}
            />
            <Route path="/add-manage-banner" element={<AddAndManageBanner />} />
            <Route path="/add-manage-unit" element={<AddAndManageUnit />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
