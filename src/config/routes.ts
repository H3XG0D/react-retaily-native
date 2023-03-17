import {IRouteProps} from "../../navigation/RouteProp";
import Login from "../../components/login/Login";
import Registration from "../../components/login/registration/Registration";
import Code from "../../components/login/registration/Code";
import Details from "../../components/login/registration/Details";

const routes: IRouteProps[] = [
  {
    name: 'Login',
    component: Login
  },
  {
    name: 'Registration',
    component: Registration
  },
  {
    name: 'Code',
    component: Code
  },
  {
    name: 'Details',
    component: Details,
  }
]

export default routes;
