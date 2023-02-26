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
  Button
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
          <TextInput 
            style={styles.textInput} 
            placeholder='Email' 
            placeholderTextColor="#C7C3C3" 
            onChangeText={setEmail}
            value={email}
          />
        </View>

        {/* Password*/}
        <View style={styles.viewInput}>
          <Image style={styles.iconInput} source={require('../assets/icons/pass.png')} resizeMode='stretch' />
          <TextInput 
            style={styles.textInput} 
            secureTextEntry={pwdHidden ? true : false} 
            placeholder='Password' 
            placeholderTextColor="#C7C3C3" 
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity style={styles.showPassword} onPress={() => setPwdHidden(!pwdHidden)}>
            <Image style={styles.iconInput} source={pwdHidden ? require('../assets/icons/eyes-hide.png') : require('../assets/icons/eyes-show.png')} resizeMode='stretch' />
          </TouchableOpacity>
        </View>

        <View style={styles.forgot}>
          <Text style={styles.textForgot}>Quên mật khẩu ?</Text>
        </View>
        
        <TouchableOpacity style={styles.btnLogin} onPress={() => setPwdHidden(!pwdHidden)}>
          <Text style={styles.textBtnLogin}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerLogin}>
        <View style={styles.orLoginWith}>
          <View style={{height: 1, width: '30%', backgroundColor: '#707070'}}></View>
          <Text style={{color: '#000000', paddingHorizontal: 10}}>hoặc đăng nhập với</Text>
          <View style={{height: 1, width: '30%', backgroundColor: '#707070'}}></View>
        </View>

        <View style={styles.Btns}>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={require('../assets/icons/facebook.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={require('../assets/icons/instagram.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Instagram</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Btns}>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={require('../assets/icons/google.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={require('../assets/icons/tiktok.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Tiktok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#EEE9E9'
  },
  highlight: {
    fontWeight: '800',
    color: 'white',
    fontSize: 40,
  },
  header: {
    width: '100%',
    // backgroundColor: '#4D8D6E',
  },
  body: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    textAlign: 'center',
    color: '#d82e4d',
    fontSize: 30,
    fontWeight: '500',
    padding: 30,
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
    color: 'black',
  },
  showPassword: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1
  },
  forgot: {
    width: '100%',
  },
  textForgot: {
    textAlign: 'right',
    paddingRight: 35,
    paddingTop: 5,
    color: '#4C57F2'
  },
  btnLogin: {
    width: windowWidth - 60,
    height: 50,
    borderRadius: 20,
    margin: 35,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d82e4d',
    elevation: 10,
  },
  textBtnLogin: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 500
  },
  footerLogin: {
    width: '100%',
    paddingHorizontal: 30,
  },
  orLoginWith: {
    width: '100%',
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Btns: {
    flexDirection: 'row',
  },
  iconBtn: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center'
  }
});

export default Login;
