import React, { useState } from 'react';
import { StyleSheet, Modal, Button, Text, TextInput, Image, KeyboardAvoidingView, View} from 'react-native';
import Jim from '../../images/friendsPhoto/Jim.png'

const FriendJim = props => {
    return(
        
        <Modal visible={props.visible} animationType="fade">
       <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
        keyboardVerticalOffset={50}>
        <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#3bd389" onPress={props.onCancel} />
          </View>
        </View>

            <Text style={styles.headerText}>Jim Contrell</Text>
            <Image source={Jim} style={styles.image}/>
            <Text style={styles.subHeader}>Amount to Transfer</Text>
            <TextInput style={styles.input}
              id='SendMoney'
              lable='SendMoney (required)'
              placeholder='$50'
              required
              autoCapitalize='none'
              // onValueChange = {() => ()}
              initialValue='' />
            <Text style={styles.subHeader2}>Leave a message</Text>
              <TextInput style={styles.input}
              id='LeaveMessage'
              lable='LeaveMessage (required)'
              placeholder='For my fluffy unicorn'
              required
              autoCapitalize='none'
              // onValueChange = {() => ()}
              initialValue='' />

          </KeyboardAvoidingView>
        </Modal>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 180,
    },
    headerText: {
        fontSize: 36,
        color: '#363636',
        justifyContent: 'flex-start',
        marginRight: 125,
        marginBottom: 20,
      },
      subHeader: {
        fontSize: 25,
        color: '#363636',
        justifyContent: 'flex-start',
        marginRight: 125,
        marginBottom: 10,
      },
      subHeader2: {
        fontSize: 25,
        color: '#363636',
        justifyContent: 'flex-start',
        marginRight: 145,
        marginBottom: 10,
      },
      image: {
        height: 300,
        width: 300,
        justifyContent: 'center',
        margin: 20,
    
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f5f5f5',
        marginTop: 10,
      },
    cancelButtonContainer: {
        paddingTop: 20,
        marginRight: 320,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
      },
      cancelButton: {
        width: '20%',
        borderRadius: 5,
        borderColor: '#f5f5f5',
        backgroundColor: '#f5f5f5',
        fontWeight: 'bold',
        padding: 5,
        margin: 13,
        marginTop: 50,
      },
})

export default FriendJim;