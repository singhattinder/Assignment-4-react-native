import React,{Component} from 'react';
import {FormLabel, FormInput, FormValidationMessage, Text, Button, CheckBox} from 'react-native-elements';
import {Alert, View} from 'react-native';



export class FillInTheBlanksQuestionEditor extends Component{

    constructor(props) {
        super(props);

        this.state = (


            {description:'this is a fill in the blanks question',
                points:0,
                title:'Question'

            })

    }

    updateForm = (newState) => {
        this.setState(newState)
    };


    render() {
        const {goBack} = this.props.navigation;
        return (

            <View>
                <Text h2>fill in the blanks</Text>
                <Text h2>{this.state.title}</Text>
                <Text h5 >{this.state.description}</Text>



                <Button	backgroundColor="blue"
                           color="white"
                           title="Save"/>
                <Button	backgroundColor="red"
                           color="white"
                           title="Cancel"
                           onPress={() => goBack()}/>
            </View>

        );
    }


}