import {
  Nav,
  Link,
  RegIcon,
  LogInIcon,
  HomeIcon,
  ContactIcon,
} from './AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const { isLoaggedIn } = useSelector(state => state.auth);
  return (
    <header>
      <section>
        <Nav>
          <div>
            <Link to="/">
              <HomeIcon />
              Home
            </Link>
            {isLoaggedIn && (
              <Link to="/contacts">
                <ContactIcon />
                Contacts
              </Link>
            )}
          </div>
          <div>
            {isLoaggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/register">
                  <RegIcon />
                  Register
                </Link>
                <Link to="/login">
                  <LogInIcon />
                  Log in
                </Link>
              </>
            )}
          </div>
        </Nav>
      </section>
    </header>
  );
};
