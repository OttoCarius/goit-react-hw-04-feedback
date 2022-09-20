import React from 'react';
import PropTypes from 'prop-types';

import { StyledStatList } from './Statistics.styled';
import { StyledStatItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StyledStatList>
    <StyledStatItem>Good:{good}</StyledStatItem>
    <StyledStatItem>Neutral:{neutral}</StyledStatItem>
    <StyledStatItem>Bad:{bad}</StyledStatItem>
    <StyledStatItem>Total:{total}</StyledStatItem>
    <StyledStatItem>Positive feedback:{positivePercentage}%</StyledStatItem>
  </StyledStatList>
);

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
