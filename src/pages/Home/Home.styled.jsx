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
`;
export const HomeLink = styled(Link)`
  text-decoration: none;
`;
