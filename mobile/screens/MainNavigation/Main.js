import React, { useState} from 'react';
import { StyleSheet, Modal, Button, Text, View, Image } from 'react-native';
import Cory from '../../images/Team/Cory.png';
import SendMoney from '../Money/SendMoney';
import AccountInfo from '../AccountInfo/AccountInfo';
import AddMoney from '../Money/AddMoney';
import CurrencyCalculator from '../Money/CurrencyConverter';
import TransactionHistory from '../Money/TransactionHistory';


const Main = props => {
    const [isSendMoney, setIsSendMoney] = useState(false);
    const [isAccountInfo, setIsAccountInfo] = useState(false);
    const [isAddMoney, setIsAddMoney] = useState(false);
    const [isCurrencyCalculator, setIsCurrencyCalculator] = useState(false);
    const [isTransactionHstory, setIsTransactionHistory] = useState(false);

    const cancelSendMoney = () => {
        setIsSendMoney(false);
    };

    const cancelAccountInfo = () => {
        setIsAccountInfo(false);
    }

    const cancelAddMoney = () => {
        setIsAddMoney(false);
    }

    const cancelCurrencyConverter = () => {
        setIsCurrencyCalculator(false);
    }

    const cancelTransactionHistory = () => {
        setIsTransactionHistory(false);
    }

    return (
        <Modal visible={props.visible} animationType="fade">
            
            <View
                style={styles.container}>
                <View style={styles.cancelButtonContainer}>
                    <View style={styles.cancelButton}>
                        <Button title="<" color="#f5f5f5" onPress={props.onCancel} />
                    </View>
                </View>
                <Text style={styles.headerText}>My Wallet</Text>
                <Image source={Cory} style={styles.image} />
                <Text style={styles.subHeader}>Your wallet has : $100</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.sendbutton} >
                        <Button title='SEND MONEY' color='#f5f5f5' onPress={() => setIsSendMoney(true)} />
                        <SendMoney
                            visible={isSendMoney}
                            onCancel={cancelSendMoney}
                        />
                    </View>
                    <View style={styles.button} >
                        <Button title='ADD MONEY TO YOUR WALLET' color='#f5f5f5' onPress={() => setIsAddMoney(true)} />
                        <AddMoney
                            visible={isAddMoney}
                            onCancel={cancelAddMoney}
                        />
                    </View>
                    <View style={styles.button} >
                        <Button title='CURRENCY CALCULATOR' color='#f5f5f5' onPress={() => setIsCurrencyCalculator(true)} />
                        <CurrencyCalculator
                            visible={isCurrencyCalculator}
                            onCancel={cancelCurrencyConverter}
                        />
                    </View>
                    <View style={styles.button} >
                        <Button title='TRANSACTION HISTORY' color='#f5f5f5' onPress={() => setIsTransactionHistory(true)} />
                        <TransactionHistory
                            visible={isTransactionHstory}
                            onCancel={cancelTransactionHistory}
                        />
                    </View>
                    <View style={styles.button} >
                        <Button title='EDIT PROFILE' color='#f5f5f5' onPress={() => setIsAccountInfo(true)} />
                        <AccountInfo
                            visible={isAccountInfo}
                            onCancel={cancelAccountInfo}
                        />
                    </View>
                </View>
            </View>
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
        marginRight: 170,
        padding: 30,
    },
    subHeader: {
        fontSize: 25,
        color: '#363636',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    image: {
        height: 250,
        width: 250,
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
    text: {
        width: '80%'
    },
    buttonContainer: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    sendbutton: {
        width: '90%',
        borderRadius: 5,
        borderColor: '#363636',
        backgroundColor: '#363636',
        fontWeight: 'bold',
        padding: 5,
        margin: 13,
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
      },
});

export default Main;
