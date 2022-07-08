import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

import { useParkingContext } from '../context';

const Map = () => {
  const { latitude, longitude, latitudeDelta, longitudeDelta } =
    useParkingContext().parkingInfo.position;

  if (latitude === 0 && longitude === 0 && latitudeDelta === 0 && longitudeDelta === 0)
    return <View />;

  return (
    <MapView
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      }}
      style={styles.map}
    />
  );
};

const styles = StyleSheet.create({
  map: { flex: 1, position: 'absolute', width: '100%', height: '100%' },
});

export default Map;
