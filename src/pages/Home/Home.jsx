import { Title, HomeIcon, Wrap, UnderTitle, HomeLink } from './Home.styled';
export const Home = () => {
  return (
    <section>
      <Title>Wellcome to you PhoneBook</Title>
      <Wrap>
        <HomeIcon />
      </Wrap>
      <UnderTitle>
        {' '}
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
    </section>
  );
};
