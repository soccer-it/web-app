import React from 'react';

// Styles
import { placeholderShirt } from './PlaceholderShirt.scss'

function PlaceholderShirt() {
  return (
    <svg className={placeholderShirt} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 240 204.75">
      <path
        d="M153.37,6.36,142.78.81a7,7,0,1,0-6.57,12.41l10.6,5.55a6.79,6.79,0,0,0,3.28.79,7,7,0,0,0,3.28-13.2"
        transform="translate(0 0)"
        fill-rule="evenodd"
      />
      <path
        d="M86.63,6.36,97.22.81a7,7,0,1,1,6.57,12.41l-10.6,5.55a6.79,6.79,0,0,1-3.28.79,7,7,0,0,1-3.28-13.2"
        transform="translate(0 0)"
        fill-rule="evenodd"
      />
      <path
        d="M237.87,60.6,197.33,21.14A50.12,50.12,0,0,0,162.22,6.87H77.81A50.05,50.05,0,0,0,42.7,21.14L2.11,60.6a7,7,0,0,0-.28,9.7l26.53,29a7.11,7.11,0,0,0,9.51.84L54.33,87.41,56,197.85a7,7,0,0,0,7,6.9H177a7,7,0,0,0,7-6.9l1.68-110.44,16.46,12.69a7.06,7.06,0,0,0,9.51-.84l26.53-29a7.06,7.06,0,0,0-.38-9.7"
        transform="translate(0 0)"
        fill-rule="evenodd"
      />
    </svg>
  );
}

export default PlaceholderShirt;
