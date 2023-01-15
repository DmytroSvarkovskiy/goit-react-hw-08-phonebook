import { useSelector } from 'react-redux';
import { Avatar, Button } from 'antd';
import { Wrap } from './Usermenu.styled';
import { logOut } from 'Redux/Authorization/operations';
import { useDispatch } from 'react-redux';
export const UserMenu = () => {
  const { email } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  return (
    <Wrap>
      <Avatar>{email.slice(0, 1).toUpperCase()}</Avatar>
      <p>{email}</p>
      <Button type="primary" onClick={() => dispatch(logOut())}>
        Log out
      </Button>{' '}
    </Wrap>
  );
};
