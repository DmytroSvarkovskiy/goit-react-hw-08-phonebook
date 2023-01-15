import styled from 'styled-components';
import { Button, Modal, Input } from 'antd';
import { UserSwitchOutlined, PhoneOutlined } from '@ant-design/icons';

export const ButtonReg = styled(Button)`
  margin-right: 8px;
  margin-left: auto;
`;
export const Item = styled.li`
  background-color: #f5f6f7;
  padding-left: 10px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;
export const List = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;
export const UserIcon = styled(UserSwitchOutlined)`
  color: #c7c6c6;
`;
export const PhoneIcon = styled(PhoneOutlined)`
  color: #c7c6c6;
`;
export const InputForm = styled(Input)`
  height: 40px;
  font-size: 18px;
  width: 100%;
  :nth-child(1) {
    margin-bottom: 12px;
  }
`;
export const ModalRedact = styled(Modal)`
  .ant-modal-content {
    width: 330px;
  }
`;
