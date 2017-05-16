import React, {Component} from 'react';
import messages from '../messages.json';

export default class Message extends Component{
    constructor(props){
        super(props);
        const {messageId} = this.props.params
        this.state = {
            message : messages.find(function(message){
                return message.id === messageId
            })
        }
    }
    componentWillReceiveProps(nextProps){
        const {messageId : prevId } = this.props.params;
        const {messageId: nextId } = nextProps.params;

        if(prevId !== nextId){
           this.setState({
               message: messages.find(function(message){
                   return message.id === nextId
               })
           })
        }
    }
    render(){
        return  (
            <div className="Message">
                <p>{this.state.message.subject}</p>
                <p>{this.state.message.senderName}</p>
                <p>{this.state.message.senderEmail}</p>
                <p>{this.state.message.body}</p>
            </div>
        )
    }
}