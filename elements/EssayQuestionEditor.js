import React,{Component} from 'react';
import {FormLabel, FormInput, FormValidationMessage, Text, Button, CheckBox} from 'react-native-elements';
import {Alert, StyleSheet, View, TextInput} from 'react-native';



export class EssayQuestionEditor extends Component{

    constructor(props) {
        super(props);

        this.state = ({title:'Essay question title',
            description:'description of the question',
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
                <Text h4>{this.state.title}</Text>
                <View style={styles.textContainer} >
                    <Text h4>{this.state.description}</Text>
                    <TextInput
                        style={styles.text}
                        underlineColorAndroid="transparent"
                        placeholder={"Type something"}
                        placeholderTextColor={"grey"}
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>





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

const styles = StyleSheet.create({
    textContainer: {
        borderColor: '#D3D3D3',
        borderWidth: 1,
        padding: 5
    },
    text: {
        height: 150,
        justifyContent: "flex-start"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }


});