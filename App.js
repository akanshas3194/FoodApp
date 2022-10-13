import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mystack from './Nav/Stack';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './Redux/Store/index';
import { IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    
    <NavigationContainer>      
       <Provider store={store}> 
       <Text>Hifggrgtsrfgsrg</Text>
      
       <IconComponentProvider IconComponent={MaterialCommunityIcons}>
       <Mystack/>
  </IconComponentProvider>

</Provider>
</NavigationContainer>

  );
}


