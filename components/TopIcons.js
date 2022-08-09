import * as React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { SIZES } from '../Constants/Tools';

//This components carries the screen first icons
export default function TopIcons(){
     return(
          <View>
               <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingLeft: SIZES.sideMarginLeft, paddingRight: SIZES.sideMarginRight, alignItems: 'center'}}>
                    <TouchableOpacity>
                         <Image source={require('../images/backButton.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                         <Image source={require('../images/profileImage.png')}/>
                    </TouchableOpacity>
                    
               </View>
               <Text style={{
                    fontWeight: SIZES.headerFontWeight,
                    fontSize: SIZES.headerFontSize,
                    lineHeight: SIZES.headerLineheight,
                    textAlign: 'center'
               }}>
                    Task Tracker
               </Text>
          </View>
          
     );
}