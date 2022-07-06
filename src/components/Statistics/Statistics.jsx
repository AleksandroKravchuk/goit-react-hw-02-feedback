import React from "react"
import {StatisticsSection, StatisticsTitle,StatisticItem} from './Statistics.styled'
const Statistics = ({good,neutral,bad,total,positivePercentage}) => (
       <StatisticsSection>
                    <StatisticsTitle>Statistics</StatisticsTitle>
                    <StatisticItem>Good: {good}</StatisticItem>
                    <StatisticItem>Neutral: {neutral}</StatisticItem>
                    <StatisticItem>Bad: {bad}</StatisticItem>    
                    <StatisticItem>Total: {total}</StatisticItem>  
                    <StatisticItem>Positive feedback: {positivePercentage?positivePercentage:0} %</StatisticItem>  
                </StatisticsSection>
)
export default Statistics;