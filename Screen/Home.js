import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import Container from "../Screens/Container";
import Footer from "../Screens/Footer";
import Header from "../Screens/Header";




const Home=({ navigation })=>{


    return(
        <>
        {/* header */}
        <View>
        <Header/>
        </View>

        {/* Container */}
        <View>
        <Container/>
        </View>

        {/* Footer */}

        <View>
        <Footer navigation={navigation}/>
        </View>
        </>
    )
}
export default Home;