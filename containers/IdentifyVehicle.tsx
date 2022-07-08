import { FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Text from '../components/Text';
import { Camera } from '../components/Icons';

const IdentifyVehicle: FunctionComponent = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Camera />
      <View style={styles.textContainer}>
        <Text weight="900" size={18} style={styles.text}>
          Identify your vehicle
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  button: {
    marginTop: 28,
    backgroundColor: 'black',
    height: 60,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    shadowColor: 'rgba(0, 0, 0)',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.13,
    shadowRadius: 12,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});

export default IdentifyVehicle;
