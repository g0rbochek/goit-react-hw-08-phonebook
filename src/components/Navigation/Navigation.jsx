import { useAuth } from 'hook';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const styleNav = ({ isActive }) => ({
    color: isActive ? 'white' : 'black',
  });

  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavLink style={styleNav} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink style={styleNav} to="/phonebook">
          Phonebook
        </NavLink>
      )}
    </>
  );
};
