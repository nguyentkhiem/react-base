import { AuthRoute, CounterRoute, HomeRoute, PostsRoute, UsageRoute, UsersRoute } from 'routes/configs';

const routesConfig: RoutesConfig[] = [
  ...AuthRoute,
  ...HomeRoute,
  ...PostsRoute,
  ...UsersRoute,
  ...UsageRoute,
  ...CounterRoute,
];

export { routesConfig };
