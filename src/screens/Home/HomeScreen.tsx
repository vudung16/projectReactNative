/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import styles from './style'
import { Image, Text, TouchableOpacity, View } from 'react-native';

function HomeScreen(props:any): JSX.Element {
  return (
    <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Image style={{}} source={require('../../assets/icons/back.png')} resizeMode='stretch' />
        </TouchableOpacity>
        <View>
          <Text>Noitro.vnn</Text>
        </View>
      </View>
  );
}

export default HomeScreen;
