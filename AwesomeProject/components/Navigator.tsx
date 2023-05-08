import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from './Order';
import Profile from './Profile';
import SvgProfile from './images/Profile';
import SvgHome from './images/Home';
import { Path33961 } from './images';
import Detail from './Detail';
import SvgBuy from './images/Buy';
import Basket from './Basket';
const Tab = createBottomTabNavigator();
const Navigator = () => {
  return (
   <>
   
    <Tab.Navigator>
        <Tab.Screen name="Order" component={Order} options={{headerShown:false , tabBarIcon: ({focused}) => <SvgHome  name="home" size={26} fill={focused ? 'blue' : 'white'}
                                                stroke={focused ? '#5956E9' : '#200E32'} />,tabBarShowLabel:false }} />
        <Tab.Screen name="Profile" component={Profile} options={{headerTitleAlign:"center", tabBarIcon: ({focused}) => <SvgProfile name="home" size={26} fill={focused ? 'blue' : 'white'}
                                                stroke={focused ? '#5956E9' : '#200E32'} />,tabBarShowLabel:false,}} />
        <Tab.Screen name="Favorite" component={Detail} options={{headerTitleAlign:"center", tabBarIcon: ({focused}) => <Path33961 name="home" size={26} fill={focused ? 'blue' : 'white'} stroke={focused ? 'white' : '#200E32'}/>,tabBarShowLabel:false}} />
        <Tab.Screen name="Basket" component={Basket} options={{headerTitleAlign:"center", tabBarIcon: ({focused}) => <SvgBuy name="home" size={26} fill={focused ? 'blue' : 'white'}  stroke={focused ? '#5956E9' : '#200E32'}/>,tabBarShowLabel:false}} />
    </Tab.Navigator>
   
   </>
  )
}

export default Navigator