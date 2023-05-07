import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Home = ({ navigation }: any) => {
  const goToOrder = () => {
    navigation.navigate('Navigator')
}
  return (
    <View style={{flex:1, backgroundColor:"#5956E9"}} >
      <View style={styles.head}>
        <Text style={styles.text}>Find Your Gadget</Text>
      </View>
       <View style={{alignItems:"center"}}><Image source={require('../assets/desg.png')}/></View>
       <TouchableOpacity onPress={goToOrder} style={{alignItems:"center",backgroundColor:"white",padding:20,marginHorizontal:50 ,marginTop:20,borderRadius:10}}>
        <Text style={{color:"blue" }}>Get Started</Text>
       </TouchableOpacity>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  text : {
    fontSize:60,
    fontFamily:'Raleway-Bold',
  
  }
  ,head: {
    alignItems:"center",
    marginTop:60
    
    
  }
})