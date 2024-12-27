import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet, Text ,Image, KeyboardAvoidingView,Alert} from "react-native";
import { auth } from "../database/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const CreateUserScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = () => {
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigation.navigate("UsersList"))
        .catch((err) => Alert.alert("wrong email or password"));
        navigation.navigate("UsersList")
    }
  };

  return (
 
      <KeyboardAvoidingView style={styles.container}>
     
      <Image style={styles.logo} source={require('../assets/loogo.png')} />
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your email"
        autocomplete="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your password"
        autocomplete="none"
        secureTextEntry={true}
        textContentType="password"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.button2}>
        <Button title="Login" onPress={onHandleLogin} />
        </View>
      </KeyboardAvoidingView>
    
  );
};

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
    backgroundColor: "white",
    margin:5,
    borderColor:"#B601F9",
    borderWidth:2,
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

export default CreateUserScreen;
