import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Modal, Button, Text, TextInput, View, Linking } from 'react-native';
import Main from './MainNavigation/Main';

const Login = props => {
  const [isMain, setIsMain] = useState(false)

  const cancelMain = () => {
    setIsMain(false);
  }
  
  return (
    <Modal visible={props.visible} animationType="fade">
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
        keyboardVerticalOffset={50}>
        <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#f5f5f5" onPress={props.onCancel} />
          </View>
        </View>
        <Text style={styles.headerText}>Log In</Text>
        <TextInput style={styles.input}
          id='email'
          lable='Email (required)'
          placeholder='Email (required)'
          required
          email
          autoCapitalize='none'
          errorMessage='Please enter a valid email address.'
          // onValueChange = {() => ()}
          initialValue='' />
        <TextInput style={styles.input}
          id='password'
          lable='Password (required)'
          placeholder='Password (required)'
          secureTextEntry
          required
          minLength={8}
          autoCapitalize='none'
          errorMessage='Please enter a valid password.'
          // onValueChange = {() => ()}
          initialValue='' />
        <Text style={styles.text}>By logging in, you agree to Shoestring's <Text style={styles.link} onPress={() => Linking.openURL('https://google.com')}>Terms of Service</Text> and
    <Text style={styles.link} onPress={() => Linking.openURL('https://google.com')}>Privacy Policy.</Text></Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button title='NEXT' color='#3bd389' onPress={() => setIsMain(true)}/>
            <Main
            visible={isMain}
            onCancel={cancelMain}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3bd389',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 36,
    color: '#f5f5f5',
    justifyContent: 'flex-start',
    marginRight: 240,
    padding: 30,
  },
  text: {
    width: '80%'
  },
  link: {
    textDecorationLine: 'underline'
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
    borderColor: '#3bd389',
    backgroundColor: '#3bd389',
    fontWeight: 'bold',
    padding: 5,
    margin: 13,
    marginTop: 50,
  },
  buttonContainer: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%'
  },
  button: {
    width: '90%',
    borderRadius: 5,
    borderColor: '#363636',
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
    padding: 5,
  },

});


export default Login;