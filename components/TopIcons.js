import * as React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native';

export default function TopIcons(){
     return(
          <View>
               <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingLeft: 25, paddingRight: 25, alignItems: 'center'}}>
                    <TouchableOpacity>
                         <Image source={require('../images/backButton.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                         <Image source={require('../images/profileImage.png')}/>
                    </TouchableOpacity>
                    
               </View>
               <Text style={{
                    fontWeight: '600',
                    fontSize: 20,
                    lineHeight: 30,
                    textAlign: 'center'
               }}>
                    Task Tracker
               </Text>
          </View>
          
     );
}