import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAuthAction = () => {
    if (isLogin) {
      // Perform login validation and action here
      Alert.alert('Login Successful', `Welcome ${email}`);
    } else {
      // Perform registration validation
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match!');
        return;
      }
      Alert.alert('Registration Successful', `Welcome ${email}`);
    }
  };
  return (
    <LinearGradient colors={['#6a11cb', '#2575fc']} style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>{isLogin ? 'Login' : 'Register'}</Text>

        <TextInput
          cursorColor={'#FFF'}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          cursorColor={'#FFF'}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {!isLogin && (
          <TextInput
            cursorColor={'#FFF'}
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#ccc"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        )}

        <TouchableOpacity onPress={handleAuthAction} style={styles.button}>
          <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Register'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.switchTextContainer}>
          <Text style={styles.switchText}>
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#2575fc',
    fontWeight: 'bold',
  },
  switchTextContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  switchText: {
    color: '#fff',
    fontSize: 16,
  },
})