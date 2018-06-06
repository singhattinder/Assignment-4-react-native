import React, {Component} from 'react';
import { StyleSheet, ScrollView, StatusBar, View } from 'react-native';
import {FixedHeader} from './elements/FixedHeader';
import {Text} from 'react-native-elements';
import {TextHeadings} from './elements/TextHeadings';
import {Icons} from './elements/Icons';
import {Exam} from './elements/Exam';
import {QuestionTypeButtonGroupChooser} from "./elements/QuestionTypeButtonGroupChooser";
import {QuestionTypePicker} from "./elements/QuestionTypePicker";
import {TrueFalseQuestionEditor} from './elements/TrueFalseQuestionEditor';
import {MultipleChoiceQuestionEditor} from './elements/MultipleChoiceQuestionEditor';
import { createStackNavigator } from 'react-navigation';
import {ScreenA} from "./elements/ScreenA";
import {ScreenB} from "./elements/ScreenB";
import {ScreenX} from "./elements/ScreenX";
import {CourseList} from "./components/CourseList";
import {ModuleList} from "./components/ModuleList";
import {LessonList} from "./components/LessonList";
import {Button} from 'react-native-elements';
import {WidgetList} from "./components/WidgetList";
import {QuestionList} from "./components/QuestionList";
import {ExamPicker} from "./elements/ExamPicker";


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
    ExamPicker
});

export default App;