import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from 'shared/components/Common';
import { routesConfig } from './router';
import LoadingPageSpin from 'shared/components/LoadingPageSpin';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { withRole } from 'shared/libs';

// Lazy load component async
const LazyLoad = (component: string) => React.lazy(() => import(`pages/${component}`));

const parseConfig = () => {
  const routes = [];

  for (const config of routesConfig) {
    // @ts-ignore
    for (const route of config.routes) {
      routes.push({ ...route, layout: config.layout });
    }
  }

  return routes;
};

const ListRouter: React.FunctionComponent = () => (
  <Routes>
    {parseConfig().map((routes: RoutesObject, index: number) => {
      const Layout = routes.layout;
      const Component = LazyLoad(routes.component);
      const { t } = useTranslation();

      return (
        <Route
          key={index}
          path={routes.path}
          element={
            <Layout>
              <Helmet>
                <title>{`Michiisoft | ${t(`${routes?.name}`)}`}</title>
              </Helmet>
              <React.Suspense fallback={<LoadingPageSpin isAnimating />}>
                {withRole(Component, routes?.roles)}
              </React.Suspense>
            </Layout>
          }
        />
      );
    })}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default React.memo(ListRouter);
