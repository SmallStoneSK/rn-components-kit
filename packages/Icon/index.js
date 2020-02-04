import * as React from 'react';

import ICONS from './Icons.json';

import {Surface, Shape} from '@react-native-community/art';

export const Icon = (props = {}) => {

  const {
    type,
    style,
    size = 15,
    color = '#333'
  } = props;

  if(typeof type !== 'string' || !ICONS[type]) {
    console.error(`Icon type "${type}" is not existed.`);
    return null;
  }

  return (
    <Surface style={style} width={size} height={size}>
      {ICONS[type].map((d, index) => (
        <Shape
          d={d}
          key={index}
          fill={color}
          scale={size / 1024}
        />
      ))}
    </Surface>
  );
};
