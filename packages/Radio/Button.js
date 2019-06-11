import React from 'react';

import {CheckBox} from '@rn-components-kit/checkbox';

export const Button = props => {
  const {
    animationType = 'size',
    unCheckedIconType = 'circle',
    checkedIconType = 'check-radio',
    ...rest
  } = props;
  return (
    <CheckBox
      animationType={animationType}
      checkedIconType={checkedIconType}
      unCheckedIconType={unCheckedIconType}
      {...rest}
    />
  );
};
