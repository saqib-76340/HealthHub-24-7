import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../database/firebase'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';

const Abount = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text style={styles.text}>{auth.currentUser?.email}</Text>
      <Button title="Home" onPress={() => navigation.navigate("UsersList")}/>
      <Button title="Logout" onPress={() => navigation.navigate("CreateUserScreen")}/>
      <Text>Name:Md Azad</Text>
      <Text>E-mail:mdaazad271@gmail.com</Text>
      <Text>Phone_no:7634064707</Text>
      <Text>insta_id:s_zaman.life</Text>
      <Text>@s_zaman</Text>
    </View>
  )
}

export default Abount

const styles = StyleSheet.create({
    text:{
        alignSelf: "center",
        fontSize: 30,
        
        paddingHorizontal: 16,
        paddingVertical: 11,
        borderRadius: 11,
        marginTop: 6,        
    }
})