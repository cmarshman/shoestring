import React, { useState } from 'react';
import { StyleSheet, Modal, KeyboardAvoidingView, Button, Text, View, Image } from 'react-native';
import Cory from '../../images/Team/Cory.png';
import UploadPhoto from './EditAccount/UploadPhoto';
import EditLogin from './EditAccount/EditLogin';
import EditCC from './EditAccount/EditCC';
import EditAddress from './EditAccount/EditAddress';
import CancelAccount from './EditAccount/CancelAccount';
import NewBank from './EditAccount/NewBank';

const AccountInfo = props => {
  const [isUploadPhoto, setIsUploadPhoto] = useState(false);
  const [isEditLogin, setIsEditLogin] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);
  const [isEditCC, setIsEditCC] = useState(false);
  const [isCancelAccount, setIsCancelAccount] = useState(false);
  const [isNewBank, setIsNewBank] = useState(false);

  const cancelUploadPhoto = () => {
    setIsUploadPhoto(false);
  };
  const cancelEditLogin = () => {
    setIsEditLogin(false);
  };
  const cancelEditAddress = () => {
    setIsEditAddress(false);
  };
  const cancelEditCC = () => {
    setIsEditCC(false);
  };
  const cancelNewBank = () => {
    setIsNewBank(false);
  };
  const cancelCancelAccount = () => {
    setIsCancelAccount(false);
  };

  return (
    <Modal visible={props.visible} animationType="fade">
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={50}>
      <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#3bd389" onPress={props.onCancel} />
          </View>
        </View>
      <Text style={styles.headerText}>Edit My Profile</Text>
      <Image source={Cory} style={styles.image} />
      <View style={styles.buttonContainer}>
        <View style={styles.button} >
          <Button title='UPLOAD A NEW PHOTO' color='#f5f5f5' onPress={() => setIsUploadPhoto(true)}/>
          <UploadPhoto 
          visible={isUploadPhoto}
          onCancel={cancelUploadPhoto}
          />
        </View>
        <View style={styles.button} >
          <Button title='EDIT MY LOGIN' color='#f5f5f5' onPress={() => setIsEditLogin(true)}/>
          <EditLogin
          visible={isEditLogin}
          onCancel={cancelEditLogin}
          />
        </View>
        <View style={styles.button} >
          <Button title='EDIT MY ADDRESS' color='#f5f5f5' onPress={() => setIsEditAddress(true)}/>
          <EditAddress 
          visible={isEditAddress}
          onCancel={cancelEditAddress}
          />
        </View>
        <View style={styles.button} >
          <Button title='EDIT MY CREDIT CARD' color='#f5f5f5' onPress={() => setIsEditCC(true)}/>
          <EditCC
          visible={isEditCC}
          onCancel={cancelEditCC}
          />
        </View>
        <View style={styles.button} >
          <Button title='LINK TO A NEW BANK ACCOUNT' color='#f5f5f5' onPress={() => setIsNewBank(true)}/>
          <NewBank
          visible={isNewBank}
          onCancel={cancelNewBank}
          />
        </View>
        <View style={styles.button} >
          <Button title='CANCEL MY ACCOUNT' color='#f5f5f5' onPress={() => setIsCancelAccount(true)}/>
          <CancelAccount
          visible={isCancelAccount}
          onCancel={cancelCancelAccount}
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
  image: {
    height: 150,
    width: 150,
    justifyContent: 'center',
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

export default AccountInfo;