import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './style';

export default function Login() {
  const [text, setText] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = () => {
    Alert.alert('Successfuly Login');
  };
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.emailAndPasswordInput}
        placeholder={'email'}
        onChangeText={setText}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.emailAndPasswordInput}
        placeholder={'password'}
        onChangeText={setPassword}
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#DDDDDD',
          padding: 10,
        }}
        onPress={handleSubmit}>
        <Text> Login </Text>
      </TouchableOpacity>
    </View>
  );
}
