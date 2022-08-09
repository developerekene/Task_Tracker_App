import * as React from 'react'
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

export default function InputData(){
     return(
          <View style={{paddingLeft: 25, paddingRight: 25}}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                         <Text style={{fontWeight: '400', fontSize: 18, lineHeight: 27}}>
                              Title 
                         </Text>
                         <TextInput style={{height: 25, paddingLeft: 10, marginLeft: 10, width: 270}}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                         <TouchableOpacity>
                              <Image source={require('../images/check-line.png')}/>
                         </TouchableOpacity>
                         <TouchableOpacity>
                              <Image source={require('../images/pen-2-line.png')}/>
                         </TouchableOpacity>
                    </View>
               </View>
               <View>
                    <TextInput style={{height: 147, backgroundColor: '#B8FDBB', borderRadius: 12, marginTop: 10, padding: 1}}/>
               </View>
               <View style={{height: 46, borderRadius: 12, backgroundColor: '#B8FDBB', marginTop: 10}}>

               </View>
          </View>
     )
}