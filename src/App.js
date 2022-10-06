import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Packages from "./components/Packages/Packages";

import Login from "./components/Login/Login/Login";
import Error from "./components/Error/Error";
import Register from "./components/Login/Register/Register";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import SuccessPage from "./components/Login/SuccesPage/SuccessPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/packages"
          element={
            <RequireAuth>
              <Packages />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/successpage"
          element={
            <RequireAuth>
              <SuccessPage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
