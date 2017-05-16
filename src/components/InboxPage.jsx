import React, {Component} from 'react';
import MessagePreview from './MessagePreview.jsx';
import messages from '../messages.json';



export default class InboxPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            messages
        }
        this.handlePreviewClick = this.handlePreviewClick.bind(this);
    }

    handlePreviewClick(messageId){
        this.context.router.push(`/inbox/messages/${messageId}`);
    }

    render(){
        var handlePreviewClick = this.handlePreviewClick;
        return  (
            <div className="InboxPage">
                <div className="messages">
                    {
                        this.state.messages.map(function(message){
                            return <MessagePreview
                                    key={message.id}
                                    title={message.subject}
                                    senderName={message.senderName}
                                    onChacked={handlePreviewClick.bind(null, message.id)}
                                    >
                                    </MessagePreview>
                        })
                    }
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

InboxPage.contextTypes = {
    router: React.PropTypes.object.isRequired
}

