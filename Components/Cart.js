import React from "react"; 
import { View, Text, Image} from "react-native";
import {useSelector} from 'react-redux';


const Cart=()=>{

   const cartItems= useSelector(state=>state.Reducer.CartItems)
   
   
    return(
        <>
         {cartItems.map((item, index)=>{
        return <View key={index} style={{backgroundColor:"#ffbb99", margin:15}}>
      <Image source={{uri:item.image}} style={{height:70, width:150, resizeMode:"cover", margin:10, borderRadius:10}}/>
      <View style={{marginVertical:10, justifyContent:"space-evenly"}}>
      <Text>{item.title}</Text>
      <Text>MRP.</Text><Text> {item.price}</Text>
      <Text>Qty.</Text><Text> {item.qty}</Text></View></View>
    })} 
        </>
    )
}

export default Cart;