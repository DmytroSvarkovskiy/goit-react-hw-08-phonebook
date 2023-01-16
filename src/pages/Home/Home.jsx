import { Title, HomeIcon, Wrap, UnderTitle, HomeLink } from './Home.styled';
import { useSelector } from 'react-redux';
export const Home = () => {
  const { isLoaggedIn } = useSelector(state => state.auth);

  return (
    <section>
      <Title>Wellcome to you PhoneBook</Title>
      <Wrap>
        <HomeIcon />
      </Wrap>
      {!isLoaggedIn ? (
        <UnderTitle>
          Please{' '}
          <HomeLink link to="/register">
            Register
          </HomeLink>{' '}
          or{' '}
          <HomeLink link to="/login">
            Log in
          </HomeLink>{' '}
          to be able to use your PhoneBook
        </UnderTitle>
      ) : (
        <UnderTitle>
          Go to the tab{' '}
          <HomeLink link to="/contacts">
            Contacts
          </HomeLink>{' '}
          and manage your contacts
        </UnderTitle>
      )}
    </section>
  );
};
