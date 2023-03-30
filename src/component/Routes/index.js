import Login from '../login/Login';
import HOSE from '../Priceboard/HOSE';
import HNX from '../Priceboard/HNX';

const publicRoutes = [
    { path: '/', component:Login }
];

const privateRoutes = [
    {
        path: "/hose",
        component: HOSE,
        exact: true,
      },
      {
        path: "/hnx",
        component: HNX,
        exact: true,
      },
];

export { publicRoutes, privateRoutes };