import React, {useEffect } from 'react';
import { Dimensions, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import ApiHome from '@api/Home'
import Carousel from 'react-native-reanimated-carousel';
import styles from './style';

const width = Dimensions.get('window').width;

function HomeScreen(props: any):JSX.Element {
  async function name() {
    return await ApiHome.getSlide()
  }
  // let res = ApiHome.getSlide()
  console.log(name());
    return (
      <ScrollView>
        <View style={styles.banner}>
          <View style={styles.bannerHeader}>
            <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons style={styles.reorderThree} name="reorder-three" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
              <Carousel
                  loop
                  width={width}
                  height={width / 2}
                  autoPlay={true}
                  data={[...new Array(6).keys()]}
                  scrollAnimationDuration={2000}
                  renderItem={({ index }) => (
                      <View
                          style={{
                              flex: 1,
                              justifyContent: 'center',
                          }}
                      >
                          <Text style={{ textAlign: 'center', fontSize: 30 }}>
                              {index}
                          </Text>
                      </View>
                  )}
              />
          </View>
        </View>
      </ScrollView>
    );
}

export default HomeScreen;