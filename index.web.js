import FriendsList from './friendslist';
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';


const friends = [
    {
        id: 1,
        firstName: 'Shubham',
        lastName: 'Saurabh',
        avatarUrl: 'https://www.internetvibes.net/wp-content/gallery/avatars/003.png',
    },
    {
        id: 2,
        firstName: 'Manish',
        lastName: 'Kumar',
        avatarUrl: 'https://www.internetvibes.net/wp-content/gallery/avatars/002.png',
    },
    {
        id: 3,
        firstName: 'Sumit',
        lastName: 'Kumar',
        avatarUrl: 'https://www.internetvibes.net/wp-content/gallery/avatars/003.png',
    },
];

class ReactNativeWeb extends Component {
    render() {
        return <FriendsList friends={friends} />;
    }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });
