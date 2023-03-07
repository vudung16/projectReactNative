import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawnerNavigation from '@navigators/Drawner';
import { DrawerActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './style';


function HomeScreen(props: any): JSX.Element {
    return (
      <ScrollView>
        <View style={styles.bannerHeader}>
        <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons style={styles.reorderThree} name="reorder-three" />
        </TouchableOpacity>
        </View>

      </ScrollView>
    );
}

export default HomeScreen;