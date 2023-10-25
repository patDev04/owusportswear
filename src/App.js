import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Pages/Home";
import "./index.scss";
import Footer from "./Components/Footer/Footer";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Auth from "./Pages/Auth/Auth";
import { ToastContainer } from "react-toastify";
import RegistrationComplete from "./Pages/Auth/RegistrationComplete";

function App() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route
            path="auth/register/complete"
            element={<RegistrationComplete />}
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products/:id" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
