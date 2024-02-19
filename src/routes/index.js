import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './Mainroutes';
// import AuthenticationRoutes from './AuthenticationRoutes';

// import { ErrorRoutes } from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([ MainRoutes]);
}