import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

import Main from '../containers/Main';
import ParkingContextProvider from '../context';

const backgroundImage = require('../assets/images/bg-map.png');

export default function App({ navigation }) {
  return (
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
      <SafeAreaView style={styles.container}>
        <ParkingContextProvider>
          <Main navigation={navigation} />
        </ParkingContextProvider>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});
