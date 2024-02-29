import { Container } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import MessageErr from 'components/MessageErr/MessageErr';

import { Section } from 'components/Section/Section.styled';
import { TitleContacts } from 'components/TitleContacts/TitleContacts';
import { TitlePhonebook } from 'components/TitlePhonebook/TitlePhonebook';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operationsContacts';
import { selectContactError, selectContactIsLoading } from 'redux/selectors';

const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactIsLoading);
  const error = useSelector(selectContactError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <main>
        <Container>
          <Section>
            <TitlePhonebook title="Phonebook" />
            <ContactForm />
          </Section>
          <Section>
            <TitleContacts title="Contacts" />
            <Filter />
            <ContactList />
            {isLoading && <Loader />}
            {error && <MessageErr />}
          </Section>
        </Container>
      </main>
    </>
  );
};

export default Phonebook;
