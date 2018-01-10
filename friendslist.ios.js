import Friend from './friends';
import React, { Component } from 'react';
import {
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    list: {
        marginTop: 20,
    },
});

export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            ds: ds.cloneWithRows(props.friends),
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.ds}
                style={styles.list}
                renderRow={(friend) =>
                    <Friend
                        key={friend.id}
                        avatarUrl={friend.avatarUrl}
                        firstName={friend.firstName}
                        lastName={friend.lastName} />
                } />
        );
    }
}
