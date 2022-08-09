import * as React from 'react'
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

export default function DateAndTime(){
     return(
          <View style={{paddingLeft: 25, paddingRight: 25, marginTop: 10}}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                         <Image source={require('../images/majesticons_clock-line.png')}/>
                         <Text style={{paddingLeft: 10, paddingRight: 20}}>
                              Jul 26, 2022
                         </Text>
                         <Text>
                              12:00 am
                         </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                         <Image source={require('../images/Rectangle3.png')}/>
                         <Text style={{paddingLeft: 10}}>
                              All day
                         </Text>
                    </View>
               </View>
               <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Text style={{marginLeft: 30}}>
                         Does not repeat
                    </Text>
                    <TouchableOpacity style={{marginTop: 8, marginLeft: 5}}>
                         <Image source={require('../images/Vector4.png')}/>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                         <Image style={{marginTop: 5}} source={require('../images/majesticons_timer-line.png')}/>
                         <View style={{marginTop: 8, marginLeft: 5, borderRadius: 12}}>
                              <Text style={{textAlign: 'center'}}>
                                   12:00 AM
                              </Text>
                         </View>
                         <Image style={{marginTop: 10, marginLeft: 5}} source={require('../images/Line1.png')}/>
                         <TouchableOpacity style={{marginTop: 8, marginLeft: 5}}>
                              <Text>
                                   01:00 PM
                              </Text>
                         </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', marginLeft: 140}}>
                         <TouchableOpacity style={{marginTop: 8, marginLeft: 5}}>
                              <Text>
                                   1hr:00:00
                              </Text>
                         </TouchableOpacity>
                    </View>
                    
               </View>
          </View>
     );
}