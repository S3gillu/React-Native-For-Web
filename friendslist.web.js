import Friend from './friend';
import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';

export default class FriendsList extends Component {
    render() {
        return (
            <View>
                {this.props.friends.map(friend =>
                    <Friend
                        key={friend.id}
                        avatarUrl={friend.avatarUrl}
                        firstName={friend.firstName}
                        lastName={friend.lastName} />
                )}
            </View>
        );
    }
}
