import React, {useState} from 'react';
import { View, Text, Image, Modal, Button, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';
import Alphi from '../../images/friendsPhoto/alphi.png'
import Ashley from '../../images/friendsPhoto/ashley.png'
import Duche from '../../images/friendsPhoto/duche.png'
import Jim from '../../images/friendsPhoto/Jim.png'
import June from '../../images/friendsPhoto/June.png'
import Zelzabub from '../../images/friendsPhoto/Zelzabub.png'
import FriendJim from '../SocialSide/FriendJim';




const SendMoney = props => {
  const [isJim, setIsJim] = useState(false);
  
  const cancelJim = () => {
    setIsJim(false);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
        keyboardVerticalOffset={30}>
        <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#3bd389" onPress={props.onCancel} />
          </View>
        </View>
        <Text style={styles.headerText}>Pick A Friend</Text>
        <TextInput style={styles.input}
          id='friendName'
          lable='friendName (required)'
          placeholder='Who do you want to send money to?'
          required
          autoCapitalize='none'
          // onValueChange = {() => ()}
          initialValue='' />
        <View style={styles.imageContainer}>
          <Image source={Alphi} style={styles.image} />
          <Image source={Ashley} style={styles.image} />
          <Image source={Duche} style={styles.image} />
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => setIsJim(true)}> 
          <Image source={Jim} style={styles.image} onPress={() => setIsJim(true)}/>
          </TouchableOpacity>
          <FriendJim
          visible={isJim}
          onCancel={cancelJim}
          />
          <Image source={June} style={styles.image} />
          <Image source={Zelzabub} style={styles.image} />
        </View>
      </KeyboardAvoidingView>
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
    marginRight: 130,
    padding: 30,
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

});

export default SendMoney;