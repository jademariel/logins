// SignUp.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignUp({ navigation }) {
  return (
    <LinearGradient colors={['#9fa5d5', '#e8f5c8']} style={styles.container}>
      {/* Logo Image */}
      <Image source={require('../assets/logow.png')} style={styles.logo} />

      <Text style={styles.title}>Create Account</Text>
      <TextInput placeholder="First Name" style={styles.input} placeholderTextColor="#666666" />
      <TextInput placeholder="Last Name" style={styles.input} placeholderTextColor="#666666" />
      <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#666666" />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor="#666666" />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} placeholderTextColor="#666666" />

      <TouchableOpacity style={[styles.button, { alignSelf: 'center' }]} onPress={() => alert("Account created!")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignSelf: 'center', marginTop: 10 }} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login here</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#54473F',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#54473F',
    padding: 12,
    marginVertical: 10,
    borderRadius: 30,
    color: '#333333',
  },
  button: {
    backgroundColor: '#9fa5d5',
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  linkText: {
    color: '#54473F',
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline', 
  },
});
