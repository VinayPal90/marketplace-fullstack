import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import API from '../api/axios';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleRegister = async () => {
    try {
      await API.post('/auth/register', formData);
      Alert.alert("Success", "Account created! Please login.");
      navigation.navigate('Login');
    } catch (err) {
      Alert.alert("Error", err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput 
        placeholder="Full Name" 
        style={styles.input} 
        onChangeText={(text) => setFormData({...formData, name: text})} 
      />
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        onChangeText={(text) => setFormData({...formData, email: text})} 
      />
      <TextInput 
        placeholder="Password" 
        style={styles.input} 
        secureTextEntry 
        onChangeText={(text) => setFormData({...formData, password: text})} 
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop: 20 }}>
        <Text style={{ color: '#2563eb', textAlign: 'center' }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#10b981' },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 15, borderRadius: 10, marginBottom: 15 },
  button: { backgroundColor: '#10b981', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' }
});

export default RegisterScreen;