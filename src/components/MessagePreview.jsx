import React, {Component} from 'react';

export default class MessagePreview extends Component{
    render(){
        const { onChacked }  = this.props
        return  (
            <div className="MessagePreview" onClick={onChacked}>
                <div>{this.props.title}</div>
                <div>From {this.props.senderName}</div>
            </div>
        )
    }
}