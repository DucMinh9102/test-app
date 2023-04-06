import Login from '../login/Login';
import HOSE from '../Priceboard/HOSE';
import Table from '../MainLayout/Table';
import HNX from '../Priceboard/HNX';
import VN30 from '../Priceboard/VN30';

const publicRoutes = [
    { path: '/', component:Login }
];

const privateRoutes = [
    {
        path: "/hose",
        component: Table,
        exact: true,
      },
      {
        path: "/hnx",
        component: HNX,
        exact: true,
      },
      {
        path: "/vn30",
        component: VN30,
        exact: true,
      },
];

export { publicRoutes, privateRoutes };