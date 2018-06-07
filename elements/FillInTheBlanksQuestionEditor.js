import React,{Component} from 'react';
import {FormLabel, FormInput, FormValidationMessage, Text, Button, CheckBox} from 'react-native-elements';
import {Alert, View} from 'react-native';



export class FillInTheBlanksQuestionEditor extends Component{

    constructor(props) {
        super(props);

        this.state = (


            {question:[{id:'402', title: 'Question 1', points:'20', description: 'Choice the correct one', choice:''}],
                description:'this is a multiple choice question',
                points:0,
                title:'Question'

            })

    }

    updateForm = (newState) => {
        this.setState(newState)
    };


    render() {
        return (

            <View>
                <Text h3>Editor</Text>
                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({title: text}) }/>
                <FormValidationMessage>
                    Title is required
                </FormValidationMessage>

                <FormLabel>Description</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({description: text}) }/>
                <FormValidationMessage>
                    Description is required
                </FormValidationMessage>




                <CheckBox title='The answer is true'
                          onPress={() => this.updateForm
                          ({isTrue: !this.state.isTrue})}
                          checked={this.state.isTrue}/>

                <Button	backgroundColor="green"
                           color="white"
                           title="Save"/>
                <Button	backgroundColor="red"
                           color="white"
                           title="Cancel"/>


                <Text h3>Preview</Text>
                <Text h2>{this.state.title}</Text>
                <Text h5 >{this.state.description}</Text>
            </View>

        );
    }


}