/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={[style.container, style.other]}>
                <Text>123</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        backgroundColor: "pink",
        borderRadius: 10,
        marginLeft: 20,
        borderWidth: 2,
        borderColor: "#532aa3",
        borderStyle: "dashed"
    },
    other: {
        marginVertical: 20
    }
});
