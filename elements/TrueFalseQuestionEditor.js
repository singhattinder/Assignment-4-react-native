import React,{Component} from 'react';
import {FormLabel, FormInput, FormValidationMessage, Text, Button, CheckBox} from 'react-native-elements';
import {Alert, View} from 'react-native';



export class TrueFalseQuestionEditor extends Component{

    constructor(props) {
        super(props);

        this.state = ({title:'question title',
        description:'question description',
        points:0,
            isTrue:true
        })

    }

    updateForm = (newState) => {
        this.setState(newState)
    };


    render() {
        const {goBack} = this.props.navigation;
        return (

            <View>
                <Text h2>True False Question</Text>
                <Text h2>{this.state.title}</Text>
                <Text h5 >{this.state.description}</Text>


                <CheckBox title='Answer'
                          onPress={() => this.setState({isTrue: !this.state.isTrue})}
                          checked={this.state.isTrue}/>

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