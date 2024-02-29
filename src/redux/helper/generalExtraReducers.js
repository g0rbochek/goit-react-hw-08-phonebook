export const handlePanding = state => {
  state.contacts.isLoading = true;
};

export const handleFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

export const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};
