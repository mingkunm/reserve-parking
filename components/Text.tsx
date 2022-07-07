import * as React from 'react';
import { Text as RCText } from 'react-native';
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_800ExtraBold,
  Rubik_900Black,
} from '@expo-google-fonts/rubik';

interface TextProps {
  children: string;
  weight: '300' | '400' | '500' | '600' | '700' | '800' | '900';
  size: number;
}

const Text: React.FunctionComponent<TextProps> = ({ children, weight, size }) => {
  /* @info */ const [loaded] = useFonts({
    300: Rubik_300Light,
    400: Rubik_400Regular,
    500: Rubik_500Medium,
    600: Rubik_600SemiBold,
    700: Rubik_700Bold,
    800: Rubik_800ExtraBold,
    900: Rubik_900Black,
  });
  /* @end */

  if (!loaded) {
    return null;
  }

  return (
    <>
      <RCText style={{ fontFamily: weight, fontSize: size }}>{children}</RCText>
    </>
  );
};

export default Text;
