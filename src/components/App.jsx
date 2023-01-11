// import { ContactForm } from './ContactForm/ContactForm';
// import { Contactlist } from '../pages/ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
// import { useEffect } from 'react';
// import { fetchContacts } from 'Redux/operations';
// import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  // const { isLoading, error, items } = useSelector(state => state.contacts);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <ContactForm /> */}
          {/* <Filter /> */}
          {/* <Contactlist /> */}
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
