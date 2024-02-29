import React from 'react';
import { useSelector } from 'react-redux';
import { selectContactError } from 'redux/selectors';
import { ErrorText } from './MessageErr.styled';

const MessageErr = () => {
  const error = useSelector(selectContactError);
  return <ErrorText> {error.message} </ErrorText>;
};

export default MessageErr;
