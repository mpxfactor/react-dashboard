import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.scss";

const App = () => {
  return (
    <div className="app ">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New title="Add new User" inputs={userInputs} />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New title="Add new Product" inputs={productInputs} />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
