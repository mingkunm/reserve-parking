import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props) => (
  <Svg width={12} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M5.995 1A4.998 4.998 0 0 0 1 6c0 2.76 2.235 5 4.995 5A5.003 5.003 0 0 0 11 6c0-2.76-2.24-5-5.005-5ZM6 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Z"
      fill="#F6C62D"
    />
    <Path d="M6.25 3.5H5.5v3l2.625 1.575.375-.615-2.25-1.335V3.5Z" fill="#F6C62D" />
  </Svg>
);

export default SvgComponent;
