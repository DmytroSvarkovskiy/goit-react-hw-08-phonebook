import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
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
