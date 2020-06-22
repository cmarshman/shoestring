import React, { useState } from 'react';
import { StyleSheet, Modal, Button, Text, TextInput, View } from 'react-native';
import AddMoneyModal from './AddMoneyModal/AddMoneyModal'

const AddMoney = props => {
  const [isAddMoneyModal, setIsAddMoneyModal] = useState(false);

  const cancelAddMoneyModal = () =>{
    setIsAddMoneyModal(false);
  }
  
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#3bd389" onPress={props.onCancel} />
          </View>
        </View>
        <View>
          <Text style={styles.headerText}>Add Money</Text>
        </View>
        <Text style={styles.subHeader}>Your wallet has : $110</Text>
        <Text style={styles.subHeader2}>Add money to your wallet</Text>
        <TextInput style={styles.input}
          id='addMoney'
          lable='addMoney (required)'
          placeholder='Add money to your wallet . . . '
          required
          autoCapitalize='none'
          // onValueChange = {() => ()}
          initialValue='' />
        <View style={styles.buttonContainer}>
        <View style={styles.button} >
          <Button title='ADD MONEY FROM BANK ACCOUNT' color='#f5f5f5' onPress={() => setIsAddMoneyModal(true)} />
          <AddMoneyModal
            visible={isAddMoneyModal}
            onCancel={cancelAddMoneyModal}
          />
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
    marginRight: 155,
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
    fontSize: 25,
    color: '#363636',
    justifyContent: 'flex-start',
    marginRight: 60,
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

export default AddMoney;