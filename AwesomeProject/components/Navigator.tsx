import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from './Order';
import Profile from './Profile';
import fav from './fav';
import SvgProfile from './images/Profile';
import Home from './Home';
import SvgHome from './images/Home';
import { Path33961 } from './images';
import Detail from './Detail';
const Tab = createBottomTabNavigator();
const Navigator = () => {
  return (
   <>
   
    <Tab.Navigator>
        <Tab.Screen name="Order" component={Order} options={{headerShown:false , tabBarIcon: () => <SvgHome  name="home" size={26} />,tabBarShowLabel:false }} />
        <Tab.Screen name="Profile" component={Profile} options={{headerTitleAlign:"center", tabBarIcon: () => <SvgProfile name="home" size={26} />,tabBarShowLabel:false}} />
        <Tab.Screen name="Detail" component={Detail} options={{headerTitleAlign:"center", tabBarIcon: () => <Path33961 name="home" size={26} />,tabBarShowLabel:false}} />

    </Tab.Navigator>
   
   </>
  )
}

export default Navigator