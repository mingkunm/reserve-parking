import { useEffect } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, View } from 'react-native';

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
    <View style={{ flex: 1 }}>
      <Map />
      <SafeAreaView style={styles.container}>
        <Main navigation={navigation} />
      </SafeAreaView>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(246, 198, 45, 0.8)',
  },
  background: {
    flex: 1,
  },
});
