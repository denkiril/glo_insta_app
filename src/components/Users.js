import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="alt"
                name="name"/>
            <div className="users__block">
            <User
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="alt"
                name="name"
                min
                />
            <User
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="alt"
                name="name"
                min
                />
            <User
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="alt"
                name="name"
                min
                />
            </div>
        </div>

    )
}