import {
  FormWrap,
  LogButton,
  UserIcon,
  PasswordIcon,
  InputForm,
  RegLink,
  Container,
  TitleReg,
} from './Login.styled';
import { loginization } from 'Redux/Authorization/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spiner } from 'pages/ContactList/ContactList.styled';

export const Login = () => {
  const [form] = FormWrap.useForm();
  const dispatch = useDispatch();
  const onFinish = values => {
    dispatch(loginization(values));
    form.resetFields();
  };
  const { isLoading } = useSelector(state => state.auth);
  return (
    <section>
      {isLoading && <Spiner />}
      <Container>
        <FormWrap
          form={form}
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {' '}
          <TitleReg>Log in</TitleReg>
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
      </Container>
    </section>
  );
};
