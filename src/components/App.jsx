import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import {Section, Title} from '../components/FeedbackOptions/FeedbackOptions.styled'
import Statistics from "./Statistics/Statistics"

export class App extends React.Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  hendleoptions = (option) => {
        this.setState(prevState=>({
          [option]: prevState[option] + 1,
        }))
  }
  
  countTotalFeedback =() => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
        }
  countPositiveFeedbackPercentage = () => {
    const persent = Math.round((this.state.good * 100) / this.countTotalFeedback()); 
    return persent; 
        }


  render() {


    
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <Section title="Please leave feedback">
          <Title>Please leave feedback</Title>

          
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.hendleoptions}
          >
            </FeedbackOptions >
        <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}>
        </Statistics>

          </Section>
    </div>
  );
  }
  
};
