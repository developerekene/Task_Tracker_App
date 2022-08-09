import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { View, Text } from 'react-native'


import HomeScreen from './TabScreens/HomeScreen';
import NotificationScreen from './TabScreens/NotificationScreen';
import SearchScreen from './TabScreens/SearchScreen';
import SettingScreen from './TabScreens/SettingScreen';
import { COLORS } from '../Constants/colors';


const Tab = createBottomTabNavigator();
export default function TabLayoutContainer(){
     return(
          <NavigationContainer>
               <Tab.Navigator initialRouteName={HomeScreen}>
                    <Tab.Screen 
                    name={"Home"} 
                    component={HomeScreen} 
                    options={{
                         headerShown: false, 
                         tabBarIcon: ({focused}) => (
                              <View>
                                   <FontAwesome5 name='home' size={20} color={focused ? COLORS.iconPrimaryColor : COLORS.onFocusedColor}/>
                              </View>
                         ),
                         tabBarLabel: ({focused}) => (
                              <Text style={{color: focused ? COLORS.iconPrimaryColor : COLORS.onFocusedColor, fontSize: 10}}>Home</Text>
                            ),
                         }}/>
                    <Tab.Screen name={"Search"} component={SearchScreen} 
                    options={{
                         headerShown: false,
                         tabBarIcon: ({focused}) => (
                              <View>
                                   <FontAwesome5 name='search' size={20} color={focused ? COLORS.iconPrimaryColor : COLORS.onFocusedColor}/>
                              </View>
                         ),
                         tabBarLabel: ({focused}) => (
                              <Text style={{color: focused ? COLORS.iconPrimaryColor : COLORS.onFocusedColor, fontSize: 10}}>Search</Text>
                            ),

                         }}/>
                    <Tab.Screen name={"Notification"} component={NotificationScreen} options={{headerShown: false,
                    tabBarIcon: ({focused}) => (
                         <View>
                              <FontAwesome5 name='bell' size={20} color={focused ? COLORS.iconPrimaryColor : COLORS.onFocusedColor}/>
                         </View>
                    ),
                    tabBarLabel: ({focused}) => (
                         <Text style={{color: focused ? COLORS.iconPrimaryColor : COLORS.onFocusedColor, fontSize: 10}}>Notifications</Text>
                       ),
                    }}/>
                    <Tab.Screen name={"Setting"} component={SettingScreen} options={{headerShown: false,
                    tabBarIcon: ({focused}) => (
                         <View>
                              <FontAwesome5 name='cog' size={20} color={focused ? COLORS.iconPrimaryColor : COLORS.onFocusedColor}/>
                         </View>
                    ),
                    tabBarLabel: ({focused}) => (
                         <Text style={{color: focused ? COLORS.iconPrimaryColor : COLORS.onFocusedColor, fontSize: 10}}>Settings</Text>
                       ),
                    }}/>
                    
               </Tab.Navigator>
          </NavigationContainer>
     );
}