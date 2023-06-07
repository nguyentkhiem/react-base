import { MainLayout } from 'shared/components/Layout';
import { HomeOutlined } from '@ant-design/icons';
import { PATH_HOME } from 'routes/paths';

const HomeRoute: RoutesConfig[] = [
  {
    path: PATH_HOME,
    name: 'home',
    hideInMenu: false,
    icon: <HomeOutlined />,
    layout: MainLayout,
    routes: [
      {
        path: PATH_HOME,
        name: 'home',
        icon: <HomeOutlined />,
        component: 'home',
      },
    ],
  },
];

export { HomeRoute };
