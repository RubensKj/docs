import React from 'react';

import { IconType } from '../../../core/Assets/IconType';

const Justify: React.FC<IconType> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="21" y1="10" x2="3" y2="10"></line>
      <line x1="21" y1="6" x2="3" y2="6"></line>
      <line x1="21" y1="14" x2="3" y2="14"></line>
      <line x1="21" y1="18" x2="3" y2="18"></line>
    </svg>
  );
}

export default Justify;