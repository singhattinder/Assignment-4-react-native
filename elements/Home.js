

import React, {Component} from 'react';
import { StyleSheet, ScrollView, StatusBar, View} from 'react-native';
import {Button} from 'react-native-elements'
import {FixedHeader} from './FixedHeader';
import {Text} from 'react-native-elements';
import {TextHeadings} from './TextHeadings';
import {Icons} from './Icons';
import {Exam} from './Exam';
import {QuestionTypeButtonGroupChooser} from "./QuestionTypeButtonGroupChooser";
import {QuestionTypePicker} from "./QuestionTypePicker";
import {TrueFalseQuestionEditor} from './TrueFalseQuestionEditor';
import { createStackNavigator } from 'react-navigation'




 export class Home extends Component{

     static navigationOptions = { title: 'Home' };

     constructor(props) {
         super(props);
     }


     render() {
         return (
             <ScrollView>
                 <StatusBar barStyle="light-content"/>
                 <FixedHeader/>

                 <Button title="Go to Screen A"
                         onPress={() => this.props.navigation
                             .navigate('ScreenA') } />
                 <Button title="Go to Screen B"
                         onPress={() => this.props.navigation
                             .navigate('ScreenB') } />

                 <Button title="Go to Screen X"
                         onPress={() => this.props.navigation
                             .navigate('ScreenX',{'parameter':'12'}) } />

                 <TrueFalseQuestionEditor/>
                 <QuestionTypeButtonGroupChooser/>
                 <QuestionTypePicker/>
                 <Exam/>
                 <Icons/>
                 <View style={{padding:20}}>

                     <TextHeadings/>
                 </View>
             </ScrollView>

         );
     }
 }