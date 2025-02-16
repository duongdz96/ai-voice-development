import * as React from 'react';
import Svg, {
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
} from 'react-native-svg';

function IconSettingHeader(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Mask
        id='a'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={22}
        height={22}>
        <Path
          fill='#D9D9D9'
          d='M0.907227 0.90625H21.093227V21.09225H0.907227z'
        />
      </Mask>
      <G mask='url(#a)'>
        <Path
          d='M8.687 19.41l-.336-2.69a3.195 3.195 0 01-.515-.253 6.976 6.976 0 01-.473-.316L4.86 17.203l-2.313-3.995 2.166-1.64a2.009 2.009 0 01-.02-.284v-.568c0-.091.006-.186.02-.284l-2.166-1.64L4.86 4.797l2.503 1.051a5.73 5.73 0 01.483-.315c.168-.098.337-.183.505-.253l.336-2.691h4.626l.337 2.691c.182.07.354.155.515.253.161.098.319.203.473.315l2.502-1.051 2.313 3.995-2.166 1.64c.014.098.021.193.021.284v.568c0 .09-.014.185-.042.284l2.166 1.64-2.313 3.995-2.481-1.052a5.75 5.75 0 01-.484.316 4.24 4.24 0 01-.504.252l-.337 2.692H8.687zm1.472-1.682h1.661l.295-2.229a4.712 4.712 0 001.209-.494c.371-.217.711-.48 1.02-.788l2.081.862.82-1.43-1.808-1.367c.07-.196.12-.403.147-.62a5.178 5.178 0 000-1.325 2.972 2.972 0 00-.147-.62l1.808-1.367-.82-1.43-2.081.884a4.673 4.673 0 00-1.02-.81 4.715 4.715 0 00-1.21-.494l-.273-2.229h-1.66L9.885 6.5a4.715 4.715 0 00-1.21.494c-.37.217-.71.48-1.019.789L5.575 6.92l-.82 1.43 1.809 1.346c-.07.21-.12.42-.148.63a5.095 5.095 0 000 1.326c.028.21.077.42.148.63L4.755 13.65l.82 1.43 2.082-.883a4.67 4.67 0 001.02.81c.371.217.774.381 1.209.493l.273 2.23zm.883-3.785c.813 0 1.507-.287 2.082-.862A2.836 2.836 0 0013.986 11c0-.813-.287-1.507-.862-2.082a2.836 2.836 0 00-2.082-.862c-.827 0-1.524.287-2.092.862A2.854 2.854 0 008.1 11c0 .813.283 1.507.851 2.081.568.575 1.265.863 2.092.863z'
          fill='url(#paint0_linear_10_6878)'
        />
      </G>
      <Defs>
        <LinearGradient
          id='paint0_linear_10_6878'
          x1={11.0003}
          y1={2.58887}
          x2={11.0003}
          y2={19.4106}
          gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#F59195' />
          <Stop offset={1} stopColor='#A245B8' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default IconSettingHeader;
