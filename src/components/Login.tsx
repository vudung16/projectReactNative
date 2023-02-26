/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwdHidden, setPwdHidden] = useState(true);
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={{}} source={require('../assets/icons/back.png')} resizeMode='stretch' />
        </TouchableOpacity>
        <View style={styles.logo}>
          <Text style={styles.highlight}>Noitro.vn</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.textLogin}>Đăng nhập</Text>

        {/* Mail */}
        <View style={styles.viewInput}>
          <Image style={styles.iconInput} source={require('../assets/icons/mail.png')} resizeMode='stretch' />
          <TextInput style={styles.textInput} placeholder='Email' placeholderTextColor="#C7C3C3" />
        </View>

        {/* Password*/}
        <View style={styles.viewInput}>
          <Image style={styles.iconInput} source={require('../assets/icons/pass.png')} resizeMode='stretch' />
          <TextInput style={styles.textInput} secureTextEntry={pwdHidden ? true : false} placeholder='Password' placeholderTextColor="#C7C3C3" />
          <TouchableOpacity style={styles.showPassword} onPress={() => setPwdHidden(!pwdHidden)}>
            <Image style={styles.iconInput} source={pwdHidden ? require('../assets/icons/eyes-hide.png') : require('../assets/icons/eyes-show.png')} resizeMode='stretch' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: Colors.lighter
  },
  highlight: {
    fontWeight: '800',
    color: '#d82e4d',
    fontSize: 40,
  },
  header: {
    width: '100%',
    height: '20%',
    backgroundColor: '#4D8D6E',
  },
  body: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    backgroundColor: '#EEE9E9'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
    padding: 30
  },
  viewInput: {
    width: windowWidth - 60,
    height: 50,
    borderRadius: 20,
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
  },
  iconInput: {
    marginLeft: 10,
    width: 25,
    height: 25
  },
  textInput: {
    height: '100%',
    flex: 1,
    paddingLeft: 20,
    color: 'black'
  },
  showPassword: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1
  }
});

export default Login;
