import { Container } from '@mui/material';
import { Section } from 'components/Section/Section.styled';
import React from 'react';

const Home = () => {
  return (
    <main>
      <Section>
        <Container>
          <h1>Your Phonebook</h1>
        </Container>
      </Section>
    </main>
  );
};
export default Home;
