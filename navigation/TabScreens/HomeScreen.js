import React, { useState} from 'react'
import { View, ScrollView, Text} from 'react-native';
import DateAndTime from '../../components/DateAndTime';
import InputData from '../../components/InputData';
import TaskCreated from '../../components/TaskCreated';
import TopIcons from '../../components/TopIcons';
import { COLORS } from '../../Constants/colors';
import { Dimensions } from 'react-native';

export default function HomeScreen({navigation}){
     


     return(
          <ScrollView>
               <View>
                    
                    {/* <Text>{}</Text> */}
                    <TopIcons />
                    <InputData />
                    <DateAndTime />
                    <TaskCreated navigation={navigation}/>
               </View>
          </ScrollView>
     );
}