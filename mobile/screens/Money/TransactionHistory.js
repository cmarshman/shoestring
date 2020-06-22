import React from 'react';
import { StyleSheet, Modal, Button, Text, View, Image } from 'react-native';
import Alphi from '../../images/friendsPhoto/alphi.png'
import Ashley from '../../images/friendsPhoto/ashley.png'
import Duche from '../../images/friendsPhoto/duche.png'

const TransactionHistory = props => {
    return(
        <Modal visible={props.visible} animationType="fade">
        <View style={styles.container}>
        <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#3bd389" onPress={props.onCancel} />
          </View>
        </View>
        <View>
            <Text style={styles.headerText}>Transaction History</Text>
        </View>
    
          <Image source={Alphi} style={styles.image}/><Text style={styles.textImage}>Julie sent $40 for pizza</Text>
          <Image source={Ashley} style={styles.image} /><Text style={styles.textImage}>Joe sent $35 for shoes</Text>
          <Image source={Duche} style={styles.image} /><Text style={styles.textImage}>Ralph sent $80 for tennis lesson</Text>

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
      imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
      },
      image: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        margin: 20,
    
      },
    textImage: {
        justifyContent: 'center'
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

export default TransactionHistory;