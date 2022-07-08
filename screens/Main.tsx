import { useEffect } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Main from '../containers/Main';
import Map from '../containers/Map';
import { useParkingContext } from '../context';

import { parkingInfo } from '../mock';
const backgroundImage = require('../assets/images/bg-map.png');

export default function App({ navigation }) {
  const { setParkingInfo } = useParkingContext();

  // Initialize parking data
  useEffect(() => {
    setParkingInfo(parkingInfo);
  }, []);

  return (
    // <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
    <View style={styles.container}>
      <Map />
      <LinearGradient
        colors={['rgba(246, 198, 45, 0.8)', 'rgba(246, 198, 45, 1)']}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
          <Main navigation={navigation} />
        </SafeAreaView>
      </LinearGradient>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
