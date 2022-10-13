import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { Icon } from "@react-native-material/core";

const Header=()=>{

    return(
       <>
       <View style={{backgroundColor:"#ffff66", flex:1, padding:10}}>
       <View style={{backgroundColor:"white",  height:25, width:40, borderRadius:10,  alignSelf: "flex-end",flexDirection:"row", marginRight:50}}><Icon name="magnify" color="grey" size={24} style={{margin:5}}/>
       <View style={{backgroundColor:"white", height:30, width:40, borderRadius:10,marginLeft:10}}><Icon name="account-circle" size={24} color="grey" style={{margin:5}}/></View></View>

        <Text style={{fontSize:20}}>Food Delivery App</Text>
        <Text style={{fontSize:40}}>E-CART </Text>
       
       

       </View>
       
       <View style={{alignSelf:"center"}}><ImageBackground source={require('../assets/img/header_img.png')} style={{height:150, width:300, resizeMode:"cover", borderRadius:20}}>
       <View style={{backgroundColor:"white",  height:75, width:190, borderRadius:4, alignSelf: "center", marginTop:60}}>
        <Text style={{padding:8, fontWeight:"Bold"}}>Lunch & Dinner</Text><Text style={{color:'#cccccc', fontSize:10, marginLeft:10}}>Book Your table Now !</Text>
        
        
        <View style={{flexDirection:"row", justifyContent:"space-around"}}><Text><Icon name="star" color="#e6b800" size={24}/>4.5/5</Text> <Text style={{marginTop:2}}>
        <Icon name="clock" color='green' size={20}/>15-20 mins</Text></View>
        
        </View></ImageBackground>

       </View>
       
      




       
       </>

    )
}

const styles=StyleSheet.create({



});

export default Header;