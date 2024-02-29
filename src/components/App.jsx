import React, { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hook';
import { PrivateRoute } from './PrivatRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import('../Pages/Home'));
const Register = lazy(() => import('../Pages/Register/Register'));
const LogIn = lazy(() => import('../Pages/LogIn/LogIn'));
const Phonebook = lazy(() => import('../Pages/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="registration"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
          }
        />
        <Route
          path="logIn"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<LogIn />} />
          }
        />
        <Route
          path="phonebook"
          element={
            <PrivateRoute redirectTo="/logIn" component={<Phonebook />} />
          }
        />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
