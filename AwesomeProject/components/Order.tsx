import { View, Text, TextInput, FlatList, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Order = ({ navigation }: any) => {
  const [data, setData] = useState([])
  const [originalProducts, setoriginalProducts] = useState([])
  useEffect(() => {

    axios.get('https://64568d9d2e41ccf169201e42.mockapi.io/users/users')
        .then(response => {
            setData(response.data)
            setoriginalProducts(response.data)
            
        })
          
            
}, [])
const myFunc = (value : any) => {

  let filteredData = originalProducts.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase()))
  setData([...filteredData])
  

  
  }
const renderItem = ({ item }: any) => {
  return  <TouchableOpacity onPress={()=>navigation.navigate('fav',{id:item.id})}>
     <View style={{backgroundColor:"white",width:200,height:200,marginHorizontal:30,marginTop:90}}>
    <View style={{alignItems:"center"}}>
     <Image
        style={{width:100,height:100,position:"absolute",
      top:-50,borderRadius:1000
      }}
       
        source={{
          uri: `${item.photo}`
         }} />
     <View style={{flexDirection:"column",marginTop:70,gap:20,alignItems:"center"}}> 
      <Text style={{color:"black",fontSize:20,fontWeight:"500"}}>{item.name}</Text>
      <View style={{flexDirection:"row",gap:10}}>
      <Text style={{color:"gray"}}>{item.serias}</Text>
      <Text style={{color:"gray"}}>{item.color}</Text>
      </View>
      <Text style={{color:"blue"}}>$ {item.price}</Text></View>

    </View>
  </View>
  </TouchableOpacity>
}
  return (
    <View style={{flex:1,backgroundColor:"#dcdcdc"}}>
     <View style={{marginTop:50}}> 
     <TextInput style={{borderWidth:2 ,marginHorizontal:20,borderRadius:30 , color:"black"}} placeholder='Search' placeholderTextColor={'black'} onChangeText={myFunc}/>
     </View>
      <View style={styles.head}>
        <Text style={styles.text}>Order Online collect in store </Text>
      </View>
      <View style={{flexDirection:"row",marginHorizontal:20, gap:10,marginTop:50}}>
        <Text style= { { fontSize:20 ,color:"black"}}>Werable</Text>
        <Text style= { { fontSize:20 ,color:"black"}}>Laptops</Text>
        <Text style= { { fontSize:20 ,color:"black"}}>Phones</Text>
        <Text style= { { fontSize:20 ,color:"black"}}>Drones</Text>
      </View>
      <FlatList
                    horizontal
                    data={data}

                    renderItem={renderItem}

                />
    </View>
  )
}

export default Order
const styles = StyleSheet.create({
  text : {
    fontSize:40,
    fontFamily:'Raleway-Bold',
    color:'black',
  
  }
  ,head: {
    alignItems:"center",
    marginTop:60
    
    
  }
})