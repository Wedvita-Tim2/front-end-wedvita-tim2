import AccountProfile from "../pages/AccountProfile";
import Dashboard from "../pages/Admin/Dashboard";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import FindTemplatePage from "../pages/FindTemplatePage";
import LandingPage from "../pages/LandingPage";
import MainOrderForm from "../pages/OrderForm/MainOrderForm";
import VerifivayionEmailPage from "../pages/VerificationEmailPage";
import TemplateWedvita4 from "../template/TemplateWedvita4";

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
  },{
    path:'/adminpanel',
    element: <Dashboard/>
  },
  {
    path:'/order',
    element: <MainOrderForm/>
  },
  {
    path: '/template4',
    element: <TemplateWedvita4/>
  },
  {
    path: '/verification',
    element: <VerifivayionEmailPage/>
  }
]

export default routes