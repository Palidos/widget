import React from 'react';

// MessageBubbleIcon component
export default ({ className }) => (
  <div className={className}>
    <svg
      width='30'
      height='27'
      viewBox='0 0 30 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19 2H11C6.58172 2 3 5.58172 3 10C3 14.4183 6.58172 18 11 18H19C23.4183 18 27 14.4183 27 10C27 5.58172 23.4183 2 19 2ZM29 10C29 4.47715 24.5228 0 19 0H11C5.47715 0 1 4.47715 1 10C1 15.5228 5.47715 20 11 20H15.8046L17.092 21L20.2414 23.4464L22.2414 25V22.4675V21V19.463C26.1733 18.1165 29 14.3883 29 10Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_d'
          x='0'
          y='0'
          width='30'
          height='27'
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
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
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
