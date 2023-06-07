import React, { useContext } from 'react';
import { Breadcrumb } from 'antd';
import { BreadcrumbsContext } from 'context/breadcrumb';

const BreadcrumbLayout: React.FunctionComponent = () => {
  const { breadcrumbs }: any = useContext(BreadcrumbsContext);

  return breadcrumbs?.length ? (
    <Breadcrumb separator=">" style={{ margin: '16px 0' }} items={breadcrumbs} />
  ) : (
    <div style={{ margin: '16px 0' }}></div>
  );
};

export default BreadcrumbLayout;
