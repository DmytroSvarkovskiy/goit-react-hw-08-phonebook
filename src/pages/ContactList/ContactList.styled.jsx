import styled from 'styled-components';
export const ButtonDel = styled.button`
  width: 80px;
  height: 25px;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background-color: #1677ff;
    color: #ffffff;
  }
  transition: background-color cubic-bezier(0.17, 0.67, 0.86, 0.57) 300ms,
    color cubic-bezier(0.17, 0.67, 0.86, 0.57) 300ms;
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
