import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import Product from "./pages/ProductPage";

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
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
