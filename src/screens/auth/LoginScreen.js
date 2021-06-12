import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {baseAPI} from '../../config/baseApi';
import {saveToken} from '../../redux/slice/authSlice';
export default function Login() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const _onChangeTextUsername = value => {
    setUsername(value);
  };

  const _onChangeTextPassword = value => {
    setUsername(value);
  };

  const onLogin = () => {
    setLoading(true);
    baseAPI
      .post('/auth/login', {
        email: username,
        password: password,
      })
      .then(res => {
        setLoading(false);
        const token = res.data.token;
        dispatch(saveToken(token));
        console.log('response = ', res);
      })
      .catch(err => {
        setLoading(false);
        console.log('errrr ', err);
      });
  };

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={{flex: 1, marginTop: 200, marginHorizontal: 20}}>
      <Text>Username:</Text>
      <TextInput
        placeholder="Please input username"
        placeholderTextColor="gray"
        style={styles.textInput}
        onChangeText={_onChangeTextUsername}
      />

      <Text style={{marginTop: 16}}>Password:</Text>
      <TextInput
        placeholder="Please input your password"
        placeholderTextColor="gray"
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={_onChangeTextPassword}
      />

      <TouchableOpacity style={styles.loginBottom} onPress={onLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 8,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 4,
  },
  loginBottom: {
    backgroundColor: 'orange',
    alignSelf: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginTop: 30,
  },

  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
