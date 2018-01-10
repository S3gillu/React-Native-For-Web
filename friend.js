import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    friend: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    avatar: {
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    name: {
        fontSize: 18,
        color: '#000',
    }
});

export default class Friend extends Component {
    render() {
        return (
            <View style={styles.friend}>
                <Image style={styles.avatar} source={{ uri: this.props.avatarUrl }} />
                <Text style={styles.name}>{this.props.firstName} {this.props.lastName}</Text>
            </View>
        );
    }
}
