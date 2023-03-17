import React, {useState, useEffect} from 'react';
import { Dimensions, Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import ApiHome from '@api/Home'
import Carousel from 'react-native-reanimated-carousel';
import styles from './style';
import {ProSlide} from '@base/type'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const width = Dimensions.get('window').width;

function Slide() : JSX.Element {
  const [slides, setSlides] = useState<ProSlide[]>([]);
  const listSlide = async () => {
    await ApiHome.getSlide().then((res) => {
      const dataSlide = res.slide;
      console.log(dataSlide);
      setSlides(dataSlide);
    });
  }

  useEffect(() => { listSlide(); }, []);

  return (
    <View style={{ flex: 1 }}>
      <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={slides}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={(info: { item: ProSlide, index: number }) => (
              <View>
                <Image source={{uri: info.item.image}} style={{height: 200, width: '100%'}}/>
              </View>
          )}
      />
    </View>
  );
  
}
const HomeScreen = (props: any) => {
    return (
      <ScrollView>
        <View style={styles.banner}>
          <View style={styles.bannerHeader}>
            <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons style={styles.reorderThree} name="reorder-three" />
            </TouchableOpacity>
          </View>
          <View>
            <Slide />
          </View>
        </View>
      </ScrollView>
    );
}

export default HomeScreen;