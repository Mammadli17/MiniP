import { View, Text, FlatList ,Pressable,Image,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Detail = ({navigation}:any) => {
  
    const [originalProducts, setoriginalProducts] = useState([])
    useFocusEffect(() => {

        AsyncStorage.getItem('favorite')
            .then(data => {
                let datas = JSON.parse(data ?? '[]');
                setoriginalProducts(datas)
            })

        
    })

    const handleDelete = (id:any)=> {
        
          const updatedFavorites = originalProducts.filter((item : any) => item.id !== id);
          AsyncStorage.setItem('favorite', JSON.stringify(updatedFavorites));
          setoriginalProducts(updatedFavorites);
       
      };


    if (originalProducts.length === 0) {
        return (
          <View style={{flex:1,justifyContent:"center"}}>
            <View style={styles.centerContainer}>
              <Text style={{color:'black',fontSize:40}}>No Favorites Yet</Text>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Start Ordering</Text>
            </Pressable>
          </View>
        );
      }
    return (
    
    <View style={styles.container}>
      <FlatList
        data={originalProducts}
        renderItem={({item}:any) => {
          return (
            <View style={styles.item}>
              <Image
                source={{uri: `${item.photo}`}}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Raleway-Bold',
                  marginTop: 10,
                }}>
                {item.name}
              </Text>
              <Text style={{color: 'black', fontFamily: 'Raleway-Bold'}}>
                {item.serias}
              </Text>
              <Text style={{color: '#5956E9', fontFamily: 'Raleway-Bold'}}>
                From $ {item.price}
              </Text>
              <Pressable
                style={{
                  backgroundColor: '#5956E9',
                  marginTop: 8,
                  padding: 5,
                  borderRadius: 5,
                }}
                onPress={() => handleDelete(item.id)}>
                <Text style={{color: '#fff', fontFamily: 'Raleway-Bold'}}>
                  Delete
                </Text>
              </Pressable>
            </View>
          );
        }}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
        
    )
}

export default Detail
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
    },
    centerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    noItemsText: {
      fontSize: 28,
      color: 'black',
      textAlign: 'center',
      fontFamily: 'Raleway-Bold',
    },
    row: {
      flex: 1,
      justifyContent: 'space-around',
    },
    item: {
      margin: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: 15,
    },
    button:{
      alignItems:"center",
      marginTop:10,
      backgroundColor:"#5956E9",
      marginHorizontal:80,
      padding:15,
      borderRadius:10
    },
    buttonText:{
      color:'#fff',
    }
  });
