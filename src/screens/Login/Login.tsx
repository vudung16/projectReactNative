/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import styles from './style'
import { Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import { Back } from "@components/index";

function Login(props:any): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwdHidden, setPwdHidden] = useState(true);
  return (
    <View style={styles.sectionContainer}>
      <Back data={props}/>
      <View style={styles.body}>
        <Text style={styles.textLogin}>Đăng nhập</Text>
        <Image style={{width: 60, height: 60}} source={require('../../assets/icons/vmdung1-logo.png')} resizeMode='stretch' />

        {/* Mail */}
        <View style={styles.viewInput}>
          <Image style={styles.iconInput} source={require('@assets/icons/mail.png')} resizeMode='stretch' />
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
          <Image style={styles.iconInput} source={require('@assets/icons/pass.png')} resizeMode='stretch' />
          <TextInput 
            style={styles.textInput} 
            secureTextEntry={pwdHidden ? true : false} 
            placeholder='Password' 
            placeholderTextColor="#C7C3C3" 
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity style={styles.showPassword} onPress={() => setPwdHidden(!pwdHidden)}>
            <Image style={styles.iconInput} source={pwdHidden ? require('@assets/icons/eyes-hide.png') : require('@assets/icons/eyes-show.png')} resizeMode='stretch' />
          </TouchableOpacity>
        </View>

        <View style={styles.forgot}>
          <Text style={styles.textForgot}>Quên mật khẩu ?</Text>
        </View>
        
        <TouchableOpacity style={styles.btnLogin} onPress={() => props.navigation.navigate('Home')}>
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
            <Image source={require('@assets/icons/facebook.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={require('@assets/icons/instagram.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Instagram</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Btns}>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={require('@assets/icons/google.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={require('@assets/icons/tiktok.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Tiktok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
