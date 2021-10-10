import { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        [e.target.id]: prevState[e.target.id] + 1,
      };
    });
  };

  allFeedbacks = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positiveFeedbacks = () => {
    const result = this.allFeedbacks();
		const percentage = (this.state.good * 100) / result;
		return Math.round(percentage);
  };
   
  render() {
    const { good, neutral, bad } = this.state;

  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onIncrement={this.handleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
        {this.allFeedbacks() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.allFeedbacks()}
              positiveFeedbacks={this.positiveFeedbacks()}
            ></Statistics>
        ) : (
               <Notification message="No feedback given" />
          )}
        </Section>
        </>
    )
  }

}
