import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  width: 100%;
  justify-content: space-between;
  width: 1000px;
  height: 50px;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #3a97e8;
`;
export const Link = styled(NavLink)`
  :nth-child(2n + 1) {
    margin-right: 20px;
  }
  &.active {
    color: #3a97e8;
  }
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 0;
`;
