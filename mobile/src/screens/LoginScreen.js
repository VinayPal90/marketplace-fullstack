import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import API from '../api/axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert("Error", "Please fill all fields");
    }

    setLoading(true);
    try {
      const { data } = await API.post('/auth/login', { email, password });
      // Successful login
      setLoading(false);
      navigation.navigate('Home');
    } catch (err) {
      setLoading(false);
      console.log("Login Error:", err);
      Alert.alert("Login Failed", err.response?.data?.message || "Check your IP address and Backend.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MicroMarket</Text>
      <Text style={styles.subTitle}>Welcome back, please login</Text>

      <TextInput 
        placeholder="Email Address" 
        style={styles.input} 
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail} 
      />

      <TextInput 
        placeholder="Password" 
        style={styles.input} 
        secureTextEntry 
        onChangeText={setPassword} 
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>

      {/* Register Link Section */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('Register')} 
        style={styles.registerLink}
      >
        <Text style={styles.linkText}>
          Don't have an account? <Text style={styles.boldText}>Register Now</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 25, 
    backgroundColor: '#fff' 
  },
  logo: { 
    fontSize: 36, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#2563eb',
    marginBottom: 5 
  },
  subTitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
    fontSize: 16
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#e2e8f0', 
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 15,
    backgroundColor: '#f8fafc'
  },
  button: { 
    backgroundColor: '#2563eb', 
    padding: 18, 
    borderRadius: 12,
    marginTop: 10,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    elevation: 5
  },
  buttonText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 16
  },
  registerLink: { 
    marginTop: 25 
  },
  linkText: { 
    color: '#64748b', 
    textAlign: 'center',
    fontSize: 14
  },
  boldText: { 
    color: '#2563eb', 
    fontWeight: 'bold' 
  }
});

export default LoginScreen;