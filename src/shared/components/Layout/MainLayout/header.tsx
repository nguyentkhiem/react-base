import React from 'react';
import { Button, Layout, Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import i18next from 'i18next';

const { Header } = Layout;
interface HeaderLayoutProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const HeaderLayout: React.FunctionComponent<HeaderLayoutProps> = (props: HeaderLayoutProps) => {
  const { collapsed, toggleCollapsed } = props;
  const I18N_DEFAULT_LNG = 'ja';

  const onChange = (checked: boolean) => {
    const locale = checked ? 'ja' : 'en';

    i18next.changeLanguage(locale).then((t) => {
      // set locale to localstorage
    });
  };

  return (
    <Header className="header">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {!collapsed ? (
          <div style={{ width: 260, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img width={80} height={40} src="/logo2.jpg" />
          </div>
        ) : (
          <div style={{ width: 80 }}></div>
        )}

        <Button type="default" onClick={toggleCollapsed} style={{ width: 40 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>

        <Switch
          style={{ height: 24, border: '1px solid #ffffff', position: 'absolute', right: 25 }}
          onChange={onChange}
          checkedChildren="ja"
          unCheckedChildren="en"
          defaultChecked={I18N_DEFAULT_LNG === 'ja'}
        />
      </div>
    </Header>
  );
};

export default HeaderLayout;
