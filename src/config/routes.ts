import {IRouteProps} from "../../navigation/RouteProp";
import Login from "../../components/login/Login";
import Registration from "../../components/login/registration/Registration";

const routes: IRouteProps[] = [
  {
    name: 'Login',
    component: Login
  },
  {
    name: 'Registration',
    component: Registration
  }
]

export default routes;