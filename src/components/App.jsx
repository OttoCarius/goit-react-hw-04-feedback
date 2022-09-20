import React, { Component } from 'react';

// import { nanoid } from 'nanoid';
import Box from './Box/Box';

import FeedbackOptions from './Counter/FeedbackOptions/FeedbackOptions';
import Statistics from './Counter/Statistics/Statistics';
import Notification from './Counter/Notification/Notification';
import Section from './Counter/Section/Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = e => {
    const { value } = e.target.attributes.option;
    this.setState({ [value]: this.state[value] + 1 });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <Box>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onHandleClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Box>
    );
  }
}

export default Feedback;
