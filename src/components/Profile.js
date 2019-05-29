import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Man"
                name="name"/>
            <Palette/>
        </div>
    )
}

export default Profile;