import React, { Component } from 'react';
import { Statistics } from '../components/Statistics/Statistics';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Section } from '../components/Section/Section';
import { Notification } from '../components/Notification/Notification';
import { Feedback } from './app.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = (this.state.good / totalFeedback) * 100;

    return isNaN(positiveFeedback) ? 0 : Math.round(positiveFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Feedback>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedbacks ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Feedback>
    );
  }
}

export default App;
