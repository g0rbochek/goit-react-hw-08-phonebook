import React from 'react';

import { Container } from '@mui/material';

import { Navigation } from 'components/Navigation/Navigation';

import { useAuth } from 'hook/useAuth';
import { AuthenticatedNavigation } from 'components/AuthenticatedNavigation/AuthenticatedNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HeaderNav, HeaderWrap } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderWrap>
      <Container>
        <HeaderNav>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthenticatedNavigation />}
        </HeaderNav>
      </Container>
    </HeaderWrap>
  );
};
