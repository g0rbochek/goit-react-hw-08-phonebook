import { NavLink } from 'react-router-dom';
import { AuthNavWrap } from './AuthenticatedNavigation.styled';

export const AuthenticatedNavigation = () => {
  const styleNav = ({ isActive }) => ({
    color: isActive ? 'white' : 'black',
  });

  return (
    <AuthNavWrap>
      <NavLink style={styleNav} to="/registration">
        Register
      </NavLink>
      <NavLink style={styleNav} to="/login">
        Log In
      </NavLink>
    </AuthNavWrap>
  );
};
