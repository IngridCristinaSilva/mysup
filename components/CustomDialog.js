import * as React from 'react';
import { View } from 'react-native';
import { Button as PaperButton, Dialog, Portal, Provider, Text,Paragraph } from 'react-native-paper';


const CustomDialog = (props) =>{
    return(
        
    <Provider>
    <Portal>
        <Dialog visible={props.visible} onDismiss={() => props.onclose(false)}>
          <Dialog.Title>{props.titulo}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{props.mensagem}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <PaperButton onPress={() => props.onclose(false)}>Ok</PaperButton>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      </Provider>
  
    )
}

export default CustomDialog