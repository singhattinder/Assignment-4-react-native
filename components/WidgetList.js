import React, {Component} from 'react'
import {View, Alert , Picker, Button} from 'react-native'
import {Text, ListItem, } from 'react-native-elements'
import {QuestionList} from "./QuestionList";

export class WidgetList extends Component {
    static navigationOptions = {title: 'Widgets'}
    constructor(props) {
        super(props)
        this.state = {
            widgets: [],
            courseId: 1,
            moduleId: 1,
            widgetType:'Exam'
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
            text:'Exam',
            description:'Exam 2',
            title:'Exam Title'

        };
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId");

        fetch("https://react-native-spring.herokuapp.com/api/lesson/"+lessonId+"/widget",{
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
                    selectedValue = {this.state.widgetType}
                    onValueChange = {(itemValue, itemIndex) => this.setState({widgetType: itemValue})}>

                    <Picker.Item value="Exam" label="Exam" />
                    <Picker.Item value="Assignment" label="Assignment" />
                </Picker>

                <Button onPress={() => this.createWidget(this.state.widgetType)} title='Add widget'/>







            <View style={{padding: 15}}>
                {this.state.widgets.map(
                    (widget, index) => (
                        <ListItem
                            onPress={() => {
                                if(widget.widgetType === 'Exam')
                                this.props.navigation
                                .navigate("QuestionList", {widgetId: widget.id})

                                if(widget.widgetType === 'Assignment')
                                    this.props.navigation
                                        .navigate("AssignmentEditor", {widgetId: widget.id})
                            }}
                            key={index}
                            subtitle={widget.description}
                            title={widget.widgetType}/>))}
            </View>


            </View>

        )
    }
}
