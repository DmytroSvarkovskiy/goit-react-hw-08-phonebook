import { Nav, Link } from './AppBar.styled';

export const AppBar = () => {
  return (
    <header>
      <Nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </Nav>
    </header>
  );
};
