import React from 'react';
import {View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/Home';
import Footer from '../Screens/Footer';
import Products from '../Screens/Products';
import Cart from '../Components/Cart';

const Stack = createNativeStackNavigator();

const Mystack=()=>{
    return(
<View>
<Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="Products" component={Products} /> 
        <Stack.Screen name="Footer" component={Footer} />


      </Stack.Navigator>
</View>

    )
}

export default Mystack;