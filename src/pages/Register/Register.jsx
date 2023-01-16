import {
  Label,
  FormReg,
  SubmitButton,
  InputReg,
  InputPassword,
} from './Register.styled';
import { register } from 'Redux/Authorization/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Spiner } from 'pages/ContactList/ContactList.styled';

export const Register = () => {
  const [form] = FormReg.useForm();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.auth);
  const onFinish = values => {
    const { name, email, password, confirm } = values;

    if (password === confirm) {
      dispatch(register({ name, email, password }));
      !isLoading && form.resetFields();
    }
  };

  return (
    <div>
      {isLoading && <Spiner />}
      <FormReg
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Label
          name="name"
          label="Name"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
              whitespace: true,
            },
          ]}
        >
          <InputReg />
        </Label>
        <Label
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <InputReg />
        </Label>

        <Label
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <InputPassword
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 7 or more characters"
          />
        </Label>

        <Label
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <InputPassword />
        </Label>
        <Label>
          <SubmitButton type="primary" htmlType="submit">
            Register
          </SubmitButton>
        </Label>
      </FormReg>
    </div>
  );
};