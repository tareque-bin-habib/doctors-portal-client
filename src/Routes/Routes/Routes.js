import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import ManageDoctors from "../../Pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/DashBoard/MyAppointment/MyAppointment";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/about',
                element: <About></About>
            },



        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoutes><Payment></Payment></AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])

export default router