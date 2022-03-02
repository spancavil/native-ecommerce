import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Button,
} from "react-native";

import colors from "../../constants/Colors";

import { auth } from "../../firebase/config";
import { TextInput } from "react-native-gesture-handler";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const AuthScreen = props => {
  const [isSingUp, setIsSingUp] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandlerSign = async () => {
    //Lógica de registro
    if (isSingUp) {
      createUserWithEmailAndPassword(auth, email, password)
      .then (userCredential => {
        console.log(userCredential);
      })
      .catch(error => {
        console.log(error);
        setError(error.message)
      })
    //Logica de login
    } else {
      signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(userCredential);
      })
      .catch(error => {
        console.log(error);
        setError(error.message)
      })
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>TU PANADERIA - {isSingUp? "Registro": "Login"}</Text>
        <View>
          <Text>Email</Text> 
          <TextInput
            keyboardType="email-address"
            required
            autoCapitalize="none"
            onChangeText={(text)=> setEmail(text)}
            value = {email}
            style = {styles.input}
          />
          <Text>Password</Text>
          <TextInput
            keyboardType="default"
            secureTextEntry
            required
            minLength={6}
            autoCapitalize="none"
            errorText="Por favor ingrese un password"
            onChangeText={(text)=> setPassword(text)}
            value = {password}
            style = {styles.input}
          />
          {error && <Text>{error}</Text>}
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <Button
              title={isSingUp ? "REGISTRARME" : "LOGIN"}
              color={colors.primaryColor}
              onPress={onHandlerSign}
            />
          </View>
          <View>
            <Button
              title={!isSingUp ? "No tienes usuario? Registrame" : "Ya tienes usuario? Login"}
              color={colors.accentColor}
              onPress={() => setIsSingUp((prevState) => !prevState)}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#203239"
  },
  title: {
    fontSize: 24,
    marginBottom: 18,
  },
  error: {
    fontSize: 16,
    margin: 8,
    color: 'red',
  },
  container: {
    width: "80%",
    maxWidth: 400,
    height: "50%",
    maxHeight: 400,
    padding: 12,
  },
  footer: {
    marginTop: 42,
  },
  button: {
    marginBottom: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    backgroundColor: "#E0DDAA",
    margin: 10,
  },
});

export default AuthScreen;
