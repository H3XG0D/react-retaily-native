import {IRouteProps} from "../../navigation/RouteProp";
import Login from "../../components/login/Login";
import Registration from "../../components/login/registration/Registration";
import Code from "../../components/login/registration/Code";

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
  }
]

export default routes;