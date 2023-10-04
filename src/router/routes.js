import AccountProfile from "../pages/AccountProfile";
import Dashboard from "../pages/Admin/Dashboard";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import FindTemplatePage from "../pages/FindTemplatePage";
import LandingPage from "../pages/LandingPage";
import TemplateWedvita1 from "../template/TemplateWedvita1";
import MainOrderForm from "../pages/OrderForm/MainOrderForm";
import OrderPreviewTemplatePage from "../pages/OrderPreviewTemplatePage";

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
    path: '/template/template-wedvita1',
    element: <TemplateWedvita1/>
  },
  {
    path:'/order',
    element: <MainOrderForm/>
  },
  {
    path:'/template/preview/template-wedvita1',
    element: <OrderPreviewTemplatePage/>
  }
]

export default routes