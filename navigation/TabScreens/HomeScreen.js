import React from 'react'
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import DateAndTime from '../../components/DateAndTime';
import InputData from '../../components/InputData';
import TaskCreated from '../../components/TaskCreated';
import TopIcons from '../../components/TopIcons';
import { COLORS } from '../../Constants/colors';
import { Dimensions } from 'react-native';

export default function HomeScreen(){
     //create a state here having list of objects to create
     //go to task create and make the repetation to be useable
     //then loop through the array that you pass down
     //use map to map throo it
     // for each of the items in the array
     // Input data you pass a callback function


     


     // const windowHeight = Dimensions.get('window').height;
     // const windowWidth = Dimensions.get('window').width;

     // console.warn(windowWidth)
     return(
          <ScrollView>
               <View>
                    <TopIcons />
                    <InputData />
                    <DateAndTime />
                    <TaskCreated />
               </View>
          </ScrollView>
     );
}