import { Icon } from '@react-native-material/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Footer=({navigation})=>{

    return(
       <>
       <View style={{marginLeft:10, marginTop:30, flex:1, flexDirection:"row", justifyContent:"space-around"}}>

        <TouchableOpacity><Text style={{fontSize:22, fontWeight:"bold"}}>All Resturants</Text></TouchableOpacity>
        <TouchableOpacity style={{ marginTop:10}}> <Icon name="silverware-fork-knife" size="44"/>   </TouchableOpacity>
       </View>
       
      <View style={ {marginLeft:80}}><Text style={{color:'#cccccc', fontSize:10}}>See your Favorite place!</Text></View> 
       
    <TouchableOpacity onPress={()=>navigation.navigate('Products')} style={{flex:1, margin:8, }}><Text>Check out Food Items !</Text></TouchableOpacity>

    


       
       </>

    )
}

export default Footer;