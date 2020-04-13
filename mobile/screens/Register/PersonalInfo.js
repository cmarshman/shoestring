import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Button, Text, TextInput, View } from 'react-native';


export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={50}>
      <Text style={styles.headerText}>Personal Info</Text>
      <TextInput style={styles.input}
        id='name'
        lable='Name (required)'
        placeholder='First and Last Name'
        required
        autoCapitalize='none'
        // onValueChange = {() => ()}
        initialValue='' />
      <TextInput style={styles.input}
        id='streetAddress'
        lable='street address (required)'
        placeholder='Street Address'
        required
        autoCapitalize='none'
        // onValueChange = {() => ()}
        initialValue='' />
      
      <View style={styles.halfInputContainer}>
      <TextInput style={styles.halfInput}
        id='state_province'
        lable='state_province (required)'
        placeholder='State/Province'
        required
        autoCapitalize='none'
        // onValueChange = {() => ()}
        initialValue='' />
        <TextInput style={styles.halfInput}
        id='city'
        lable='city (required)'
        placeholder='City'
        required
        autoCapitalize='none'
        // onValueChange = {() => ()}
        initialValue='' />
        </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button} >
          <Button title='NEXT' color='#3bd389' />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3bd389',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 36,
    color: '#f5f5f5',
    justifyContent: 'flex-start',
    marginRight: 130,
    padding: 30,
  },
  halfInputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%'
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
  halfInput: {
    width: '40%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
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