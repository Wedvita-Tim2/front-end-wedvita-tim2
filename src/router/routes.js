import AccountProfile from "../pages/AccountProfile";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import LandingPage from "../pages/LandingPage";
const routes = [{
    path: '/',
    element: <LandingPage/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/myaccount',
    element: <AccountProfile/>
  }
]

export default routes