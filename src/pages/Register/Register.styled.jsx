import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
export const Label = styled(Form.Item)`
  label {
    width: 150px;
  }
`;
export const FormReg = styled(Form)`
  margin: 20vh auto 0;
  width: 90vh;
`;
export const SubmitButton = styled(Button)`
  width: 60%;
`;
export const InputReg = styled(Input)`
  height: 40px;
`;
export const InputPassword = styled(Input.Password)`
  height: 40px;
`;
