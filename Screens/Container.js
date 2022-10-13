import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { Icon } from "@react-native-material/core";


const Container=()=>{

    return(
       <>
       <View style={{flexDirection:"row",justifyContent:"space-around", paddingTop:30}}><TouchableOpacity style={{backgroundColor:"#d9d9d9", borderRadius:15, width:30, height:30, alignItems:"center"}}><Icon name="hamburger" size={24} color="#ff8000"/></TouchableOpacity>
      
      <TouchableOpacity style={{backgroundColor:"#d9d9d9", borderRadius:15, width:30, height:30, alignItems:"center"}}><Icon name="food-drumstick" size={24} color="#ff8000"/></TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"#d9d9d9", borderRadius:15, width:30, height:30, alignItems:"center"}}><Icon name="food-hot-dog" size={24} color="#ff8000"/></TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"#d9d9d9", borderRadius:15, width:30, height:30, alignItems:"center"}}><Icon name="noodles" size={24} color="#ff8000"/></TouchableOpacity>
      
      
      
       </View>
       
       
       <View style={{flexDirection:"row",justifyContent:"space-around", paddingLeft:6}}><Text style={{ fontSize:12, color:'#666666'}}>Burger</Text><Text style={{ fontSize:12, color:'#666666'}}>Non-Veg</Text><Text style={{ fontSize:12, color:'#666666'}}> Hot-Dog</Text><Text style={{ fontSize:12, color:'#666666'}}>Noodles</Text></View>





       
       </>

    )
}

export default Container;