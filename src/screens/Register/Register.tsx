/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import styles from './style'
import { Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import {Back} from '../../../src/components/index';

function Register(props:any): JSX.Element {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [pwdHidden, setPwdHidden] = useState(true);
  const [rePwdHidden, setRePwdHidden] = useState(true);
  return (
    <View style={styles.sectionContainer}>
      <Back data={props}/>
      <View style={styles.body}>
        <Text style={styles.textLogin}>Đăng Ký</Text>
        <Image style={{width: 60, height: 60}} source={require('../../assets/icons/vmdung1-logo.png')} resizeMode='stretch' />

        {/* Mail */}
        <View style={styles.viewInput}>
          <Image style={styles.iconInput} source={require('../../assets/icons/mail.png')} resizeMode='stretch' />
          <TextInput 
            style={styles.textInput} 
            placeholder='Email' 
            placeholderTextColor="#C7C3C3"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
        </View>

        {/* Phone */}
        <View style={styles.viewInput}>
          <Image style={styles.iconInput} source={require('../../assets/icons/phone.png')} resizeMode='stretch' />
          <TextInput 
            style={styles.textInput} 
            placeholder='Số điện thoại' 
            placeholderTextColor="#C7C3C3"
            keyboardType="numeric"
            maxLength={10}
            onChangeText={setPhone}
            value={phone}
          />
        </View>

        {/* Password*/}
        <View style={styles.viewInput}>
          <Image style={styles.iconInput} source={require('../../assets/icons/pass.png')} resizeMode='stretch' />
          <TextInput 
            style={styles.textInput} 
            secureTextEntry={pwdHidden ? true : false} 
            placeholder='Password' 
            placeholderTextColor="#C7C3C3" 
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity style={styles.showPassword} onPress={() => setPwdHidden(!pwdHidden)}>
            <Image style={styles.iconInput} source={pwdHidden ? require('../../assets/icons/eyes-hide.png') : require('../../assets/icons/eyes-show.png')} resizeMode='stretch' />
          </TouchableOpacity>
        </View>
        
        {/* Retype Password*/}
        <View style={styles.viewInput}>
          <Image style={styles.iconInput} source={require('../../assets/icons/pass.png')} resizeMode='stretch' />
          <TextInput 
            style={styles.textInput} 
            secureTextEntry={rePwdHidden ? true : false} 
            placeholder='Nhập lại Password' 
            placeholderTextColor="#C7C3C3" 
            onChangeText={setRePassword}
            value={rePassword}
          />
          <TouchableOpacity style={styles.showPassword} onPress={() => setRePwdHidden(!rePwdHidden)}>
            <Image style={styles.iconInput} source={rePwdHidden ? require('../../assets/icons/eyes-hide.png') : require('../../assets/icons/eyes-show.png')} resizeMode='stretch' />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.textBtnLogin}>Đăng Ký</Text>
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
            <Image source={require('../../assets/icons/facebook.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={require('../../assets/icons/instagram.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Instagram</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Btns}>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={require('../../assets/icons/google.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={require('../../assets/icons/tiktok.png')} resizeMode='contain' />
            <Text style={{color: 'black', fontWeight: '500', paddingLeft: 10}}>Tiktok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Register;
