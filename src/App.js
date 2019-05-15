/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ActivityIndicator
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    state = {
        text: ""
    };
    onPressLearnMore = () => {
        alert(123);
    };

    render() {
        return (
            <View style={[style.container, style.other]}>
                <Text style={style.text}>123</Text>
                <Button
                    onPress={this.onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <ActivityIndicator size="large" color="red"/>
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
        borderStyle: "dashed",
        shadowColor: "red",
        shadowOffset: {width: 10, height: 0},
        shadowOpacity: 1,
        elevation: 120
    },
    other: {
        marginVertical: 20
    },
    text: {
        color: "#fff",
        fontWeight: "900",
    }
});
