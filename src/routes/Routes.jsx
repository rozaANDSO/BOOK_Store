import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../page/Home/";
import Login from "../componenet/Login";
import Register from "../componenet/Register";
import Cart from "../page/books/Cart"
import Cheackout from "../page/books/Cheackout"
import SingleBook from "../page/books/SingleBook";
import PrivateRoute from "./PriviteRoutes";
import Order from "../page/books/Order";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../componenet/AdminLogin";
import DashBoard from "../page/dashboard/DashBoard"
import DashboardLayout from "../page/dashboard/DashBoardLayout";
import UserDashboard from "../page/dashboard/users/UserDashBoard";
import AddBook from "../page/dashboard/addBook/AddBook";
import ManageBooks from "../page/dashboard/manageBooks/ManageBooks";
import UpdateBook from "../page/dashboard/EditBook/UpdateBook";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/orders",
            element: <PrivateRoute><Order/></PrivateRoute>
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/checkout",
          element: <PrivateRoute>
            <Cheackout/>
          </PrivateRoute>
        },
        {
          path: "/books/:id",
          element: <SingleBook/>
        },
        {
          path: "/user-dashboard",
          element: <PrivateRoute><UserDashboard/></PrivateRoute>
        }
        
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",
      element: <AdminRoute>
        <DashboardLayout/>
      </AdminRoute>,
      children:[
        {
          path: "",
          element: <AdminRoute>
            <DashBoard/>
          </AdminRoute>
        },
        {
          path: "add-new-book",
          element: <AdminRoute>
            <AddBook/>
          </AdminRoute>
        },
        {
          path: "edit-book/:id",
          element: <AdminRoute>
            <UpdateBook/>
          </AdminRoute>
        },
        {
          path: "manage-books",
          element: <AdminRoute>
            <ManageBooks/>
          </AdminRoute>
        }
      ]
    }
  ]);

  export default router;