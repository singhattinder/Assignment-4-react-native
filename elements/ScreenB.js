


import React, {Component} from 'react';
import { StyleSheet, ScrollView, StatusBar, View} from 'react-native';
import {Button} from 'react-native';
import {Text} from 'react-native-elements';




export class ScreenB extends Component{
    static navigationOptions = { title: 'ScreenB' };

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <View>
                <Text h1>Screen B </Text>
            </View>

        );
    }
}