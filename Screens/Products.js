import React, { useEffect} from "react";
import { FlatList, View, Text, Image, SafeAreaView, TouchableOpacity} from "react-native";
import { GetProducts, AddtoCart } from "../Redux/Actions/index";
import {useDispatch, useSelector} from "react-redux";
import { Icon } from '@react-native-material/core';

const Products=({navigation})=>{

    const dispatch=useDispatch();
    const foods=useSelector(state=>state.Reducer.Products)
  
useEffect(()=>{
    fetch('https://62e8c790249bb1284eb3a622.mockapi.io/foods')
    .then(r=>r.json())
    .then(data=>dispatch(GetProducts(data)))
    .catch(e=>console.log(e))
    },[])

const renderItem=({item})=>{
 return( 
 <View style={{backgroundColor:"lightyellow", marginVertical:10, marginHorizontal:20, textAlign:"center", flexDirection:"row"}}>
     <Image source={{uri:item.image}} style={{height:70, width:150, resizeMode:"cover", margin:10, borderRadius:10}}/>
   <View style={{marginVertical:10, justifyContent:"space-evenly"}}>
    <Text>{item.title}</Text>
    <Text>MRP.</Text><Text> {item.price}</Text>
    <TouchableOpacity style={{backgroundColor:"orange", width:100, marginHorizontal:20}}><Text style={{color:'white'}} onPress={()=>{dispatch(AddtoCart(item))}}>Add to Cart</Text></TouchableOpacity>
    </View>
   </View>
)}

return(

    <>
    <SafeAreaView >
    <TouchableOpacity onPress={()=> navigation.navigate('Cart')}><Icon name="cart" size={30} color="#cc33ff" style={{marginLeft:400}}/></TouchableOpacity>
     <FlatList data={foods} renderItem={renderItem}/>
    </SafeAreaView>
    </>
)
}

export default Products;
