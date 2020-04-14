import React from 'react';
import { StyleSheet, Modal, Button, Text, View } from 'react-native';

const TransactionHistory = props => {
    return(
        <Modal visible={props.visible} animationType="fade">
        <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#3bd389" onPress={props.onCancel} />
          </View>
        </View>
        <View>
            <Text style={styles.headerText}>Transaction History</Text>
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