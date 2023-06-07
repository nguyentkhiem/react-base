import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Radio } from 'antd';
import { BreadcrumbsContext } from 'context/breadcrumb';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PATH_HOME, PATH_USERS } from 'routes/paths';
import { UsersService } from 'services/api';

export interface IUsersProps {}

const Users: React.FunctionComponent = (props: IUsersProps) => {
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);

  const getListUser = async () => {
    try {
      const res: any = await UsersService.getUsers({ config: { params: { status: 0, page: 0 } } });
    } catch (error) {
      // console.log(error);
    } finally {
      //
    }
  };

  const updateUser = async () => {
    try {
      const res: any = await UsersService.updateUser({ params: { id: 45 }, data: { username: 'name' } });
    } catch (error) {
      console.log(error);
    } finally {
      //
    }
  };

  useEffect(() => {
    getListUser();
    // updateUser();
    setBreadcrumbs([
      {
        title: (
          <Link to={PATH_HOME}>
            <HomeOutlined />
          </Link>
        ),
      },
      {
        title: (
          <Link to={PATH_USERS}>
            <UserOutlined />
            <span>User List</span>
          </Link>
        ),
      },
      {
        title: 'List',
      },
    ]);
  }, []);

  return (
    <>
      <h2>Users</h2>
      <ConfigProvider
        theme={{
          components: {
            Radio: {
              colorPrimary: '#00b96b',
            },
          },
        }}
      >
        <Radio>Radio</Radio>
      </ConfigProvider>
    </>
  );
};

export default Users;
