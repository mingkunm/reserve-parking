import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/Main';
import CameraScreen from './screens/Camera';
import { Screens } from './types';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.Main}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Screens.Main} component={MainScreen} />
        <Stack.Screen name={Screens.Camera} component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
