import React from 'react';
import { View, Text, Modal, Button, StyleSheet, Image } from 'react-native';
import Cory from '../../../images/Team/Cory.png'

const UploadPhoto = props => {
    return(
      <Modal visible={props.visible} animationType="fade">
      <View style={styles.container}>
      <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#3bd389" onPress={props.onCancel} />
          </View>
        </View>
        <Text style={styles.headerText}>Upload A New Photo</Text>
        <Image source={Cory} style={styles.image}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button title='UPLOAD PHOTO' color='#f5f5f5'/>
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
      marginRight: 30,
      padding: 30,
    },
    image: {
      height: 400,
      width: 400,
      justifyContent: 'center',
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

  export default UploadPhoto;