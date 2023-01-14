import {
  Label,
  FormReg,
  SubmitButton,
  InputReg,
  InputPassword,
} from './Register.styled';

export const Register = () => {
  const [form] = FormReg.useForm();
  const onFinish = values => {
    console.log('Received values of form: ', values);
    form.resetFields();
  };

  return (
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
        <InputPassword />
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
  );
};
