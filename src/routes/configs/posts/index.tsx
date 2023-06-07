import { PicRightOutlined } from '@ant-design/icons';
import { MainLayout } from 'shared/components/Layout';
import { PATH_POSTS, PATH_POSTS_CREATE } from 'routes/paths';
import { Roles } from 'shared/definitions/auth';

const PostsRoute: RoutesConfig[] = [
  {
    path: PATH_POSTS,
    name: 'posts',
    hideInMenu: false,
    icon: <PicRightOutlined />,
    layout: MainLayout,
    routes: [
      {
        path: PATH_POSTS,
        name: 'posts.list',
        icon: <PicRightOutlined />,
        component: 'posts',
        roles: [Roles.ADMIN, Roles.USER, Roles.GUEST],
      },
      {
        path: PATH_POSTS_CREATE,
        name: 'posts.create',
        icon: <PicRightOutlined />,
        component: 'posts/create',
        roles: [Roles.ADMIN, Roles.USER, Roles.GUEST],
      },
    ],
  },
];

export { PostsRoute };
