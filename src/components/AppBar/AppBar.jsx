import { Nav, Link } from './AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const { isLoaggedIn } = useSelector(state => state.auth);
  return (
    <header>
      <Nav>
        <div>
          <Link to="/">Home</Link>
          {isLoaggedIn && <Link to="/contacts">Contacts</Link>}
        </div>
        <div>
          {isLoaggedIn ? (
            <UserMenu />
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </Nav>
    </header>
  );
};
