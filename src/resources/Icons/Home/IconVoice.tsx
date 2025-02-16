import * as React from 'react';
import Svg, { Circle, Defs, G, Path } from 'react-native-svg';

function IconVoice(props) {
  return (
    <Svg
      width={49}
      height={49}
      viewBox='0 0 49 49'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <G filter='url(#filter0_d_10_6807)'>
        <Circle cx={24.5} cy={20.5} r={20.5} fill='#fff' />
        <Path
          d='M29.586 11.9c0-2.455-2.054-4.445-4.587-4.445s-4.586 1.99-4.586 4.446v8.257c0 2.456 2.053 4.446 4.586 4.446 2.533 0 4.587-1.99 4.587-4.446v-8.257z'
          fill='#fff'
        />
        <Path
          d='M25 7.955c2.27 0 4.086 1.78 4.086 3.946h1c0-2.746-2.292-4.946-5.087-4.946v1zm4.086 3.946v8.257h1v-8.257h-1zm0 8.257c0 2.165-1.815 3.946-4.087 3.946v1c2.795 0 5.087-2.2 5.087-4.946h-1zm-4.087 3.946c-2.272 0-4.086-1.781-4.086-3.946h-1c0 2.746 2.292 4.946 5.086 4.946v-1zm-4.086-3.946v-8.257h-1v8.257h1zm0-8.257c0-2.165 1.814-3.946 4.086-3.946v-1c-2.794 0-5.086 2.2-5.086 4.946h1z'
          fill='#000'
        />
        <Path
          d='M16.424 19.114c0 4.72 3.84 8.546 8.575 8.546m0 0c4.736 0 8.575-3.826 8.575-8.546m-8.575 8.546v3.419'
          stroke='#000'
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <Path
          d='M25.497 15.52c0-.31.25-.561.56-.561h3.923v1.12h-3.923a.56.56 0 01-.56-.56zM25.497 13.278c0-.31.25-.56.56-.56h3.923v1.12h-3.923a.56.56 0 01-.56-.56zM25.497 11.037c0-.31.25-.56.56-.56h3.923v1.12h-3.923a.56.56 0 01-.56-.56z'
          fill='#000'
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default IconVoice;
