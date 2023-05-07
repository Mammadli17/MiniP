import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home';
import Order from './components/Order';
import Navigator from './components/Navigator';
import Detail from './components/Detail';
import fav from './components/fav';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

          <Stack.Screen name="Navigator" component={Navigator} options={{ headerShown: false }} />
          <Stack.Screen name="fav" component={fav} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  )
}

export default App