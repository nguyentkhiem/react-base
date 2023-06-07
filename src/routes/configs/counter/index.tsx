import { PicRightOutlined } from '@ant-design/icons';
import { MainLayout } from 'shared/components/Layout';
import { Roles } from 'shared/definitions/auth';

const CounterRoute: RoutesConfig[] = [
  {
    path: '/counter',
    name: 'counter',
    hideInMenu: false,
    icon: <PicRightOutlined />,
    layout: MainLayout,
    routes: [
      {
        path: '/counter',
        name: 'counter',
        icon: <PicRightOutlined />,
        component: 'counter',
        roles: [Roles.ADMIN, Roles.USER, Roles.GUEST],
      },
    ],
  },
];

export { CounterRoute };
