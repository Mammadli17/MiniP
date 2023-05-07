import { View, Text ,Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { Home, Location } from './images'

const Profile = () => {
  return (
    <View>
        
        <View style={{alignItems:"center"}} >
        <Image style={{width:100,height:100,borderRadius:1000}} source={require('../assets/profile.jpg')}/>
         <Text style={{color:"black",fontSize:20}}>Isa Mammadli</Text>
        </View>
        <View style={{marginTop:40,marginLeft:80}}>

      <View style={{flexDirection:"row"}}>
        <Location width={50} height={30} />
      <View>
        <Text style={{color:"gray"}}>Adress: Chamshid Naxchvanski 4</Text>
        <Text  style={{color:"gray"}}>Baku Azerbaijan</Text>
        </View>

      </View>
        </View>
    </View>

  )
}

export default Profile