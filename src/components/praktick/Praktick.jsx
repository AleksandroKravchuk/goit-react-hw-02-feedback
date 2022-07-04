import React from "react";
import {Container,Meaning, Button} from './Practicks,styled'
// const { Component } = require("react");


class Counter extends React.Component{
    static defaultProps = {
        initialValue:0,
    }
    // static propTypes = {};
        state = {value:this.props.initialValue,}
 
    hendleIncrement=() =>{
        this.setState(prevState=>({
           value: prevState.value+ 1,
        }))
    }
      hendleDicrement=() =>{
        this.setState(prevState=>({
           value: prevState.value- 1,
       }))
    }
    render () {
        return (
            <Container>
                <Meaning>{this.state.value}</Meaning>
                <div>
                    <Button type="button" onClick={this.hendleIncrement}>Збільшити на 1</Button>
                     <Button type="button"onClick={this.hendleDicrement}>Зменшити на 1</Button>
                </div>
            </Container>
        )
    }
}
export default Counter;
