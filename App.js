import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input,Text,Button,Image } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from './style/Style';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Principal from './screens/Principal';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name='Principal' component={Principal}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>  );
    
  }


