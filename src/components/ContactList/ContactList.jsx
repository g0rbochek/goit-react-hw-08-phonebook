import { Button } from '@mui/material';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operationsContacts';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {[
        visibleContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <Button variant="contained" onClick={() => onDeleteContact(id)}>
                Delete
              </Button>
            </li>
          );
        }),
      ]}
    </List>
  );
};
