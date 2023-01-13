import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
// import { useEffect } from 'react';
// import { fetchContacts } from 'Redux/operations';
// import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Contactlist } from 'pages/ContactList/ContactList';

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
          <Route path="/contacts" element={<Contactlist />}>
            <Route path="addcontact" element={<ContactForm />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
