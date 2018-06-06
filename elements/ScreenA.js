

import React, {Component} from 'react';
import {StyleSheet, ScrollView, StatusBar, View, Alert} from 'react-native';
import {Button} from 'react-native';
import {Text} from 'react-native-elements';



export class ScreenA extends Component{
    static navigationOptions = { title: 'ScreenA' };

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <Text h1>Screen A </Text>
                <Button title="Go Home"
                        onPress={() => this.props
                            .navigation
                            .navigate('Home')} />

            </View>

        );
    }
}