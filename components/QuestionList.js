import React, {Component} from 'react'
import {View, Alert, Picker, Button} from 'react-native'
import {Text, ListItem} from 'react-native-elements'

export class QuestionList extends Component {
    static navigationOptions = {title: 'Questions'}
    constructor(props) {
        super(props)
        this.state = {
            questions: [

                {id:'402', title: 'Question 1', type:'TF', subtitle: 'True False'},
                {id:'412', title: 'Question 2', type:'MC', subtitle: 'Multiple choice'},
                {id:'422',title: 'Question 3', type:'ES', subtitle: 'Essay'},
                {id:'432',title: 'Question 4', type:'FB', subtitle: 'FillInTheBlanks'}
            ],
            type:'TF',
            examId: 1
        }
        this.createQuestion = this.createQuestion.bind(this);
    }


    createQuestion(type){


    }



    render() {
        return(

            <View>


                <Picker
                    selectedValue = {this.state.type}
                    onValueChange = {(itemValue, itemIndex) => this.setState({type: itemValue})}>
                    <Picker.Item value="TF" label="True False" />
                    <Picker.Item value="MC" label="Multiple Choice" />
                    <Picker.Item value="ES" label="Essay" />
                    <Picker.Item value="FB" label="Fill in the blanks" />
                </Picker>

                <Button onPress={() => this.createQuestion(this.state.type)} title='Add Question'/>



                <View style={{padding: 15}}>
                {this.state.questions.map(
                    (question, index) => (
                        <ListItem
                            onPress={() => {
                                if(question.type === 'TF')
                                    this.props.navigation
                                        .navigate("TrueFalseQuestionEditor", {questionId: question.id})
                                if(question.type === "MC")
                                    this.props.navigation
                                        .navigate("MultipleChoiceQuestionEditor", {questionId: question.id})

                                if(question.type === "ES")
                                    this.props.navigation
                                        .navigate("EssayQuestionEditor", {questionId: question.id})
                                if(question.type === "FB")
                                    this.props.navigation
                                        .navigate("FillInTheBlanksQuestionEditor", {questionId: question.id})
                            }}
                            key={index}
                            subtitle={question.subtitle}
                            title={question.title}/>))}
            </View>
            </View>
        )
    }
}
