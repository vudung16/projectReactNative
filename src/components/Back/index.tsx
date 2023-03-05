/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import styles from './style'
import { Text, TouchableOpacity, View, Image} from 'react-native';

function Back(props:any): JSX.Element {
  return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnBack} onPress={() => props.data.navigation.navigate('Home')}>
          <Image style={styles.iconBack} source={require('assets/icons/back.png')} resizeMode='stretch' />
          <Text style={styles.textBack}>Quay lại</Text>
        </TouchableOpacity>
      </View>
  );
}

export default Back;
