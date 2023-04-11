import Login from '../login/Login';
import Table from '../MainLayout/Table';

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
        component: Table,
        exact: true,
      },
      {
        path: "/vn30",
        component: Table,
        exact: true,
      },
];

export { publicRoutes, privateRoutes };