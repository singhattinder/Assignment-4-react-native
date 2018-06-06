import React from 'react';
import { StyleSheet, ScrollView, StatusBar, View } from 'react-native';
import {FixedHeader} from './elements/FixedHeader';
import {Text} from 'react-native-elements';
import {TextHeadings} from './elements/TextHeadings';
import {Icons} from './elements/Icons';
import {Exam} from './elements/Exam';
import {QuestionTypeButtonGroupChooser} from "./elements/QuestionTypeButtonGroupChooser";
import {QuestionTypePicker} from "./elements/QuestionTypePicker";
import {TrueFalseQuestionEditor} from './elements/TrueFalseQuestionEditor';
import { createStackNavigator } from 'react-navigation';
import {Home} from './elements/Home';
import {ScreenA} from "./elements/ScreenA";
import {ScreenB} from "./elements/ScreenB";
import {ScreenX} from "./elements/ScreenX";


const App = createStackNavigator({
    Home,
    ScreenA,
    ScreenB,
    ScreenX
});

export default App;