import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

import Main from './layouts/Main';

const backgroundImage = require('./assets/images/bg-map.png');

export default function App() {
  return (
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Main />
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
