import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Button, Text, View, TextInput, Image } from 'react-native';
import Cory from '../../images/Team/Cory.png'


export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={50}>
      <Text style={styles.headerText}>Credit Card</Text>
      <Image source={Cory} style={styles.image} />
      <TextInput style={styles.input}
        id='creditCard'
        lable='creditCard (required)'
        placeholder='Credit Card #'
        required
        autoCapitalize='none'
        // onValueChange = {() => ()}
        initialValue='' />
      <View style={styles.halfInputContainer}>
        <TextInput style={styles.halfInput}
          id='CCV#'
          lable='CCV#(required)'
          placeholder='CCV'
          required
          autoCapitalize='none'
          // onValueChange = {() => ()}
          initialValue='' />
        <TextInput style={styles.halfInput}
          id='expDate'
          lable='expDate (required)'
          placeholder='EXP'
          required
          autoCapitalize='none'
          // onValueChange = {() => ()}
          initialValue='' />
      </View>


      <View style={styles.buttonContainer}>
        <View style={styles.button} >
          <Button title='ADD A CREDIT CARD' color='#3bd389' />
        </View>
        <Text>Link your bank account. This is necessary to receive payments.</Text>
        <View style={styles.button} >
          <Button title='LINK MY BANK ACCOUNT' color='#3bd389' />
        </View>
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
    marginRight: 160,
    padding: 30,
  },
  image: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    marginBottom: 40
  },
  halfInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%'
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
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
  },
  text: {
    width: '80%'
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
    borderColor: '#363636',
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
    padding: 5,
    margin: 15
  },

});
