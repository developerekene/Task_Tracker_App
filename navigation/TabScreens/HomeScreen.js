import React from 'react'
import { View,ScrollView } from 'react-native';
import DateAndTime from '../../components/DateAndTime';
import InputData from '../../components/InputData';
import TaskCreated from '../../components/TaskCreated';
import TopIcons from '../../components/TopIcons';

export default function HomeScreen(){
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