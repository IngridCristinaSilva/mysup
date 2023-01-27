import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Input,Text,Button,Image, CheckBox } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/Style';
import usuarioService from '../services/UsuarioService';
import { Button as PaperButton,Dialog,Paragraph,Portal,Provider} from 'react-native-paper';
import CustomDialog from '../components/CustomDialog';

export default function Cadastro({navigation}) {

  const[nome,setNome] = useState(null)
  const[email,setEmail] = useState(null)
  const[cpf,setCpf] = useState(null)
  const[rg,setRg] = useState(null)
  const[senha,setSenha] = useState(null)
  const[isSelected,setSelected] = useState(false)
  const[errorEmail,setErrorEmail] = useState(null)
  const[errorNome,setErrorNome] = useState(null)
  const[errorCpf,setErrorCpf] = useState(null)
  const[errorRg,setErrorRg] = useState(null)
  const[errorSenha,setErrorSenha] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const [visibleDialog, setVisibleDialog] = useState(false);
  const [titulo, setTitulo] = useState(null)
  const [mensagem, setMensagem] = useState(null)
  const [tipo, setTipo] = useState(null)

  const showDialog = (titulo,mensagem,tipo) => {
    setVisibleDialog(true)
    setTitulo(titulo)
    setMensagem(mensagem)
    setTipo(tipo)
  }

  

  const hideDialog = (status) => {
    setVisibleDialog(status)
  }



  const validar = () =>{
    let error = false

    setErrorCpf(null)
    setErrorEmail(null)
    setErrorRg(null)
    setErrorSenha(null)

    if(email == null){
      setEmail("Prencha seu e-mail")
      error = true
    }

    if(cpf == null){
      setCpf("Prencha seu CPF")
      error = true
    }

    if(rg == null){
      setRg("Prencha seu RG")
      error = true
    }
    
    if(senha == null){
      setRg("Prencha sua Senha")
      error = true
    }

    return !error

  }

  const entrar =() =>{
    if (validar()){
      setLoading(true)
      
      let data = {
        email: email,
        cpf: cpf,
        nome: nome,
        rg: rg,
        senha: senha
      }
      
      usuarioService.cadastrar(data)
      .then((response) => {
        setLoading(false)
        Alert.alert("Sucesso!",response.data.mensagem)
        //const titulo = (response.data.status) ? "Sucesso" : "Erro"
        //setTitulo(titulo)
        //setMensagem( response.data.mensagem)
        console.log(response.data)
        showDialog(titulo, response.data.mensagem, "SUCESSO")
        //Alert.alert(titulo, response.data.mensagem)    
        //showDialog()
             
      })
      .catch((error) => {
        setLoading(false)
        //setTitulo("Erro")
        //setMensagem( "Erro", "Houve um erro inesperado")
        showDialog("Erro","Houve um erro inesperado", "ERRO")
        //console.log(error)
        //console.log("Deu erro")
        //Alert.alert("Erro", "Houve um erro inesperado")
      })
    }
  }



  return (
    <View style={styles.container}>
      <Image style={{width:200,height:100}} source = {require('../assets/Mysup.png')}/>
      <Input
        placeholder="Nome"
        onChangeText={value => setNome(value)}
        errorMessage={errorNome}
      />

      <Input
        placeholder="E-mail"
        onChangeText={value => {setEmail(value); setErrorEmail(null)}}
        keyboardType="email-address"
        errorMessage={errorEmail}
      />

      <Input
        placeholder="CPF"
        onChangeText={value => {setCpf(value);setErrorCpf}}
        keyboardType = "number-pad"
        errorMessage={errorCpf}
      />

      <Input
        placeholder="RG"
        onChangeText={value => {setRg(value);setErrorRg}}
        keyboardType = "number-pad"
        errorMessage={errorRg}
      />

      <Input
      placeholder="Senha"
      onChangeText={value => setSenha(value)}
      errorMessage={errorSenha}
      secureTextEntry={true}
      />

      <CheckBox
        title="Concordo com as politicas de uso"
        checked = {isSelected}
        checkedColor="green"
        uncheckedColor='red'
        onPress ={() => setSelected(!isSelected)}

      />
      <Button
        title="Cadastrar"
        color={'black'}
        onPress={() => entrar()}
        buttonStyle = {Style_button.button}
      />
        

      

      <StatusBar style="auto" />

    {visibleDialog &&
      <CustomDialog titulo = {"titulo"} mensagem={"mensagem"} tipo={tipo} visible={visibleDialog} onClose={hideDialog}></CustomDialog>
    }
    

    
    </View>

  );
}



const Style_button = StyleSheet.create({
  button: {
    width:"300%",
    marginTop: 20
  }

})
