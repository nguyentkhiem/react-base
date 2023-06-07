import React from 'react';
import { Layout } from 'antd';

const Authlayout: React.FunctionComponent = ({ children }: any) => {
  return (
    <Layout
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(243 243 243)',
      }}
    >
      {children}
    </Layout>
  );
};

export default Authlayout;
