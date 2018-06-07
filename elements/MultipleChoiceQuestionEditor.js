import React,{Component} from 'react';
import {FormLabel, FormInput, FormValidationMessage, Text, Button, CheckBox} from 'react-native-elements';
import {Alert, View, TextInput} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'





export class MultipleChoiceQuestionEditor extends Component{


    constructor(props) {
        super(props);

        this.state = (


            {question:[{id:'402', title: 'Question 1', points:'20', description: 'Choice the correct one', choice:''}],
                choice:'',
                choices:['this is first option','this is second option','this is third option','this is fourth option',],
            description:'this is a multiple choice question',
            points:0,
                title:'Question'

        })
    }


    render() {
        return (

            <View>
                <View>


                <TextInput
                    multiline = {true}
                    numberOfLines = {4}
                    value='Message'
                />
                </View>

                <Text h4>Preview</Text>
                <Text h3>{this.state.title}</Text>
                <Text h5 >{this.state.description}</Text>

            </View>

        );
    }


}