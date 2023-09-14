import Login from "../pages/Auth/Login";
import LandingPage from "../pages/LandingPage";
const routes = [{
    path: '/',
    element: <LandingPage/>,
  },
  {
    path: '/login',
    element: <Login/>,
  }
]

export default routes