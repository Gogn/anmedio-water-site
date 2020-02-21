import React from "react";

const BigBottle = props => (
  <svg width="96" height="130" viewBox="30 30 96 130" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <rect x="30" y="30" width="96" height="120" rx="8" fill="#fff"/>
    </g>
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="30" y="26" width="96" height="130">
      <rect x="30.5" y="26.5" width="95" height="129" rx="7.5" fill="#F5F8FF" stroke="#D5DDE0"/>
    </mask>
    <g mask="url(#mask0)">
      <circle cx="112" cy="40" r="4" fill={props.select}/>
      <path
        d="M138.991 107.169C139.003 105.044 139.003 105.044 138.993 100.055C138.98 93.1587 128.345 100.731 122.249 100.634C116.577 100.542 112.737 100.221 105.637 96.9019C97.0627 92.8944 86.8349 84.277 76.6986 83.4945C68.899 82.893 58.1391 87.8037 48.0221 89.9883C34.2705 92.9579 28.5154 79.7797 17.634 83.7538L17 203L138.456 202.212L138.991 107.169Z"
        fill="#418DE8"/>
      <path
        d="M120.269 170C119.862 170 119.627 169.986 119.627 169.986L96.409 169.987C96.407 169.988 96.1777 170 95.7946 170C89.528 170 82.8315 167.506 82.8315 160.51V109.35C82.8315 100.786 89.6888 95.6366 102.673 94.4425V82.6121H113.386V94.4425C126.37 95.6366 133.23 100.786 133.23 109.35V160.51C133.23 164.267 131.305 167.075 127.666 168.629C124.769 169.866 121.528 170 120.269 170Z"
        fill="#D6FEFD"/>
      <path
        d="M82.8315 113.363V160.51C82.8315 164.35 84.8536 166.826 87.7075 168.285H128.355C131.536 166.679 133.23 164.014 133.23 160.51V113.363H82.8315Z"
        fill="#87E3FF"/>
      <path
        d="M112.724 96.672C114.349 96.664 115.976 96.7971 117.589 97.0422C119.202 97.2815 120.797 97.6765 122.346 98.2265C123.886 98.7953 125.386 99.5328 126.687 100.559C127.336 101.072 127.934 101.65 128.459 102.284C128.965 102.935 129.403 103.636 129.712 104.388C128.831 103.021 127.682 101.885 126.368 100.997C125.048 100.116 123.606 99.4266 122.106 98.8895C120.609 98.3376 119.054 97.9346 117.487 97.5733C115.917 97.2219 114.326 96.9539 112.724 96.672Z"
        fill="white"/>
      <path
        d="M115.105 82.7103C115.105 83.2305 114.661 83.6583 114.122 83.6583H101.94C101.399 83.6583 100.958 83.2305 100.958 82.7103V81.951C100.958 81.4269 101.399 81 101.94 81H114.122C114.661 81 115.105 81.4269 115.105 81.951V82.7103Z"
        fill="#55AAD0"/>
      <path
        d="M134.063 140.591C134.063 141.571 133.217 142.373 132.183 142.373H83.8811C82.8457 142.373 82 141.571 82 140.591V136.196C82 135.217 82.8457 134.414 83.8811 134.414H132.183C133.217 134.414 134.063 135.217 134.063 136.196V140.591Z"
        fill="#55AAD0"/>
      <path
        d="M134.063 113.363C134.063 114.343 133.217 115.144 132.183 115.144H83.8811C82.8457 115.144 82 114.343 82 113.363V108.971C82 107.992 82.8457 107.19 83.8811 107.19H132.183C133.217 107.19 134.063 107.992 134.063 108.971V113.363Z"
        fill="#55AAD0"/>
      <path
        d="M113.418 86.5241H102.644C102.032 86.5241 101.551 87.1624 101.551 87.9764V89.2946C101.551 90.1116 102.032 90.7498 102.644 90.7498H113.418C114.031 90.7498 114.509 90.1116 114.509 89.2946V87.9764C114.509 87.1624 114.031 86.5241 113.418 86.5241Z"
        fill="#BBFBFA"/>
    </g>
    <defs>
      <filter
        id="filter0_d"
        width="156"
        height="190"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="15"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
    {/*Дефолтный текст из SVG: */}
    {/*<path*/}
    {/*  d="M 46.554 43.12 H 47.22 V 55 H 45.312 V 45.37 L 42.9 46.144 L 42.432 44.47 L 46.554 43.12 z M 58.5717 51.904 C 58.5717 52.9 58.1697 53.698 57.3657 54.298 C 56.5737 54.898 55.5417 55.198 54.2697 55.198 C 52.9857 55.198 51.9417 54.898 51.1377 54.298 C 50.3337 53.698 49.9317 52.9 49.9317 51.904 C 49.9317 50.476 50.7897 49.45 52.5057 48.826 C 51.1617 48.094 50.4897 47.14 50.4897 45.964 C 50.4897 45.004 50.8437 44.26 51.5517 43.732 C 52.2717 43.192 53.1777 42.922 54.2697 42.922 C 55.3497 42.922 56.2437 43.192 56.9517 43.732 C 57.6597 44.26 58.0137 45.004 58.0137 45.964 C 58.0137 47.152 57.3417 48.106 55.9977 48.826 C 57.7137 49.462 58.5717 50.488 58.5717 51.904 z M 52.3077 46.036 C 52.3077 46.456 52.4517 46.804 52.7397 47.08 C 53.0397 47.356 53.5437 47.65 54.2517 47.962 C 54.9597 47.662 55.4577 47.374 55.7457 47.098 C 56.0457 46.81 56.1957 46.456 56.1957 46.036 C 56.1957 45.568 56.0157 45.196 55.6557 44.92 C 55.3077 44.632 54.8457 44.488 54.2697 44.488 C 53.6817 44.488 53.2077 44.632 52.8477 44.92 C 52.4877 45.196 52.3077 45.568 52.3077 46.036 z M 56.6457 51.832 C 56.6457 51.316 56.4597 50.902 56.0877 50.59 C 55.7157 50.278 55.1037 49.966 54.2517 49.654 C 53.4117 49.954 52.7997 50.266 52.4157 50.59 C 52.0437 50.914 51.8577 51.328 51.8577 51.832 C 51.8577 52.384 52.0677 52.822 52.4877 53.146 C 52.9197 53.458 53.5137 53.614 54.2697 53.614 C 55.0257 53.614 55.6077 53.458 56.0157 53.146 C 56.4357 52.822 56.6457 52.384 56.6457 51.832 z M 60.8938 58.204 L 61.0738 53.092 H 63.269800000000004 L 62.4238 58.204 H 60.8938 z M 73.4172 47.044 C 73.4172 47.5 73.3452 47.938 73.2012 48.358 C 73.0932 48.694 72.9252 49.06 72.6972 49.456 C 72.5052 49.78 72.1992 50.23 71.7792 50.806 L 68.8272 55 H 66.5592 L 69.4212 50.95 C 69.2652 50.986 69.0912 51.004 68.8992 51.004 C 67.8672 51.004 66.9612 50.62 66.1812 49.852 C 65.4012 49.072 65.0112 48.13 65.0112 47.026 C 65.0112 45.874 65.4252 44.902 66.2532 44.11 C 67.0812 43.318 68.0712 42.922 69.2232 42.922 C 70.3632 42.898 71.3532 43.294 72.1932 44.11 C 73.0332 44.914 73.4412 45.892 73.4172 47.044 z M 70.8612 48.7 C 71.3052 48.256 71.5272 47.698 71.5272 47.026 C 71.5272 46.354 71.3052 45.796 70.8612 45.352 C 70.4052 44.896 69.8592 44.668 69.2232 44.668 C 68.5632 44.668 68.0052 44.896 67.5492 45.352 C 67.1052 45.796 66.8832 46.354 66.8832 47.026 C 66.8832 47.71 67.1052 48.274 67.5492 48.718 C 67.9932 49.162 68.5512 49.384 69.2232 49.384 C 69.8592 49.384 70.4052 49.156 70.8612 48.7 z M 81.354 46.162 H 87.852 V 55 H 85.962 V 47.8 H 83.118 L 83.1 48.682 C 83.04 50.986 82.788 52.636 82.344 53.632 C 81.912 54.616 81.174 55.108 80.13 55.108 C 79.878 55.108 79.65 55.072 79.446 55 V 53.416 C 79.638 53.44 79.758 53.452 79.806 53.452 C 80.334 53.452 80.712 53.056 80.94 52.264 C 81.168 51.472 81.294 50.176 81.318 48.376 L 81.354 46.162 z"*/}
    {/*  fill="#455273"/>*/}
    {/*<path*/}
    {/*  d="M44.53 66.4H44.9V73H43.84V67.65L42.5 68.08L42.24 67.15L44.53 66.4ZM49.4692 73V68.09H50.5192V72.09H52.3392V68.09H53.3892V72.09H55.2092V68.09H56.2592V73H49.4692ZM58.7793 73V69H57.1993V68.09H61.4093V69H59.8293V73H58.7793Z"*/}
    {/*  fill="#BABDC2"/>*/}
    {/*<path*/}
    {/*  d="M44.88 138.896H48.228V140H42.552V139.712L45.372 136.676C45.828 136.196 46.152 135.796 46.344 135.476C46.536 135.156 46.632 134.832 46.632 134.504C46.632 134.096 46.512 133.764 46.272 133.508C46.032 133.244 45.712 133.112 45.312 133.112C44.912 133.112 44.588 133.248 44.34 133.52C44.092 133.792 43.968 134.136 43.968 134.552C43.968 134.696 43.988 134.9 44.028 135.164H42.744C42.688 134.964 42.66 134.736 42.66 134.48C42.66 133.8 42.908 133.208 43.404 132.704C43.9 132.2 44.54 131.948 45.324 131.948C46.076 131.948 46.7 132.184 47.196 132.656C47.7 133.128 47.952 133.712 47.952 134.408C47.952 134.952 47.808 135.444 47.52 135.884C47.264 136.292 46.848 136.804 46.272 137.42L44.88 138.896ZM51.7472 138.896H55.0952V140H49.4192V139.712L52.2392 136.676C52.6952 136.196 53.0192 135.796 53.2112 135.476C53.4032 135.156 53.4992 134.832 53.4992 134.504C53.4992 134.096 53.3792 133.764 53.1392 133.508C52.8992 133.244 52.5792 133.112 52.1792 133.112C51.7792 133.112 51.4552 133.248 51.2072 133.52C50.9592 133.792 50.8352 134.136 50.8352 134.552C50.8352 134.696 50.8552 134.9 50.8952 135.164H49.6112C49.5552 134.964 49.5272 134.736 49.5272 134.48C49.5272 133.8 49.7752 133.208 50.2712 132.704C50.7672 132.2 51.4072 131.948 52.1912 131.948C52.9432 131.948 53.5672 132.184 54.0632 132.656C54.5672 133.128 54.8192 133.712 54.8192 134.408C54.8192 134.952 54.6752 135.444 54.3872 135.884C54.1312 136.292 53.7152 136.804 53.1392 137.42L51.7472 138.896ZM56.4664 135.968C56.4664 134.76 56.7224 133.792 57.2344 133.064C57.7464 132.32 58.4984 131.948 59.4904 131.948C60.4824 131.948 61.2304 132.316 61.7344 133.052C62.2464 133.78 62.5024 134.752 62.5024 135.968C62.5024 137.2 62.2424 138.204 61.7224 138.98C61.2104 139.748 60.4664 140.132 59.4904 140.132C58.5144 140.132 57.7664 139.744 57.2464 138.968C56.7264 138.192 56.4664 137.192 56.4664 135.968ZM61.1824 135.98C61.1824 134.068 60.6184 133.112 59.4904 133.112C58.3544 133.112 57.7864 134.068 57.7864 135.98C57.7864 137.972 58.3544 138.968 59.4904 138.968C60.6184 138.968 61.1824 137.972 61.1824 135.98ZM67.7977 140V138.572H66.8377V137.516H67.7977V136.592H66.8377V135.5H67.7977V132.08H70.6417C71.3857 132.08 71.9857 132.284 72.4417 132.692C72.8977 133.1 73.1257 133.648 73.1257 134.336C73.1257 135.008 72.8937 135.552 72.4297 135.968C71.9737 136.384 71.3777 136.592 70.6417 136.592H69.0697V137.516H72.1777V138.572H69.0697V140H67.7977ZM69.0697 135.5H70.5817C70.9737 135.5 71.2857 135.396 71.5177 135.188C71.7497 134.98 71.8657 134.7 71.8657 134.348C71.8657 133.988 71.7497 133.704 71.5177 133.496C71.2937 133.28 70.9817 133.172 70.5817 133.172H69.0697V135.5Z"*/}
    {/*  fill="white"/>*/}
    <text fill='#455273' fontFamily='Cera Pro' fontWeight='600' fontSize='18px' x="40.7829" y="55.6657"
          id="e1_texte">{props.capacity} л
    </text>
    <text fill='#BABDC2' fontFamily='Cera Pro' fontWeight='600' fontSize='10px' x="41.2445" y="73.2472"
          id="e2_texte">{props.amount} шт
    </text>
    <text fill='#fff' fontFamily='Cera Pro' fontWeight='600' fontSize='12px' x="42.1359" y="140.327"
          id="e3_texte">{props.price} ₽
    </text>
  </svg>
);

export default BigBottle;
