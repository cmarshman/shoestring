import React from 'react';
import { StyleSheet, Modal, Button, Text, TextInput, View } from 'react-native';


const CurrencyConverter = props => {
  
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#3bd389" onPress={props.onCancel} />
          </View>
        </View>
        <View>
          <Text style={styles.headerText}>Live Currency Converter</Text>
        </View>
        <Text style={styles.subHeader2}>Check live currency conversion to make sure you send correct amount. </Text>
        <TextInput style={styles.input}
          id='addMoney'
          lable='addMoney (required)'
          placeholder='Add starting amount . . .'
          required
          autoCapitalize='none'
          // onValueChange = {() => ()}
          initialValue='' />
        <TextInput style={styles.input}
          id='addMoney'
          lable='addMoney (required)'
          placeholder='USD : US Dollar'
          required
          autoCapitalize='none'
          // onValueChange = {() => ()}
          initialValue='' /> 
         <Text style={styles.subHeader2}>Change Currency to . . . </Text>
         <TextInput style={styles.input}
          id='addMoney'
          lable='addMoney (required)'
          placeholder='ZAR : South African Rand'
          required
          autoCapitalize='none'
          // onValueChange = {() => ()}
          initialValue='' />
        <View style={styles.buttonContainer}>
        <Text style={styles.subHeader2}>Current Exchange : 18.70 ZAR -> 1 USD</Text>
        <Text style={styles.subHeader2}>Your Exchange : </Text>
        <View style={styles.button} >
          <Button title='ADD MONEY FROM BANK ACCOUNT' color='#f5f5f5'/>
        </View>
      </View>
      </View>
      
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
    marginRight: 125,
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 25,
    color: '#363636',
    justifyContent: 'flex-start',
    marginRight: 100,
    marginBottom: 10,
  },
  subHeader2: {
    width: '83%',
    fontSize: 25,
    color: '#363636',
    justifyContent: 'flex-start',
    marginRight: 0,
    marginBottom: 10,
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
})

export default CurrencyConverter;