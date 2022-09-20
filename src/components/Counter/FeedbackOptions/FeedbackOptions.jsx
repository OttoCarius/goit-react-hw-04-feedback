import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './FeedbackOptions.styled';
import { StyledItem } from './FeedbackOptions.styled';
import { StyledButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledList>
      {options.map(option => {
        return (
          <StyledItem key={option}>
            <StyledButton onClick={onLeaveFeedback} option={option}>
              {option}
            </StyledButton>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
