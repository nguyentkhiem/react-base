import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { Button, Checkbox, Input, Form, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from 'shared/constants/variables';
import { useAuth } from 'shared/definitions/hooks';
import { DEFAULT_PAGE_HOME } from 'shared/definitions/config';
import styles from './login.module.scss';
import { PATH_HOME } from 'routes/paths';

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  const onFinish = (values: any) => {
    Cookie.set(ACCESS_TOKEN, values.username);

    setTimeout(() => {
      navigate(DEFAULT_PAGE_HOME);
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (isLogin) {
      navigate(PATH_HOME);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Row gutter={24}>
          <Col span={24}>
            <Col span={24}>
              <h2 style={{ textAlign: 'center' }}>Login</h2>
            </Col>
            <Form
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 18 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'center' }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
