import * as React from 'react'
import { View, Image, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';

export default function TaskCreated(){
     return(
          <ScrollView>
               <View>
               <View style={{justifyContent: 'space-between', flexDirection: 'row', marginLeft: 25, marginRight: 25, marginTop: 15, marginBottom: 15, }}>
                    <Text style={{fontWeight: '400', fontSize: 18, lineHeight: 27}}>
                         Task Created
                    </Text>
                    <Image source={require('../images/akar-icons_arrow-up-down.png')}/>
               </View>
                    <View style={{
                         flexDirection: 'row', 
                         justifyContent: 'space-between', 
                         marginLeft: 25, 
                         paddingLeft: 10, 
                         backgroundColor: '#D9D9D9',
                         height: 50,
                         padding:10,
                         marginRight: 25,
                         borderRadius: 12,
                         marginBottom: 10
                         }}>
                         <View style={{flexDirection: 'row',}}>
                              <Image style={{marginRight: 10}} source={require('../images/Rectangle3.png')}/>
                              <Text style={{fontSize: 12}}>
                                   Contact the CEO of Decagon.
                              </Text>
                         </View>
                         <View style={{flexDirection: 'row'}}>
                              <Image style={{paddingRight: 5}} source={require('../images/pen-2-line.png')}/>
                              <Image source={require('../images/majesticons_delete-bin-line.png')}/>
                         </View>
                    </View>
                    <View style={{
                         flexDirection: 'row', 
                         justifyContent: 'space-between', 
                         marginLeft: 25, 
                         paddingLeft: 10, 
                         backgroundColor: '#CAB8FD',
                         height: 50,
                         padding:10,
                         marginRight: 25,
                         borderRadius: 12,
                         marginBottom: 10
                         }}>
                         <View style={{flexDirection: 'row',}}>
                              <Image style={{marginRight: 10}} source={require('../images/Rectangle3.png')}/>
                              <Text style={{fontSize: 12}}>
                                   {"Design the onboarding session of \n task tracker App"}
                              </Text>
                         </View>
                         <View style={{flexDirection: 'row'}}>
                              <Image style={{paddingRight: 5}} source={require('../images/pen-2-line.png')}/>
                              <Image source={require('../images/majesticons_delete-bin-line.png')}/>
                         </View>
                    </View>
                    <View style={{
                         flexDirection: 'row', 
                         justifyContent: 'space-between', 
                         marginLeft: 25, 
                         paddingLeft: 10, 
                         backgroundColor: '#FDB8B8',
                         height: 50,
                         padding:10,
                         marginRight: 25,
                         borderRadius: 12,
                         marginBottom: 10
                         }}>
                         <View style={{flexDirection: 'row',}}>
                              <Image style={{marginRight: 10}} source={require('../images/Rectangle3.png')}/>
                              <Text style={{fontSize: 12}}>
                                   {"Remind the technical team to include \n the micro-interactions delivered"}
                              </Text>
                         </View>
                         <View style={{flexDirection: 'row'}}>
                              <Image style={{paddingRight: 5}} source={require('../images/pen-2-line.png')}/>
                              <Image source={require('../images/majesticons_delete-bin-line.png')}/>
                         </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                         <Image style={{paddingRight: 5}} source={require('../images/Chart13.png')}/>
                    </View>
          </View>
          </ScrollView>
          
               
     );
}