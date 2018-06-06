import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'

export class QuestionList extends Component {
    static navigationOptions = {title: 'Questions'}
    constructor(props) {
        super(props)
        this.state = {
            questions: [

                {id:'402', title: 'Question 1', type:'TrueFalse', subtitle: 'True False'},
                {id:'412', title: 'Question 2', type:'MultipleChoice', subtitle: 'Multiple choice'},
                {id:'422',title: 'Question 3', type:'Essay', subtitle: 'Essay'},
                {id:'432',title: 'Question 4', type:'FillInTheBlanks', subtitle: 'FillInTheBlanks'}
            ],
            examId: 1
        }
    }
    // componentDidMount() {
    //     const {navigation} = this.props;
    //     const examId = navigation.getParam("examId")
    //     fetch("http://localhost:8080/api/exam/"+examId+"/question")
    //         .then(response => (response.json()))
    //         .then(questions => this.setState({questions}))
    // }
    render() {
        return(
            <View style={{padding: 15}}>
                {this.state.questions.map(
                    (question, index) => (
                        <ListItem
                            onPress={() => {
                                if(question.type === 'TrueFalse')
                                    this.props.navigation
                                        .navigate("TrueFalseQuestionEditor", {questionId: question.id})
                                if(question.type === "MultipleChoice")
                                    this.props.navigation
                                        .navigate("MultipleChoiceQuestionEditor", {questionId: question.id})
                            }}
                            key={index}
                            subtitle={question.subtitle}
                            title={question.title}/>))}
            </View>
        )
    }
}
