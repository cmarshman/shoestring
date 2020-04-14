import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Button, Text, View, Image } from 'react-native';
import Cory from '../../images/Team/Cory.png'


export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={50}>
      <Text style={styles.headerText}>Cory Marshman</Text>
      <Image source={Cory} style={styles.image}/>
      <View style={styles.buttonContainer}>
        <View style={styles.button} >
          <Button title='UPLOAD A PHOTO' color='#3bd389' />
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
    color: '#363636',
    justifyContent: 'flex-start',
    marginRight: 100,
    padding: 30,
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
  image:{
      height: 400,
      width: 400
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
