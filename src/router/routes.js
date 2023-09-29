import AccountProfile from "../pages/AccountProfile";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import FindTemplatePage from "../pages/FindTemplatePage";
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
  },
  {
    path: '/template',
    element: <FindTemplatePage/>
  }
]

export default routes