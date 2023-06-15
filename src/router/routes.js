import App from "../App";
import About from "../components/about/About";
import ErrorPage from "../components/error/ErrorPage";
import Home from '../components/home/Home';
import Login from "../components/login/Login";
import Registration from "../components/registration/Registration";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "about",
                element: <About />
            },
        ]

    },

    {
        path: "/login",
        element: <Login />

    },

    {
        path: "/registration",
        element: <Registration />

    },

]

export default routes;

