import { View, Text ,TouchableOpacity,Image,Button} from 'react-native'
import axios from 'axios';
import { ArrowLeft, Path33961 } from './images'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const fav = ({navigation,route}:any) => {
  const [originalProducts, setoriginalProducts] = useState<any>([])
  const [favorites, setfavorites] = useState<any>([])

  


  const MyFunc =() => {
    let newTodo : ToDo = {
      id: id,
      name:originalProducts.name,
      price:originalProducts.price,
      photo:originalProducts.photo,
      serias:originalProducts.serias,
      color:originalProducts.color
  }
   
    
  AsyncStorage.getItem('favorite')
  .then(data => {
      let datas = JSON.parse(data ?? '[]');
      setfavorites(datas)
  })
      AsyncStorage.setItem('favorite', JSON.stringify([...favorites,newTodo]));


  }
  
  const {id} = route.params
  useEffect(() => {

    axios.get('https://64568d9d2e41ccf169201e42.mockapi.io/users/users/'+id)
        .then(response => {
            setoriginalProducts(response.data)

            
        })
        
        
      }, [])
      
      useFocusEffect(() => {
        AsyncStorage.getItem('favorite').then(data => {
          let favorites = JSON.parse(data ?? '[]');
          setfavorites(favorites);
    
        });
      });
      return (
      <View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft padding={20}/>
        </TouchableOpacity >
        <TouchableOpacity onPress={()=>MyFunc()}>
        <Path33961 padding={20}/>
        </TouchableOpacity>
   
      
    </View>
    <Image
        style={{width:400,height:400 }}
       
        source={{
          uri: `${originalProducts.photo}`
         }} />
    <View style={{alignItems:"center"}}><Text style={{color:"black",fontSize:30}}>{originalProducts.name}</Text></View>
    <View style={{borderWidth:1, padding:10,backgroundColor:"white",flexDirection:"row"}}>
      <Text style={{color:"black",fontSize:20}}>Color</Text>
      <View style={{backgroundColor:`${originalProducts.color}`,padding:10,borderRadius:1000,marginLeft:20}}></View>
      <Text style={{color:"black",fontSize:20,marginLeft:20}}>{originalProducts.color}</Text>
    </View>
    <Text style={{color:"black",fontSize:20,marginHorizontal:50}}>
      Get {originalProducts.name} free for a year
    </Text>
    <View style={{marginHorizontal:50}}>  
      <Text style={{color:"gray"}}>
    Retailers may charge less than the suggested retail price, depending upon the actual wholesale cost of each item, usually purchased in bulk from the manufacturer, or in smaller quantities through a distributor. The suggested price is sometimes unrealistically high, so the seller can appear to be offering a discount.
    </Text></View>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:10}}>
      <Text style={{fontSize:20,color:"black"}}>Price</Text>
      <Text style={{color:"blue",fontSize:20}}>$ {originalProducts.price}</Text>
    </View>
    <TouchableOpacity style={{alignItems:"center",backgroundColor:"blue",padding:20,marginHorizontal:50 ,marginTop:10,borderRadius:10}}>
        <Text style={{color:"white",fontSize:20 }}>Add to Basket</Text>
       </TouchableOpacity>

      </View>
  )
}

export default fav
interface ToDo {
  id:number
  name:String
  price:number
  photo:String
  color:String
  serias:String

}