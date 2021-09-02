import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import {styles} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const pressBtn = () => {
    Alert.alert('Button Pressed');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../src/assets/images/bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.paragraph}>
          Sign up with one of the following options
        </Text>
        <View style={styles.loginOptionsPanel}>
          <TouchableOpacity style={styles.loginOption} onPress={pressBtn}>
            {/* <Text style={styles.paragraph}>Google</Text> */}
            <Icon name="google" size={30} color="#DDD" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginOption} onPress={pressBtn}>
            {/* <Text style={styles.paragraph}>Apple</Text> */}
            <Icon name="apple" size={30} color="#DDD" />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.formControlTitle}>Name</Text>
            <TextInput
              style={styles.formControl}
              placeholderTextColor="#606060"
              placeholder="John Doe"></TextInput>
          </View>
          <View>
            <Text style={styles.formControlTitle}>Email</Text>
            <TextInput
              style={styles.formControl}
              keyboardType="email-address"
              placeholderTextColor="#606060"
              placeholder="tim@apple.com"></TextInput>
          </View>
          <View>
            <Text style={styles.formControlTitle}>Password</Text>
            <TextInput
              style={styles.formControl}
              placeholderTextColor="#606060"
              placeholder="Pick a strong password"
              secureTextEntry={true}></TextInput>
          </View>
          <View style={styles.formSubmit}>
            <TouchableOpacity onPress={pressBtn}>
              <Text style={{fontSize: 18, textAlign: 'center', color: '#EEE'}}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.paragraph}>Already have an account?</Text>
            <TouchableOpacity style={styles.formHaveAccBtn} onPress={pressBtn}>
              <Text style={{color: '#DDD', marginLeft: 8}}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#161616',
    justifyContent: 'center',
    color: '#DDD',
    padding: 24,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    color: '#606060',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: '10%',
    color: '#DDD',
  },
  loginOptionsPanel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '10%',
    // height: '20',
  },
  loginOption: {
    backgroundColor: '#1D1D1D',
    paddingHorizontal: '15%',
    paddingVertical: '5%',
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 15,
  },
  form: {},
  formControlTitle: {
    marginTop: 10,
    marginBottom: 5,
    color: '#EEE',
  },
  formControl: {
    paddingVertical: '5%',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#333',
    backgroundColor: '#1D1D1D',
    paddingStart: 10,
    color: 'white',
  },
  formSubmit: {
    marginVertical: '10%',
    paddingVertical: '5%',
    backgroundColor: '#BC1BC1',
    borderRadius: 15,
    paddingStart: 10,
    textAlign: 'center',
  },
  formHaveAccBtn: {
    marginStart: 5,
  },
  formLabel: {
    color: '#EEE',
  },
});
