import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input } from 'antd';
import { FormWrap, LogButton } from './Login.styled';

import { Link } from 'react-router-dom';
export const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <FormWrap
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <LogButton type="primary" htmlType="submit">
          Log in
        </LogButton>
        Or <Link to="/register">register now</Link>
      </Form.Item>
    </FormWrap>
  );
};
