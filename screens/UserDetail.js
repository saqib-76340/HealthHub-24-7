import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
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
let amount = 5000;
import firebase from "../database/firebase.js";
const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
const UserDetail = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);
    
  const doYourTask = () => {
    setIsDisabled(true);
  }
  const initialState = { id: "", name: "", email: "", phone: "" };
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({ ...user, id: doc.id });
    setLoading(false);
  };

  useEffect(() => {
    getUserById(props.route.params.userId);

  }, []);

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const deleteUser = async () => {
    const dbRef = firebase.db
      .collection("users")
      .doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate("UsersList");
  };
  
  const updateUser = async () => {
    props.navigation.navigate("Ootp");
    await delay(15000)
    const dbRef = firebase.db.collection("users").doc(user.id);
    await dbRef.set({ name: user.name, email: user.email, phone: user.phone });
    setUser(initialState);
    
    let quantity = 8;
    let ok = user.email;
    let ook = ok * 100;
    console.log(ook);
    amount = amount - ook
    console.log(amount)
    if (amount < 0) {
      alert("error no balance");
      amount = 5000;
    }
    if ( ok > quantity){
      alert("insufficient Balance");
      amount = 10000;
      props.navigation.navigate("UsersList");
    }
    await delay(2000);

    await dbRef.set({ name: user.name, email: "0", phone: user.phone });
    props.navigation.navigate("UsersList");


  };


  const openConfirmationAlert = () => {
    Alert.alert("Remove de user", "Are you sure?", [
      { text: "Yes", onPress: () => deleteUser() },
      { text: "No", onPress: () => console.log(false) },
    ]);
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      
        <Text style={styles.texxt}>Balance={amount}</Text>
      

      <View style={styles.inputGroup}>
        <Text>Enter amount of tablets you want</Text>

        <TextInput
          placeholder="0"
          value={user.email}
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
        
      <View>
        <Button
          title="Order"
          
          onPress={() => {
            updateUser();
            //props.navigation.navigate("Ootp");
            //doYourTask();
          }}
        />
     
      </View>

    </ScrollView>
  );
};

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

export default UserDetail;
