import React from 'react';
import { StyleSheet, Modal, Button, Text, View, Image } from 'react-native';

import Cory from '../../../images/Team/Cory.png';

const AddMoneyModal = props => {
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
            <Text style={styles.headerText}>Confrim Transfer</Text>
            <Image source={Cory} style={styles.image} />
            <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                    <Button title='Confirm Transfer' color='#3bd389' onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3bd389',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headerText: {
        fontSize: 36,
        color: '#363636',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        marginRight: 0,
        marginTop: 50,
        padding: 30,
    },
    image: {
        height: 250,
        width: 250,
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
        borderColor: '#f5f5f5',
        backgroundColor: '#f5f5f5',
        fontWeight: 'bold',
        padding: 5,
        margin: 13,
    },
});

export default AddMoneyModal;