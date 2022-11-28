import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Order from "../../Pages/Dashboard/Order/Order";
import Home from "../../Pages/Home/Home/Home";
import Login from "./../../Pages/Login/Login";
import Signup from "./../../Pages/Signup/Signup";
import AllBuyer from "./../../Pages/Dashboard/AllBuyer/AllBuyer";
import Profile from "../../Pages/Profile/Profile";
import CategoryList from "../../Pages/Home/Categories/CategoryList";
import CategoryDetails from "../../Pages/Home/Categories/CategoryDetails";
import Products from "../../Pages/Products/Products";
import ProductDetails from "../../Pages/Products/ProductDetails";
import Admin from "../../Pages/Dashboard/Admin/Admin";
import PrivateRoute from "./../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import SellerRoute from "./../SellerRoute/SellerRoute";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import ReportAdmin from "../../Pages/Dashboard/ReportAdmin/ReportAdmin";
import PageError from "../../Pages/Shared/PageError/PageError";
import MyWishList from "../../Pages/Dashboard/MyWishList/MyWishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/productdetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/productAll/${params.id}`
          ),
      },
      {
        path: "/categorylist/:id",
        element: <CategoryList></CategoryList>,
        loader: ({ params }) =>
          fetch(
            `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/categoryall?category=${params.id}`
          ),
      },
      {
        path: "/categorydetails/:category",
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/products?category=${params.category}`
          ),
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(
            `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/productcategory/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/order",
        element: (
          <BuyerRoute>
            <Order></Order>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/mywishlist",
        element: (
          <BuyerRoute>
            <MyWishList></MyWishList>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
<<<<<<< HEAD
          fetch(
            `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/bookings/${params.id}`
          ),
=======
          fetch(`http://localhost:5000/bookings/${params.id}`),
>>>>>>> b2cbf455e3c676f2454242a28da800495ed71b3d
      },
      {
        path: "/dashboard/addproducts",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/mybuyers",
        element: (
          <SellerRoute>
            <MyBuyers></MyBuyers>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allseller",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportadmin",
        element: (
          <AdminRoute>
            <ReportAdmin></ReportAdmin>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/allbuyer",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <Admin></Admin>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageError></PageError>,
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     errorElement: <DisplayError></DisplayError>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/signup",
//         element: <Signup></Signup>,
//       },
//     ],
//   },
// ]);

export default router;
