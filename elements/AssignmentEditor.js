import React,{Component} from 'react';
import {FormLabel, FormInput, FormValidationMessage, Text, Button, CheckBox} from 'react-native-elements';
import {Alert, View, StyleSheet, TextInput} from 'react-native';
import RNFileSelector from 'react-native-file-selector';
import {DocumentPicker} from 'expo';




export class AssignmentEditor extends Component{

    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        alert(result.uri);
        console.log(result);
    }


    constructor(props) {
        super(props);

        this.state = ({title:'',
            description:'',
            points:0,
            isTrue:true,
            visible:true
        })

    }

    updateForm = (newState) => {
        this.setState(newState)
    };



    render() {
        const {goBack} = this.props.navigation;
        return (

            <View>
                <Text h4>Assignment</Text>
                <View style={styles.textContainer} >
                    <Text h5>Essay Answer</Text>
                    <TextInput
                        style={styles.text}
                        underlineColorAndroid="transparent"
                        placeholder={"Type something"}
                        placeholderTextColor={"grey"}
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>


                <FormLabel h4>Upload a file</FormLabel>
                <View >

                    <Button
                        title="Select Document"
                        onPress={this._pickDocument}
                    />
                </View>




                    <Button	backgroundColor="blue"
                           color="white"
                           title="Save"/>
                <Button	backgroundColor="red"
                           color="white"
                           title="Cancel"
                           onPress={() => goBack()}/>


                <Text h3>Preview</Text>
                <Text h2>{this.state.title}</Text>
                <Text h5 >{this.state.description}</Text>
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