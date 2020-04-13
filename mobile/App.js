import React, { useState } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import Icon from './images/Logos/icon.png';
import Login from './screens/Login';
import RegisterMe from './screens/Register/RegisterMe';

export default function App() {
  const [ isLogin, setIsLogin ] = useState(false);
  const [ isRegisterMe, setIsRegisterMe ] = useState(false);
  
  const cancelLogin = () => {
    setIsLogin(false);
  }

  const cancelRegisterMe = () => {
    setIsRegisterMe(false);
  }
  
  return (
    <View style={styles.container}>
      <Image source={Icon} style={{ height: 400, width: 400 }}/>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Sign up" color='#363636' onPress={() => setIsRegisterMe(true)}/>
          <RegisterMe
          visible={isRegisterMe}
          onCancel={cancelRegisterMe}
          />
        </View>
        <View style={styles.button2} >
          <Button title="Login" color='#f5f5f5' onPress={() => setIsLogin(true)}/>
          <Login
          visible={isLogin}
          onCancel={cancelLogin}
          />
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
