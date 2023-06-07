import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { BreadcrumbsContext } from 'context/breadcrumb';
import { PATH_HOME } from 'routes/paths';

const HomePage: React.FunctionComponent = () => {
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);

  useEffect(() => {
    setBreadcrumbs([
      {
        title: (
          <Link to={PATH_HOME}>
            <HomeOutlined />
          </Link>
        ),
      },
    ]);
  }, []);

  return <>Home</>;
};

export default HomePage;
