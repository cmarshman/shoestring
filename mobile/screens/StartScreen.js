import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import Icon from './images/Logos/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Icon} style={{ height: 400, width: 400 }}/>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Sign up" color='#363636'/>
        </View>
        <View style={styles.button2} >
          <Button title="Login" color='#f5f5f5'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3bd389',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%'
  },
  button: {
    width: '40%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#363636',
    backgroundColor: '#f5f5f5',
  },
  button2: {
    width: '40%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#363636',
    backgroundColor: '#363636',
  }
});
