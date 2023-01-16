import styled from 'styled-components';
import { ContactsTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
`;
export const HomeIcon = styled(ContactsTwoTone)`
  svg {
    width: 400px;
    display: block;
    width: 400px;
    height: 300px;
    margin: 0 auto;
  }
`;
export const Wrap = styled.div`
  margin: 0 auto;
  width: 400px;
  height: 300px;
  display: block;
`;
export const UnderTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-top: 30px;
  height: 40px;
`;
export const HomeLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #1677ff;
  border-radius: 8px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 5px 8px;
  background-color: #1677ff;
  font-weight: 400;
  font-size: 20px;
  :hover {
    opacity: 0.8;
  }
`;
