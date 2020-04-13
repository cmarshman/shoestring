import React from 'react';
import { View, Text, Modal, Button, StyleSheet, Image } from 'react-native';
import BofA from '../../../images/bofa.png'

const NewBank = props => {
    return(
      <Modal visible={props.visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#3bd389" onPress={props.onCancel} />
          </View>
        </View>
        <Text style={styles.headerText}>Link New Bank</Text>
        <Text style={styles.subHeader}>Currently Connected To</Text>
        <Image source={BofA} style={styles.image}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="LINK NEW ACCOUNT" color="#f5f5f5" onPress={props.onCancel}/>
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
    marginRight: 110,
    padding: 30,
  },
  subHeader:{
    fontSize: 25,
    color: '#363636',
    justifyContent: 'flex-start',
    marginRight: 90,
  },
  image: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    marginTop: 20,
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

});

  export default NewBank;