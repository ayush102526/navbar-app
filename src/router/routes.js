import App from "../App";
import ErrorPage from "../components/error/ErrorPage";
import Login from "../components/login/Login";
import Registration from "../components/registration/Registration";
export default [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,

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

