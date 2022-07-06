import React from "react";
import {Button} from './FeedbackOptions.styled'



const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    // console.log(options)
        <div>
               {options.map((option) => (
     <Button type="button"  key={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>
    ))}
        </div>
         
)

export default FeedbackOptions;
