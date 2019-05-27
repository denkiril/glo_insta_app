import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="alt"
                    name="name"
                    min
                    />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some some
                </div>
                <div className="post__descr">
                    lorem lorem lorem lorem lorem lorem 
                </div>
            </div>
        )
    }
}