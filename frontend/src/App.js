import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShippingPage from "./pages/ShippingPage";
import { useSelector } from "react-redux";
import PaymentPage from "./pages/PaymentPage";
// import ProtectedRoute from "./components/ProtectedRoute";

const Layout = ()=>{
  return <>
       <Header/>
       <Outlet/>
       <Footer/>
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/shipping",
        element: <ShippingPage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Header/>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/> */}
    </>
  );
}

export default App;
