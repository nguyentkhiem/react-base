import { PicRightOutlined } from '@ant-design/icons';
import { BlankLayout } from 'shared/components/Layout';
import { PATH_USAGE } from 'routes/paths';

const UsageRoute: RoutesConfig[] = [
  {
    path: PATH_USAGE,
    name: 'usage',
    hideInMenu: true,
    icon: <PicRightOutlined />,
    layout: BlankLayout,
    routes: [
      {
        path: PATH_USAGE,
        name: 'usage',
        icon: <PicRightOutlined />,
        component: 'usage',
      },
    ],
  },
];

export { UsageRoute };
