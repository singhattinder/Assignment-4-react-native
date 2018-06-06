import React, {Component} from 'react'
import {View, Alert , Picker, Button} from 'react-native'
import {Text, ListItem, } from 'react-native-elements'

export class ExamPicker extends Component {
    static navigationOptions = {title: 'Exam'}
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            widgetId: 1,
            type:'TF'
        };

        this.createWidget = this.createWidget.bind(this);
    }
    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId");
        fetch("http://localhost:8080/api/lesson/"+lessonId+"/widget")
            .then(response => (response.json()))
            .then(widgets => this.setState({widgets}))
    }


    createWidget(type){

        let widget = {

            widgetType:type,
            text:'Dummy text',
            description:'dummy desc',
            title:'dymmu title'

        };
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId");

        fetch("http://localhost:8080/api/lesson/"+lessonId+"/widget",{
            body:JSON.stringify(widget),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => (response.json()))
            .then(widgets => this.setState({widgets}))

    }



    render() {
        return(

            <View>

                <Picker
                    selectedValue = {this.state.questionType}
                    onValueChange = {(itemValue, itemIndex) => this.setState({questionType: itemValue})}>

                    <Picker.Item value="MC" label="Multiple choice" />
                    <Picker.Item value="ES" label="Essay" />
                    <Picker.Item value="TF" label="True or false" />
                    <Picker.Item value="FB" label="Fill in the blanks" />
                </Picker>

                <Button onPress={() => this.createWidget(this.state.widgetType)} title='Add widget'/>







                <View style={{padding: 15}}>
                    {this.state.questions.map(
                        (widget, index) => (
                            <ListItem
                                onPress={() => {

                                    if(widget.widgetType === 'Exam')

                                        this.props.navigation
                                            .navigate("QuestionList", {examId: widget.id})


                                }}
                                key={index}
                                subtitle={widget.description}
                                title={widget.title}/>))}
                </View>


            </View>

        )
    }
}
