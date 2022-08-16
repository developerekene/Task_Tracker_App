import React, { useState} from 'react'
import { 
     View, 
     Image, 
     TouchableOpacity, 
     Text, 
     TextInput, 
     Alert 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


 function InputData(){
     const [title, setTitle] = useState("");
     const [body, setBody] = useState("");

     const myData = async () => {
          if (title.length == 0 || body.length == 0) {
               Alert.alert('Warning', "Please fill all input fields")
          }else {
               try{
                    const task = {
                         myTitle: title,
                         myBody: body
                    }
                    await AsyncStorage.setItem('taskCreated', JSON.stringify(task));
                    Alert.alert("Success", "The data was saved!");
                    // console.warn("Needed Data", task)
               }catch (error){
                    console.warn(error)
               }
          }
          
     }
     
     return(
          <View style={{paddingLeft: 25, paddingRight: 25}}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                         <Text style={{fontWeight: '400', fontSize: 18, lineHeight: 27}}>
                              Title 
                         </Text>
                         <TextInput 
                         onChangeText={(value)=> setTitle(value)}
                         style={{height: 25, paddingLeft: 10, marginLeft: 10, width: 270}}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                         <TouchableOpacity>
                              <Image source={require('../images/check-line.png')}/>
                         </TouchableOpacity>
                         <TouchableOpacity
                         onPress={myData}
                         >
                              <Image source={require('../images/pen-2-line.png')}/>
                         </TouchableOpacity>
                    </View>
               </View>
               <View>
                    {
                         //this is the input field i want to get data from
                    }
                    <TextInput 
                    style={{
                         height: 147, 
                         backgroundColor: '#B8FDBB', 
                         borderRadius: 12, 
                         marginTop: 10, 
                         padding: 1
                         
                         }}
                         onChangeText={(value)=> setBody(value)}/>
               </View>
               <View style={{
                    flexDirection: 'row',
                    height: 46, 
                    borderRadius: 12, 
                    backgroundColor: '#B8FDBB', 
                    marginTop: 10, 
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingRight: 10,
                    justifyContent: 'space-between'}}>
               <View style={{
                     
                    flexDirection: 'row', 
                    }}>
                    <TouchableOpacity style={{marginRight: 10}}>
                         <Image source={require('../images/akar-icons_image.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight: 10}}>
                         <Image source={require('../images/nimbus_notification.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight: 10}}>
                         <Image source={require('../images/eva_color-palette-outline.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight: 10}}>
                         <Image source={require('../images/material-symbols_archive-outline-rounded.png')}/>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginRight: 10}}>
                         <Image source={require('../images/fluent_arrow-hook-up-left-24-filled.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight: 50}}>
                         <Image source={require('../images/fluent_arrow-hook-up-left-24-filled1.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight: 5}}>
                         <Image source={require('../images/Group1817.png')}/>
                    </TouchableOpacity>
               </View>
               </View>
               
          </View>
     )
}

export default InputData;