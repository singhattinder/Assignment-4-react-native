import React, {Component} from 'react'
import {View} from 'react-native'
import {Text} from 'react-native-elements'

export class ScreenX extends Component {
    static navigationOptions = { title: 'ScreenX' };

    constructor(props) {
        super(props);

    }


    render() {

        const parameter =
            this.props.navigation.getParam
            ('parameter', 'some default value');
        return(
            <View style={{alignItems: 'center'}}>
                <Text h1>Screen {parameter}</Text>
            </View>
        )


    }
}
