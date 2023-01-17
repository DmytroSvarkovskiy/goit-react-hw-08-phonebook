import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
export const Label = styled(Form.Item)`
  label {
    width: 150px;
    padding-top: 8px;
  }
`;
export const FormReg = styled(Form)`
  margin: 20vh auto 0;
  width: 500px;
`;
export const SubmitButton = styled(Button)`
  width: 100px;
  height: 40px;
  margin-left: 30%;
  display: block;
  font-size: 18px;
`;
export const InputReg = styled(Input)`
  height: 40px;
  font-size: 18px;
`;
export const InputPassword = styled(Input.Password)`
  height: 40px;
  font-size: 18px;
`;
export const RegMail = styled(MailOutlined)`
  color: #c7c6c6;
`;
export const RegUser = styled(UserOutlined)`
  color: #c7c6c6;
`;
export const RegPassWord = styled(LockOutlined)`
  color: #c7c6c6;
`;