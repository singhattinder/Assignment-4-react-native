import React, {Component} from 'react';
import {ScrollView, StatusBar, View } from 'react-native';
import {FixedHeader} from './elements/FixedHeader';
import {TrueFalseQuestionEditor} from './elements/TrueFalseQuestionEditor';
import {MultipleChoiceQuestionEditor} from './elements/MultipleChoiceQuestionEditor';
import { createStackNavigator } from 'react-navigation';
import {CourseList} from "./components/CourseList";
import {ModuleList} from "./components/ModuleList";
import {LessonList} from "./components/LessonList";
import {Button} from 'react-native-elements';
import {WidgetList} from "./components/WidgetList";
import {QuestionList} from "./components/QuestionList";
import {FillInTheBlanksQuestionEditor} from "./elements/FillInTheBlanksQuestionEditor";
import {EssayQuestionEditor} from "./elements/EssayQuestionEditor";
import {AssignmentEditor} from './elements/AssignmentEditor'


class Home extends Component{

    static navigationOptions = { title: 'Home' };

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="light-content"/>
                <FixedHeader/>
                <Button title="Courses"
                        onPress={() => this.props.navigation
                            .navigate('CourseList') } />
            </ScrollView>

        );
    }
}

const App = createStackNavigator({
    Home,
    CourseList,
    ModuleList,
    LessonList,
    WidgetList,
    QuestionList,
    TrueFalseQuestionEditor,
    MultipleChoiceQuestionEditor,
    FillInTheBlanksQuestionEditor,
    EssayQuestionEditor,
    AssignmentEditor

});

export default App;