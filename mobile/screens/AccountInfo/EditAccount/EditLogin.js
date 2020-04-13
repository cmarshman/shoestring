import React from 'react';
import { View, Text, Modal, Button, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

const EditLogin = props => {
  return (
    <Modal visible={props.visible} animationType="fade">
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
        keyboardVerticalOffset={50}
      >
          <View style={styles.cancelButtonContainer}>
            <View style={styles.cancelButton}>
              <Button title="<" color="#3bd389" onPress={props.onCancel} />
            </View>
          </View>
          <Text style={styles.headerText}>Edit Login Page</Text>
          <Text style={styles.subHeader}>Old Login</Text>
          <TextInput style={styles.input}
            id='oldLogin'
            lable='oldLogin (required)'
            placeholder='Previous login email'
            required
            autoCapitalize='none'
            // onValueChange = {() => ()}
            initialValue='' />
          <TextInput style={styles.input}
            id='oldPassword'
            lable='oldPassword (required)'
            placeholder='Previous password'
            secureTextEntry
            required
            autoCapitalize='none'
            // onValueChange = {() => ()}
            initialValue='' />
          <Text style={styles.subHeader2}>New Login</Text>
          <TextInput style={styles.input}
            id='newEmail'
            lable='newEmail (required)'
            placeholder='Previous login email'
            required
            autoCapitalize='none'
            // onValueChange = {() => ()}
            initialValue='' />
          <TextInput style={styles.input}
            id='newPassword'
            lable='newPassword (required)'
            placeholder='Previous password'
            secureTextEntry
            required
            autoCapitalize='none'
            // onValueChange = {() => ()}
            initialValue='' />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="SAVE NEW LOGIN" color='#f5f5f5' />
            </View>
          </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 36,
    color: '#363636',
    justifyContent: 'flex-start',
    marginRight: 95,
    padding: 30,
  },
  subHeader:{
    fontSize: 25,
    color: '#363636',
    justifyContent: 'flex-start',
    marginRight: 230,
  },
  subHeader2:{
    fontSize: 25,
    color: '#363636',
    justifyContent: 'flex-start',
    marginRight: 220,
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
  buttonContainer: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },
  button: {
    width: '90%',
    borderRadius: 5,
    borderColor: '#3bd389',
    backgroundColor: '#3bd389',
    fontWeight: 'bold',
    padding: 5,
    margin: 13,
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
  buttonContainer: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },
  button: {
    width: '90%',
    borderRadius: 5,
    borderColor: '#3bd389',
    backgroundColor: '#3bd389',
    fontWeight: 'bold',
    padding: 5,
    margin: 13,
  },

});

export default EditLogin;