import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Contactlist } from 'pages/ContactList/ContactList';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'Redux/Authorization/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const { isRefreshing } = useSelector(state => state.auth);
  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<Contactlist />} redirectTo="/login" />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
        <GlobalStyle />
      </>
    )
  );
};
