import { FunctionComponent, useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import { Camera } from 'expo-camera';

import Text from '../components/Text';
import { Camera as CameraIcon } from '../components/Icons';

const IdentifyVehicle: FunctionComponent = () => {
  const [hasPermission, setHasPermission] = useState(false);

  const handleClick = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');

    if (hasPermission) {
      // TODO:
    } else if (status === 'denied') {
      Alert.alert(
        'Permission request',
        'We need you allow us to access your Camera to identify your vehicle.',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Settings',
            onPress: () => void Linking.openSettings(),
          },
        ]
      );
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <CameraIcon />
      <View style={styles.textContainer}>
        <Text weight="900" size={18} style={styles.text}>
          Identify your vehicle
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 28,
    marginBottom: 30,
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
