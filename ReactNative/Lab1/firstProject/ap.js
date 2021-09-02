import React from ‘react’;
import {View, TextInput,Text} from ‘react-native’;
Class App extends React.Components{
    constructor(pros){
        super(props){
        text='email'
        }
    }
// state = {text : 'email'}
 this.setState({ text: text})
 render(){
return(


 <View>
      <TextInput
        style={{
          width: '90%',
          height: 40,
          margin: 10,
          borderWidth: 1,
          borderColor: 'gray',
        }}
        // value={text}
        placeholder={'Email'}
        onChangeText={this.setState(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={{
          width: '90%',
          height: 40,
          margin: 10,
          borderWidth: 1,
          borderColor: 'gray',
        }}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
    </View>
)
 }}
export default App;
