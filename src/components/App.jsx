import React, { Component } from 'react';
import { Statistics } from '../components/Statistics/Statistics';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Section } from '../components/Section/Section';
import { Notification } from '../components/Notification/Notification';

class App extends Component {
  static propTypes = {};

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

  countPositiveFeedbackPercentage = (totalFeedback, goodFeedback) => {
    const positiveFeedback = (goodFeedback / totalFeedback) * 100;

    return isNaN(positiveFeedback) ? 0 : Math.round(positiveFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      totalFeedbacks,
      good
    );

    return (
      <div>
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
      </div>
    );
  }
}

export default App;
