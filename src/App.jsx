import React, {Component} from 'react';
import { Link } from 'react-router';

export default class App extends Component{
    render(){
        return  (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">AboutPage</Link>
                        </li>
                        <li>
                            <Link to="/inbox">InboxPage</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}