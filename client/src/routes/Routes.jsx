import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            }
        ]

    },
    {path: "/sign-up", element: <SignUp />},
    {path: "/sign-in", element: <SignIn />},
])