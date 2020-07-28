import React from 'react';

// CrossIcon component
export default ({ className }) => (
  <div className={className}>
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d)'>
        <rect
          width='1.40404'
          height='26.6768'
          rx='0.702022'
          transform='matrix(0.712227 -0.701949 0.712227 0.701949 1 0.985474)'
          fill='white'
        />
        <rect
          width='1.40404'
          height='26.6768'
          rx='0.702022'
          transform='matrix(0.712227 0.701949 -0.712227 0.701949 19.9999 0.288635)'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_d'
          x='0.292847'
          y='0.288574'
          width='21.4142'
          height='21.4228'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood
            floodOpacity='0'
            result='BackgroundImageFix'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='0.5' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
        </filter>
      </defs>
    </svg>

  </div>
);
