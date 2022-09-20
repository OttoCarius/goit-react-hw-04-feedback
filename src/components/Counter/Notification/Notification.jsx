import React from 'react';
import PropTypes from 'prop-types';
import { StyledMessage } from './Notification.styled';

const Notification = ({ message }) => <StyledMessage>{message}</StyledMessage>;

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
