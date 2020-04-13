import React from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

const CancelAccount = props => {
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#3bd389" onPress={props.onCancel} />
          </View>
        </View>
        <Text style={styles.headerText}>Cancel My Account</Text>
        <Text style={styles.policies}>By selecting “Send Cancelation Notice” you are acknowledging your desire to cancel your account. Depending on your country of origin we may require additional information. Submitting a Cancelation Notice DOES NOT cancel your accout. A representative will have to follow up with you via the email you have in your profile. Please note that all pending transactions will NOT be canceled by selecting “Send Cancelation Notice” and all money currently in your wallet will ONLY be transfered to the account we have on file, once the cancelation has been finialized. Again this does not cancel any actions currently pending, clear your information nor empty your wallet. This will ONLY happen once your notice has been finialized by a representative. </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button title='SEND CANCELATION NOTICE' color='#f5f5f5' />
          </View>
        </View>
        <Text style={styles.policies}>At Shoestring we believe your data is your own. We utilize your personal data to offer you a better user experience. For more information on how we use your data please read through our Privacy Policy. However, we believe you should have access to the data we have and to how we have used it. By submitting a data request below, you will receive a comprehensive and up-to-date look at the data we have collected and how it has been used. Please allow 7-10 business days for us to compile your data, we will then email you at the email we have on file.</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button title='REQUEST MY DATA' color='#f5f5f5' />
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
    marginRight: 40,
  },
  policies: {
    width: '82%',
    fontSize: 12,
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
    marginBottom: 25,
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

export default CancelAccount;