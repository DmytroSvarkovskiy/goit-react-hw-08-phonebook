import {
  FormWrap,
  LogButton,
  UserIcon,
  PasswordIcon,
  InputForm,
  RegLink,
} from './Login.styled';

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
      <FormWrap.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
            type: 'email',
          },
        ]}
      >
        <InputForm prefix={<UserIcon />} placeholder="Email" />
      </FormWrap.Item>
      <FormWrap.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <InputForm
          prefix={<PasswordIcon />}
          type="password"
          placeholder="Password"
        />
      </FormWrap.Item>

      <FormWrap.Item>
        <LogButton type="primary" htmlType="submit">
          Log in
        </LogButton>
        <RegLink>
          Or <Link to="/register">register now</Link>
        </RegLink>
      </FormWrap.Item>
    </FormWrap>
  );
};
