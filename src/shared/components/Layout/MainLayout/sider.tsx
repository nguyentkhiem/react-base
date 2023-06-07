// @ts-nocheck
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/definitions/hooks';
import { DEFAULT_PAGE_LOGIN } from 'shared/definitions/config';

type MenuItem = Required<MenuProps>['items'][number];

interface SiderLayoutProps {
  items: MenuItem[];
  collapsed: boolean;
}

const SiderLayout: React.FunctionComponent<SiderLayoutProps> = (props: SiderLayoutProps) => {
  const { items, collapsed } = props;
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  const handleOnClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { key } = e;

    if (key) {
      const mSelected = items?.find((item) => item?.children?.find((m) => m?.key === key));
      const smSelected = mSelected?.children?.find((m) => m?.key === key)?.path;

      if (smSelected) {
        if (isLogin) {
          navigate(smSelected);
        } else {
          navigate(DEFAULT_PAGE_LOGIN);
        }
      }
    }
  };

  const onOpenChange = (openKeys: string[]) => {
    setOpenKeys(openKeys);
  };

  useEffect(() => {
    const menuSelected = items?.find((item) => item?.children?.find((m) => m?.path === location?.pathname));
    const subMenuSelected = menuSelected?.children?.find((m) => m?.path === location?.pathname)?.key;

    setOpenKeys([...new Set([...openKeys, `${menuSelected?.key}`])]);
    setSelectedKeys([`${subMenuSelected}`]);
  }, [location?.pathname]);

  return (
    <Sider collapsed={collapsed} width={250}>
      <Menu
        onSelect={handleOnClick}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        mode="inline"
        theme="dark"
        items={items}
      />
    </Sider>
  );
};

export default SiderLayout;
