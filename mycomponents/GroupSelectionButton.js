import React, {Component} from 'react'
import MyButton from './myButton'

//this component utilises MyButton, and costumizes it for CarSelectView purpose
export default class GroupSelectionButton extends Component{
    onPress = () =>{
        this.props.onPress({
            'id':this.props.id,
            'groupName':this.props.groupName
        });
    }
    render(){
        return(
            <MyButton width={this.props.width} color={this.props.color} onPress={this.onPress} text = {this.props.text}/>
        );
    }
}