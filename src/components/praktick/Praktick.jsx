import React from "react";
import {Container,Title, Button,StatisticsSection, StatisticsTitle,StatisticItem} from './Practicks,styled'
// const { Component } = require("react");


class Counter extends React.Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}
    static defaultProps = {
        TotalValue: 0,
        PositiveFeedBack:0,
    }
    // // static propTypes = {};
    //     state = {value:this.props.initialValue,}
 
    hendleGood=() =>{
        this.setState(prevState=>({
           good: prevState.good+ 1,
        }))
    }
     hendleNeutral=() =>{
        this.setState(prevState=>({
           neutral: prevState.neutral+ 1,
        }))
    }
     hendleBad=() =>{
        this.setState(prevState=>({
           bad: prevState.bad+ 1,
        }))
    }
 
    render() {
        const Total = this.state.good + this.state.neutral + this.state.bad;
        const Persent = Math.round (((this.state.good + this.state.neutral) *100)/Total);
        
        return (
            <Container>
                <Title>Please leave feedback</Title>
                <div>
                    <Button type="button" onClick={ this.hendleGood}>Good</Button>
                    <Button type="button" onClick={ this.hendleNeutral}>Neutral</Button>
                    <Button type="button" onClick={ this.hendleBad}>Bad</Button>
                </div>
                <StatisticsSection>
                    <StatisticsTitle>Statistics</StatisticsTitle>
                    <StatisticItem>Good: {this.state.good}</StatisticItem>
                    <StatisticItem>Neutral: {this.state.neutral}</StatisticItem>
                    <StatisticItem>Bad: {this.state.bad}</StatisticItem>    
                    <StatisticItem>Total: {Total}</StatisticItem>  
                    <StatisticItem>Positive feedback: {Persent?Persent:0}%</StatisticItem>  
                </StatisticsSection>
                
           
               
            </Container>
        )
    }
}
export default Counter;
