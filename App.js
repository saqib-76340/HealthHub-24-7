import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateUserScreen from "./screens/CreateUserScreen.js";
import UserDetailScreen from "./screens/UserDetail.js";
import UsersList from "./screens/UsersList.js";
import Abount from "./screens/Abount.js";
import Ootp from "./screens/Ootp.js";
import userdetaills from "./screens/userdetaills.js";
import userdetaills2 from "./screens/userdetaills2.js";
import userdetaills3 from "./screens/userdetaills3.js";
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="CreateUserScreen"
        component={CreateUserScreen}
        //options={{ title: "Create User" }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="UsersList"
        component={UsersList}
        //options={{ title: "Users List" }}
      />

      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        //options={{ title: "User Detail" }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Abount"
        component={Abount}
        options={{ title: "About" }}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ootp"
        component={Ootp}
        options={{ title: "Ootp" }}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="userdetaills"
        component={userdetaills}
        options={{ title: "userdetaills" }}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="userdetaills2"
        component={userdetaills2}
        options={{ title: "userdetaills2" }}
        //options={{ headerShown: false }}
      />      
      <Stack.Screen
        name="userdetaills3"
        component={userdetaills3}
        options={{ title: "userdetaills3" }}
        //options={{ headerShown: false }}
      />      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
