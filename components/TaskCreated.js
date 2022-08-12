import * as React from 'react'
import { View, Image, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import { COLORS } from '../Constants/colors';
import { SIZES } from '../Constants/Tools';
import { myData } from './InputData';


//This component carries task created
export default function TaskCreated(){
     const getUser = async () => {
          try {
            const savedUser = await AsyncStorage.getItem("taskCreated");
            const currentUser = JSON.parse(savedUser);
            
          } catch (error) {
            console.log(error);
          }
     };
     //    console.warn(currentUser);
     return(
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
                         marginLeft: SIZES.sideMarginLeft, 
                         paddingLeft: 10, 
                         backgroundColor: COLORS.itemCreatedBackgroundOne,
                         height: 50,
                         padding:10,
                         marginRight: SIZES.sideMarginRight,
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
                         marginLeft: SIZES.sideMarginLeft, 
                         paddingLeft: 10, 
                         backgroundColor: COLORS.itemCreatedBackgroundTwo,
                         height: 50,
                         padding:10,
                         marginRight: SIZES.sideMarginRight,
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
                         marginLeft: SIZES.sideMarginLeft, 
                         paddingLeft: 10, 
                         backgroundColor: COLORS.itemCreatedBackgroundThree,
                         height: 50,
                         padding:10,
                         marginRight: SIZES.sideMarginRight,
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
                    <View style={{alignItems: 'center', marginBottom: 30}}>
                         <Image style={{paddingRight: 5}} source={require('../images/Chart13.png')}/>
                    </View>
                    {/* <TouchableOpacity style={{
                              backgroundColor: COLORS.iconPrimaryColor, 
                              height: 50, 
                              width: 50, 
                              padding: 12, 
                              borderRadius: 50, 
                              alignItems: 'center',
                              position: 'absolute',
                              bottom: '20%'
                              }}
                              // onPress={{}}
                              >
                              
                                   <Image source={require('../images/coolicon.png')}/>
                                   
                              
                    </TouchableOpacity> */}
          </View>
          
               
     );
}