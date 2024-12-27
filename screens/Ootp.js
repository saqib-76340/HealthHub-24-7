import {View,Text,Button,TextInput,StyleSheet,Alert, TouchableOpacity} from 'react-native'
import Reac ,{useRef, useState} from 'react'
import { FirebaseRecaptchaVerifierModal} from "expo-firebase-recaptcha"
import { firebaseConfig } from '../config/firebase'
import firebase from 'firebase/compat/app'
import { useNavigation } from '@react-navigation/native'
import UserDetail from './UserDetail'
const Ootp = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);
    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
        .verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
        .then(setVerificationId);
        setPhoneNumber('');
    };
    const confirmCode = ()=> {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
        .then(() => {
            setCode('');
        })
        .catch((error) => {
            alert(error);
        })
        
        Alert.alert(
            navigation.navigate("UsersList")
        );
    }
    return(
        <View>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            <Text style={styles.loginButton}>
                OTP verification

            </Text>
            <TextInput style={styles.TextInput}
                placeholder='phone num'
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
                autoCompleteType='tel'
                
            />
       
            <Button title='Send Code' onPress={sendVerification}/>
            <TextInput
                style={styles.TextInput}
                placeholder='confirm code'
                onChangeText={setCode}
                keyboardType='number-pad'
                autoCompleteType='tel'
                

            />

            <Button title='confirm verification code' onPress={confirmCode}/>
        </View>
    )
 }
export default Ootp


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      padding: 35 ,
      backgroundColor:'#FFFFFF'
  },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    TextInput:{
      alignSelf: "center",
      backgroundColor: "#DEDEDE",
      paddingHorizontal: 16,
      paddingVertical: 11,
      borderRadius: 11,
      marginTop: 6,
      width: "80%"
  },
    loginButton:{
    
      margin:5,
     
      
      width: "60%",
      alignSelf: "center",
      padding: 15,
      borderRadius:11,
    },
    button2:{
     
      margin:5,
      
      
      width: "50%",
      alignSelf: "center",
      padding: 15,
      borderRadius:11,
  },
  logo: {
         
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  });
  
  
  