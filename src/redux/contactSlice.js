import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/operationsContacts';
import {
  handleFulfilled,
  handlePanding,
  handleRejected,
} from './helper/generalExtraReducers';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },

  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.items.findIndex(
          item => item.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePanding
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          addContact.fulfilled,
          deleteContact.fulfilled,
          fetchContacts.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const contactReducer = contactSlice.reducer;
