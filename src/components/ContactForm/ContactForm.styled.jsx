import styled from 'styled-components';
import { Button, Form, Input, Modal } from 'antd';
import { PhoneOutlined, UserAddOutlined } from '@ant-design/icons';

export const FormWrap = styled(Form)`
  max-width: 70%;
  margin: 0 auto;
`;
export const LogButton = styled(Button)`
  width: 100%;
  height: 35px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserIcon = styled(UserAddOutlined)`
  color: #c7c6c6;
`;
export const PhoneIcon = styled(PhoneOutlined)`
  color: #c7c6c6;
`;
export const InputForm = styled(Input)`
  height: 35px;
  font-size: 18px;
`;
export const AddModal = styled(Modal)`
  text-align: center;
`;
