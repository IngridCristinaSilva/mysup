import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input,Text,Button,Image } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/Style';

export default function Login({navigation}) {

  const[email,setEmail] = useState(null)
  const[senha,setSenha] = useState(null)

  const entrar =() =>{
    navigation.reset({
      index: 0,
      routes:[{name: "Principal"}]
  })
  }

  const form = ()=>{
    navigation.navigate("Cadastro")
  }



  return (
    <View style={styles.container}>
      <Image style={{width:200,height:100}} source = {require('../assets/Mysup.png')}/>
      <Input
      placeholder="E-mail"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      />

      <Input
      placeholder="Senha"
      leftIcon={{ type: 'font-awesome', name: 'key' }}
      onChangeText={value => setSenha(value)}
      secureTextEntry={true}
      />


      <Button
        title="Entrar"
        color={'black'}
        onPress={() => entrar()}
        buttonStyle = {Style_button.button}
      />
        
      <Button
        title="Cadastrar"
        color={'black'}
        onPress={() => form()}
        buttonStyle = {Style_button.button}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const Style_button = StyleSheet.create({
  button: {
    width:"23%",
    marginTop: 20
  }

})

