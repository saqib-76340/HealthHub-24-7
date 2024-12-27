import {
    View,
    ScrollView,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    Text,
    Switch,
    
  } from "react-native";
  import { StatusBar } from 'expo-status-bar';
  import { useState } from 'react';
  import React from 'react'
  import { useNavigation } from "@react-navigation/native";
  import {  ref, set ,update} from 'firebase/database';
  import { db } from "../components/config.jsx";
  import {useEffect} from 'react';
  let amount = 5000;
  const userdetaills =  () => {
    const [username,setName] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );
  
    function create2(){
      update(ref(db, 'List/' + "Medicine3"), {
       
        email: 0,
        
      }).then(() => {
        console.log("success")
        
      })
      .catch((error) => {
        console.log("error")
      })
      
    }
    async function create (){
      navigation.navigate("Ootp");
      update(ref(db, 'List/' + "Medicine3"), {
       
        email: email,
        
      }).then(() => {
        console.log("success")
        
      })
      .catch((error) => {
        console.log("error")
      })
      let ok = email;
      let ook = ok * 100;
      amount = amount - ook;
      console.log(amount);
      if (amount < 0){
        alert('no balance');
        amount = 5000;
      }
      await delay(14000);
      create2();
    }
  
    return (
      <ScrollView style={styles.container}>
        
          <Text style={styles.texxt}>Balance={amount}</Text>
        
  
        <View style={styles.inputGroup}>
          <Text>Enter amount of tablets you want</Text>
          
          <TextInput value={email} placeholder="Enter the amount" onChangeText={(email) => {setEmail(email)}}></TextInput>
        </View>
          
        <View>
          <Button
            title="Order"
            
            onPress={create
  //            updateUser();
              //props.navigation.navigate("Ootp");
              //doYourTask();
            }
          />
       
        </View>
  
      </ScrollView>
    );
  }
  
  export default userdetaills
  
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 35 },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    texxt: {
      alignSelf: "center",
      fontSize: 30,
      
      paddingHorizontal: 16,
      paddingVertical: 11,
      borderRadius: 11,
      marginTop: 6,
   
      
    }
  });
  