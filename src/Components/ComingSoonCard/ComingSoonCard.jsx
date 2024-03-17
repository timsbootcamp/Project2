import React, { useState } from 'react';
import './index.css'; 

const ComingSoonCard = ({ onSelectCategory }) => {
  const handleSelectCategory = () => {
    onSelectCategory(''); 
  };

    return (
      <button onClick={handleSelectCategory}>
      <svg className='ComingSoon'
      xmlns="http://www.w3.org/2000/svg"
      width="399"
      height="455"
      version="1"
      viewBox="0 0 299.25 341.25"
    >
      <defs>
        <filter id="2040ab2cc3" width="100%" height="100%" x="0%" y="0%">
          <feColorMatrix
            colorInterpolationFilters="sRGB"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          ></feColorMatrix>
        </filter>
        <mask id="c35c7b5acd">
          <g filter="url(#2040ab2cc3)">
            <path
              fillOpacity="0.41"
              d="M-29.925 -34.125H329.175V375.375H-29.925z"
            ></path>
          </g>
        </mask>
        <clipPath id="9836211ad7">
          <path d="M.965.98H282.52v259.274H.965zm0 0"></path>
        </clipPath>
        <clipPath id="eab2a6b066">
          <path d="M39.121.98h205.61a38.152 38.152 0 0138.152 38.156v182.966a38.143 38.143 0 01-11.176 26.976 38.143 38.143 0 01-26.977 11.176H39.121A38.152 38.152 0 01.965 222.102V39.137A38.152 38.152 0 0139.12.98zm0 0"></path>
        </clipPath>
        <linearGradient
          id="d1c08a880d"
          x1="0"
          x2="278"
          y1="0"
          y2="0"
          gradientTransform="matrix(1.01279 0 0 1.01279 .966 .981)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1EDBCB"></stop>
          <stop offset="0.008" stopColor="#1EDBCB"></stop>
          <stop offset="0.016" stopColor="#1EDACA"></stop>
          <stop offset="0.023" stopColor="#1ED9CA"></stop>
          <stop offset="0.031" stopColor="#1DD8CA"></stop>
          <stop offset="0.039" stopColor="#1DD7C9"></stop>
          <stop offset="0.047" stopColor="#1DD7C9"></stop>
          <stop offset="0.055" stopColor="#1DD6C9"></stop>
          <stop offset="0.063" stopColor="#1CD5C8"></stop>
          <stop offset="0.07" stopColor="#1CD4C8"></stop>
          <stop offset="0.078" stopColor="#1CD3C8"></stop>
          <stop offset="0.086" stopColor="#1CD3C7"></stop>
          <stop offset="0.094" stopColor="#1BD2C7"></stop>
          <stop offset="0.102" stopColor="#1BD1C7"></stop>
          <stop offset="0.109" stopColor="#1BD0C6"></stop>
          <stop offset="0.117" stopColor="#1BD0C6"></stop>
          <stop offset="0.125" stopColor="#1ACFC6"></stop>
          <stop offset="0.133" stopColor="#1ACEC5"></stop>
          <stop offset="0.141" stopColor="#1ACDC5"></stop>
          <stop offset="0.148" stopColor="#1ACCC4"></stop>
          <stop offset="0.156" stopColor="#1ACCC4"></stop>
          <stop offset="0.164" stopColor="#19CBC4"></stop>
          <stop offset="0.172" stopColor="#19CAC3"></stop>
          <stop offset="0.18" stopColor="#19C9C3"></stop>
          <stop offset="0.188" stopColor="#19C8C3"></stop>
          <stop offset="0.195" stopColor="#18C8C2"></stop>
          <stop offset="0.203" stopColor="#18C7C2"></stop>
          <stop offset="0.211" stopColor="#18C6C2"></stop>
          <stop offset="0.219" stopColor="#18C5C1"></stop>
          <stop offset="0.227" stopColor="#17C4C1"></stop>
          <stop offset="0.234" stopColor="#17C4C1"></stop>
          <stop offset="0.242" stopColor="#17C3C0"></stop>
          <stop offset="0.25" stopColor="#17C2C0"></stop>
          <stop offset="0.258" stopColor="#16C1C0"></stop>
          <stop offset="0.266" stopColor="#16C0BF"></stop>
          <stop offset="0.273" stopColor="#16C0BF"></stop>
          <stop offset="0.281" stopColor="#16BFBF"></stop>
          <stop offset="0.289" stopColor="#16BEBE"></stop>
          <stop offset="0.297" stopColor="#15BDBE"></stop>
          <stop offset="0.305" stopColor="#15BCBD"></stop>
          <stop offset="0.313" stopColor="#15BCBD"></stop>
          <stop offset="0.32" stopColor="#15BBBD"></stop>
          <stop offset="0.328" stopColor="#14BABC"></stop>
          <stop offset="0.336" stopColor="#14B9BC"></stop>
          <stop offset="0.344" stopColor="#14B8BC"></stop>
          <stop offset="0.352" stopColor="#14B8BB"></stop>
          <stop offset="0.359" stopColor="#13B7BB"></stop>
          <stop offset="0.367" stopColor="#13B6BB"></stop>
          <stop offset="0.375" stopColor="#13B5BA"></stop>
          <stop offset="0.383" stopColor="#13B4BA"></stop>
          <stop offset="0.391" stopColor="#12B4BA"></stop>
          <stop offset="0.398" stopColor="#12B3B9"></stop>
          <stop offset="0.406" stopColor="#12B2B9"></stop>
          <stop offset="0.414" stopColor="#12B1B9"></stop>
          <stop offset="0.422" stopColor="#12B0B8"></stop>
          <stop offset="0.43" stopColor="#11B0B8"></stop>
          <stop offset="0.438" stopColor="#11AFB8"></stop>
          <stop offset="0.445" stopColor="#11AEB7"></stop>
          <stop offset="0.453" stopColor="#11ADB7"></stop>
          <stop offset="0.461" stopColor="#10ACB6"></stop>
          <stop offset="0.469" stopColor="#10ACB6"></stop>
          <stop offset="0.477" stopColor="#10ABB6"></stop>
          <stop offset="0.484" stopColor="#10AAB5"></stop>
          <stop offset="0.492" stopColor="#0FA9B5"></stop>
          <stop offset="0.5" stopColor="#0FA9B5"></stop>
          <stop offset="0.508" stopColor="#0FA8B4"></stop>
          <stop offset="0.516" stopColor="#0FA7B4"></stop>
          <stop offset="0.523" stopColor="#0EA6B4"></stop>
          <stop offset="0.531" stopColor="#0EA5B3"></stop>
          <stop offset="0.539" stopColor="#0EA5B3"></stop>
          <stop offset="0.547" stopColor="#0EA4B3"></stop>
          <stop offset="0.555" stopColor="#0EA3B2"></stop>
          <stop offset="0.563" stopColor="#0DA2B2"></stop>
          <stop offset="0.57" stopColor="#0DA1B2"></stop>
          <stop offset="0.578" stopColor="#0DA1B1"></stop>
          <stop offset="0.586" stopColor="#0DA0B1"></stop>
          <stop offset="0.594" stopColor="#0C9FB1"></stop>
          <stop offset="0.602" stopColor="#0C9EB0"></stop>
          <stop offset="0.609" stopColor="#0C9DB0"></stop>
          <stop offset="0.617" stopColor="#0C9DAF"></stop>
          <stop offset="0.625" stopColor="#0B9CAF"></stop>
          <stop offset="0.633" stopColor="#0B9BAF"></stop>
          <stop offset="0.641" stopColor="#0B9AAE"></stop>
          <stop offset="0.648" stopColor="#0B99AE"></stop>
          <stop offset="0.656" stopColor="#0A99AE"></stop>
          <stop offset="0.664" stopColor="#0A98AD"></stop>
          <stop offset="0.672" stopColor="#0A97AD"></stop>
          <stop offset="0.68" stopColor="#0A96AD"></stop>
          <stop offset="0.688" stopColor="#0A95AC"></stop>
          <stop offset="0.695" stopColor="#0995AC"></stop>
          <stop offset="0.703" stopColor="#0994AC"></stop>
          <stop offset="0.711" stopColor="#0993AB"></stop>
          <stop offset="0.719" stopColor="#0992AB"></stop>
          <stop offset="0.727" stopColor="#0891AB"></stop>
          <stop offset="0.734" stopColor="#0891AA"></stop>
          <stop offset="0.742" stopColor="#0890AA"></stop>
          <stop offset="0.75" stopColor="#088FAA"></stop>
          <stop offset="0.758" stopColor="#078EA9"></stop>
          <stop offset="0.766" stopColor="#078DA9"></stop>
          <stop offset="0.773" stopColor="#078DA8"></stop>
          <stop offset="0.781" stopColor="#078CA8"></stop>
          <stop offset="0.789" stopColor="#068BA8"></stop>
          <stop offset="0.797" stopColor="#068AA7"></stop>
          <stop offset="0.805" stopColor="#0689A7"></stop>
          <stop offset="0.813" stopColor="#0689A7"></stop>
          <stop offset="0.82" stopColor="#0688A6"></stop>
          <stop offset="0.828" stopColor="#0587A6"></stop>
          <stop offset="0.836" stopColor="#0586A6"></stop>
          <stop offset="0.844" stopColor="#0585A5"></stop>
          <stop offset="0.852" stopColor="#0585A5"></stop>
          <stop offset="0.859" stopColor="#0484A5"></stop>
          <stop offset="0.867" stopColor="#0483A4"></stop>
          <stop offset="0.875" stopColor="#0482A4"></stop>
          <stop offset="0.883" stopColor="#0482A4"></stop>
          <stop offset="0.891" stopColor="#0381A3"></stop>
          <stop offset="0.898" stopColor="#0380A3"></stop>
          <stop offset="0.906" stopColor="#037FA3"></stop>
          <stop offset="0.914" stopColor="#037EA2"></stop>
          <stop offset="0.922" stopColor="#027EA2"></stop>
          <stop offset="0.93" stopColor="#027DA1"></stop>
          <stop offset="0.938" stopColor="#027CA1"></stop>
          <stop offset="0.945" stopColor="#027BA1"></stop>
          <stop offset="0.953" stopColor="#027AA0"></stop>
          <stop offset="0.961" stopColor="#017AA0"></stop>
          <stop offset="0.969" stopColor="#0179A0"></stop>
          <stop offset="0.977" stopColor="#01789F"></stop>
          <stop offset="0.984" stopColor="#01779F"></stop>
          <stop offset="0.992" stopColor="#00769F"></stop>
          <stop offset="1" stopColor="#00769E"></stop>
        </linearGradient>
        <clipPath id="4876b1b848">
          <path d="M0 0H284V261H0z"></path>
        </clipPath>
        <clipPath id="59779ddf5c">
          <path d="M9.074 1.164h277.594V334H9.074zm0 0"></path>
        </clipPath>
        <clipPath id="28c12801a6">
          <path d="M14.172 333.527h267.183a4.758 4.758 0 004.797-4.797V6.262a4.756 4.756 0 00-4.797-4.797H14.172a4.756 4.756 0 00-4.797 4.797V328.73a4.758 4.758 0 004.797 4.797zm0 0"></path>
        </clipPath>
        <clipPath id="5ae85930ca">
          <path d="M7.965.05h284.254v339.774H7.965zm0 0"></path>
        </clipPath>
        <clipPath id="d5b38fabca">
          <path d="M287.422 4.992c-.567-2.824-3.106-4.941-6.067-4.941H14.172c-3.383 0-6.207 2.824-6.207 6.21v322.47c0 2.96 1.976 5.359 4.797 6.066.566 2.82 3.105 4.937 6.066 4.937h267.184c3.386 0 6.207-2.82 6.207-6.207V11.06c0-2.965-1.977-5.364-4.797-6.067zM9.375 328.73V6.262a4.756 4.756 0 014.797-4.797h267.183a4.756 4.756 0 014.797 4.797V328.73a4.758 4.758 0 01-4.797 4.797H14.172a4.758 4.758 0 01-4.797-4.797zm0 0"></path>
        </clipPath>
        <clipPath id="99e47e4435">
          <path d="M66.469 36.168h164.586v164.586H66.469zm0 0"></path>
        </clipPath>
      </defs>
      <g mask="url(#c35c7b5acd)">
        <g clipPath="url(#4876b1b848)" transform="translate(7 1)">
          <g clipPath="url(#9836211ad7)">
            <g clipPath="url(#eab2a6b066)">
              <path
                fill="url(#d1c08a880d)"
                d="M.965.98v259.274H282.52V.98zm0 0"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g clipPath="url(#59779ddf5c)">
        <g clipPath="url(#28c12801a6)">
          <path fill="#5eb229" d="M7.965.05h284.254v339.774H7.965zm0 0"></path>
        </g>
      </g>
      <g clipPath="url(#5ae85930ca)">
        <g clipPath="url(#d5b38fabca)">
          <path fill="#231f20" d="M7.965.05h284.254v339.774H7.965zm0 0"></path>
        </g>
      </g>
      <g clipPath="url(#99e47e4435)">
        <path d="M219.973 101.316h-12.297a4.346 4.346 0 01-1.285-.16 4.35 4.35 0 01-2.153-1.394 4.287 4.287 0 01-.675-1.106 66.408 66.408 0 00-2.06-5 4.252 4.252 0 01-.21-2.488c.094-.418.242-.813.453-1.18.211-.37.469-.703.781-.996l8.711-8.762c.512-.515.969-1.078 1.375-1.683a10.96 10.96 0 001.02-1.914c.277-.672.488-1.363.629-2.078.144-.715.215-1.434.215-2.16 0-.727-.07-1.45-.215-2.16a11.137 11.137 0 00-1.648-3.996 11.365 11.365 0 00-1.376-1.68l-8.574-8.57a11.156 11.156 0 00-3.598-2.398 11.125 11.125 0 00-8.477 0c-.671.276-1.308.62-1.913 1.022a10.71 10.71 0 00-1.68 1.375l-8.746 8.754a4.173 4.173 0 01-2.168 1.23 4.168 4.168 0 01-2.488-.207 52.672 52.672 0 00-5.012-2.058 4.287 4.287 0 01-1.105-.676 4.422 4.422 0 01-.856-.972 4.224 4.224 0 01-.531-1.18 4.333 4.333 0 01-.164-1.285V47.25c0-.73-.07-1.45-.215-2.164a11.004 11.004 0 00-.633-2.078 11.032 11.032 0 00-2.41-3.598 10.958 10.958 0 00-1.68-1.379 11.117 11.117 0 00-6.164-1.863H142.7c-.726 0-1.449.07-2.16.215-.715.14-1.406.351-2.078.633a11.121 11.121 0 00-3.594 2.402 11.148 11.148 0 00-1.379 1.68 10.979 10.979 0 00-1.023 1.914 11.13 11.13 0 00-.848 4.238v12.297a4.379 4.379 0 01-.687 2.484 4.397 4.397 0 01-1.973 1.664 59.37 59.37 0 00-5 2.059c-.394.16-.805.258-1.23.293-.422.039-.844.012-1.262-.082a4.168 4.168 0 01-1.18-.453c-.367-.211-.7-.469-.992-.782l-8.762-8.742a10.922 10.922 0 00-1.683-1.375 11.121 11.121 0 00-1.914-1.023 11.285 11.285 0 00-2.079-.63 11.155 11.155 0 00-4.32 0 11.156 11.156 0 00-5.676 3.027l-8.57 8.572a11.149 11.149 0 00-1.379 1.68 11.137 11.137 0 00-1.648 3.995c-.145.711-.215 1.434-.215 2.16 0 .727.07 1.446.215 2.16.14.716.351 1.407.629 2.079a10.96 10.96 0 001.02 1.914 11.18 11.18 0 001.378 1.683l8.754 8.743a4.242 4.242 0 011.234 2.172 4.244 4.244 0 01-.21 2.484 52.6 52.6 0 00-2.06 5.008 4.2 4.2 0 01-.675 1.101 4.23 4.23 0 01-.973.856 4.33 4.33 0 01-2.465.695H77.552a11.053 11.053 0 00-4.246.852c-.672.277-1.313.62-1.918 1.027a11.123 11.123 0 00-4.078 4.984 11.03 11.03 0 00-.63 2.082c-.14.715-.21 1.438-.21 2.164v12.125c0 .727.07 1.45.215 2.16.14.715.351 1.407.632 2.079a11.148 11.148 0 004.082 4.973c.602.402 1.243.745 1.915 1.023a11.13 11.13 0 004.238.848h12.297a4.33 4.33 0 013.437 1.554c.281.336.508.703.676 1.106a60.703 60.703 0 002.059 5 4.252 4.252 0 01.21 2.488 4.266 4.266 0 01-.453 1.183c-.21.368-.468.7-.78.993l-8.716 8.757a10.892 10.892 0 00-1.375 1.68 10.981 10.981 0 00-1.648 3.996 10.862 10.862 0 00-.215 2.16c0 .73.07 1.45.215 2.165.14.71.347 1.406.625 2.078.281.672.62 1.312 1.023 1.918.403.605.86 1.164 1.375 1.68l8.57 8.573c.516.512 1.079.97 1.684 1.372.602.406 1.242.746 1.914 1.023.672.277 1.364.484 2.078.629a11.155 11.155 0 004.32 0 11.285 11.285 0 002.079-.629 10.892 10.892 0 001.918-1.023c.605-.403 1.164-.86 1.68-1.371l8.75-8.758c.288-.313.62-.57.992-.782a4.1 4.1 0 011.175-.453c.418-.09.836-.117 1.262-.082.422.035.832.133 1.227.293a52.672 52.672 0 005.011 2.059c.403.168.77.394 1.106.676.336.28.621.605.855.972.239.367.414.762.532 1.18.12.422.171.848.164 1.285v12.297c-.004.73.066 1.453.207 2.172.14.715.347 1.41.629 2.086.277.676.617 1.316 1.023 1.926.402.605.863 1.168 1.379 1.687a11.205 11.205 0 003.605 2.414c.676.278 1.371.488 2.09.633.715.14 1.438.21 2.168.21h12.125c.727 0 1.45-.07 2.16-.214.715-.14 1.407-.351 2.078-.633a10.723 10.723 0 001.915-1.023 11.118 11.118 0 003.059-3.055 11.156 11.156 0 001.87-6.156v-12.297c-.011-.438.04-.871.156-1.293.118-.426.297-.82.536-1.191.234-.371.523-.696.859-.98a4.448 4.448 0 011.11-.684 60.677 60.677 0 005-2.055c.394-.16.804-.258 1.23-.297a4.127 4.127 0 011.258.086c.418.09.812.242 1.183.45.367.21.7.472.992.78l8.766 8.758a11.102 11.102 0 005.672 3.023c.715.141 1.434.215 2.16.215a11.13 11.13 0 004.238-.843 11.138 11.138 0 001.918-1.02 11.123 11.123 0 001.68-1.375l8.574-8.57a11.102 11.102 0 002.395-3.598 11.13 11.13 0 00.633-2.082 11.125 11.125 0 00-1.653-8.316 11.397 11.397 0 00-1.375-1.684l-8.758-8.75a4.217 4.217 0 01-1.234-2.168 4.278 4.278 0 01-.082-1.261c.035-.422.133-.833.293-1.227a52.184 52.184 0 002.059-5.008c.168-.398.394-.77.675-1.101a4.404 4.404 0 012.152-1.39 4.33 4.33 0 011.286-.161h12.297a11.068 11.068 0 004.258-.836 11.084 11.084 0 006.87-10.274v-12.125c0-.726-.07-1.449-.214-2.16a10.725 10.725 0 00-.633-2.078 10.858 10.858 0 00-1.023-1.914 11.118 11.118 0 00-3.055-3.059 11.156 11.156 0 00-6.156-1.87zm4.226 23.207a4.183 4.183 0 01-.324 1.618 4.31 4.31 0 01-.914 1.371 4.12 4.12 0 01-.64.523 4.323 4.323 0 01-1.523.633 4.15 4.15 0 01-.825.078h-12.297a11.193 11.193 0 00-6.43 1.926 11.178 11.178 0 00-2.484 2.312c-.711.899-1.27 1.88-1.68 2.95a49.159 49.159 0 01-1.832 4.41 11.053 11.053 0 002.379 12.406l8.738 8.785c.196.195.371.41.528.64.152.231.28.477.39.731.106.258.184.524.238.793a4.183 4.183 0 010 1.653c-.054.27-.132.535-.238.793-.11.253-.238.5-.39.73-.157.23-.333.445-.528.64l-8.57 8.57a4.246 4.246 0 01-1.371.922c-.258.106-.52.188-.793.243-.274.05-.547.078-.824.078-.278 0-.551-.027-.825-.078a4.323 4.323 0 01-.793-.242 4.246 4.246 0 01-1.37-.922l-8.77-8.758a11.007 11.007 0 00-2.68-2.02c-1-.538-2.055-.913-3.164-1.124a11.017 11.017 0 00-6.598.765 46.827 46.827 0 01-4.402 1.832c-1.066.41-2.047.973-2.941 1.684-.895.71-1.664 1.539-2.305 2.488a10.985 10.985 0 00-1.45 3.067 11.09 11.09 0 00-.464 3.355v12.297a4.15 4.15 0 01-.711 2.348 4.12 4.12 0 01-1.164 1.164c-.23.156-.477.285-.73.39a4.183 4.183 0 01-1.617.324h-12.126a4.183 4.183 0 01-1.617-.324 4.31 4.31 0 01-1.371-.914 4.12 4.12 0 01-.524-.64 4.323 4.323 0 01-.633-1.523 4.464 4.464 0 01-.077-.825v-12.297a11.12 11.12 0 00-.47-3.36 11.048 11.048 0 00-1.452-3.066 11.07 11.07 0 00-2.309-2.484 11.09 11.09 0 00-2.95-1.676 52.307 52.307 0 01-4.417-1.84 10.348 10.348 0 00-4.445-.98 11.215 11.215 0 00-4.313.894 11.258 11.258 0 00-3.648 2.465l-8.793 8.738a4.107 4.107 0 01-1.367.918 4.183 4.183 0 01-3.234 0 3.977 3.977 0 01-.731-.39 3.932 3.932 0 01-.641-.528l-8.55-8.55a4.12 4.12 0 01-.524-.641 4.107 4.107 0 01-.39-.73 4.222 4.222 0 01.914-4.61l8.757-8.75a11.022 11.022 0 003.148-5.847c.211-1.11.254-2.231.122-3.356a10.878 10.878 0 00-.891-3.238 48.817 48.817 0 01-1.832-4.403 10.98 10.98 0 00-1.68-2.957 11.058 11.058 0 00-2.492-2.316 11.166 11.166 0 00-6.441-1.922H77.55c-.278 0-.551-.023-.824-.078a4.323 4.323 0 01-1.524-.633 4.12 4.12 0 01-1.164-1.164 4.323 4.323 0 01-.633-1.523 4.183 4.183 0 01-.082-.825v-12.125a4.183 4.183 0 01.324-1.617 4.31 4.31 0 01.914-1.371 4.12 4.12 0 01.641-.523 4.323 4.323 0 011.523-.633c.274-.05.547-.078.825-.078h12.297c1.144.015 2.265-.14 3.363-.469a11.224 11.224 0 003.066-1.457 11.178 11.178 0 002.485-2.313 11.042 11.042 0 001.68-2.949 50.129 50.129 0 011.831-4.41c.461-1.031.754-2.11.883-3.23a10.94 10.94 0 00-.125-3.348c-.21-1.11-.586-2.16-1.12-3.152a10.971 10.971 0 00-2.016-2.676l-8.739-8.793a4.349 4.349 0 01-.527-.637 4.376 4.376 0 01-.39-.73 4.417 4.417 0 01-.243-.793 4.496 4.496 0 01-.078-.824c0-.278.027-.555.078-.825a4.323 4.323 0 01.633-1.523c.156-.23.332-.445.527-.64l8.551-8.552a4.31 4.31 0 011.371-.914 4.311 4.311 0 011.617-.32 4.272 4.272 0 011.613.32 4.228 4.228 0 011.372.914l8.793 8.739a11.022 11.022 0 005.843 3.148c1.114.211 2.235.254 3.36.121a10.995 10.995 0 003.238-.89 46.828 46.828 0 014.402-1.832 11.01 11.01 0 002.942-1.684c.898-.71 1.664-1.539 2.304-2.488a11.014 11.014 0 001.45-3.063c.328-1.097.48-2.218.465-3.36V47.25c0-.277.027-.55.078-.824a4.323 4.323 0 01.632-1.524 4.12 4.12 0 011.165-1.164 4.323 4.323 0 011.523-.633c.273-.054.547-.082.824-.082h12.125a4.183 4.183 0 011.617.325 4.31 4.31 0 011.371.914c.196.195.372.41.524.64a4.323 4.323 0 01.633 1.523c.054.274.078.548.078.825v12.297a11.12 11.12 0 00.469 3.36 11.159 11.159 0 001.453 3.066 11.252 11.252 0 002.308 2.484c.899.711 1.883 1.27 2.953 1.676a52.77 52.77 0 014.415 1.84c1.03.46 2.109.754 3.23.886 1.121.13 2.238.086 3.348-.125a11.08 11.08 0 005.828-3.14l8.793-8.739a4.228 4.228 0 012.984-1.234 4.311 4.311 0 011.617.32c.254.106.5.239.73.391.231.152.446.328.641.523l8.57 8.575a4.107 4.107 0 01.918 1.367 4.183 4.183 0 010 3.234c-.105.258-.234.5-.39.73-.152.231-.328.446-.527.641l-8.758 8.77a11.007 11.007 0 00-2.02 2.68c-.539 1-.914 2.054-1.125 3.164a11.017 11.017 0 00.766 6.597 47.71 47.71 0 011.832 4.403c.41 1.066.973 2.046 1.684 2.941.71.898 1.539 1.664 2.488 2.305.945.64 1.969 1.125 3.062 1.449 1.098.328 2.22.48 3.36.465h12.297c.277 0 .554.027.824.078a4.323 4.323 0 011.523.633 4.12 4.12 0 011.164 1.164c.157.23.286.476.391.73a4.183 4.183 0 01.324 1.617zm-75.437-30.066c-.785 0-1.57.04-2.352.117a24.41 24.41 0 00-4.617.918 23.734 23.734 0 00-4.344 1.801c-.695.371-1.367.773-2.023 1.21a23.971 23.971 0 00-10.203 15.273c-.157.775-.27 1.552-.348 2.333a23.638 23.638 0 000 4.704 24.41 24.41 0 00.918 4.617 24.127 24.127 0 003.012 6.367 23.971 23.971 0 0012.988 9.633c.754.226 1.516.418 2.285.574.774.152 1.55.266 2.332.344a23.638 23.638 0 004.703 0 24.666 24.666 0 002.332-.344c.77-.156 1.532-.348 2.285-.574a24.127 24.127 0 006.367-3.012 23.971 23.971 0 008.84-10.773c.301-.723.567-1.465.793-2.215.227-.754.418-1.516.575-2.285a24.666 24.666 0 00.46-4.684c0-.785-.038-1.57-.117-2.352a24.854 24.854 0 00-.343-2.332 25.716 25.716 0 00-.575-2.285 23.734 23.734 0 00-1.8-4.344 24.074 24.074 0 00-2.614-3.914 23.971 23.971 0 00-9.37-6.949 23.34 23.34 0 00-2.216-.793 24.41 24.41 0 00-4.617-.918 23.638 23.638 0 00-2.351-.117zm0 41.148a17.209 17.209 0 01-3.344-.328 17.39 17.39 0 01-3.219-.977 16.771 16.771 0 01-2.96-1.586 17.09 17.09 0 01-4.73-4.73 16.771 16.771 0 01-1.587-2.96 17.39 17.39 0 01-.977-3.22 17.085 17.085 0 01-.328-3.343 17.208 17.208 0 01.328-3.344 17.39 17.39 0 01.977-3.219 16.771 16.771 0 011.586-2.96c.312-.47.644-.918 1-1.352a16.29 16.29 0 011.133-1.246c.394-.399.812-.774 1.246-1.133.433-.355.883-.687 1.351-1a16.771 16.771 0 012.961-1.586 17.39 17.39 0 013.219-.976 17.085 17.085 0 013.344-.329 17.208 17.208 0 013.343.329 17.39 17.39 0 013.219.977 16.771 16.771 0 012.96 1.586 17.002 17.002 0 014.732 4.73 16.77 16.77 0 011.586 2.96 17.39 17.39 0 01.976 3.22 17.085 17.085 0 01.328 3.343 17.209 17.209 0 01-.328 3.344 17.39 17.39 0 01-.977 3.219 16.771 16.771 0 01-1.586 2.96c-.308.47-.644.918-1 1.352a17.15 17.15 0 01-1.128 1.25 17.15 17.15 0 01-2.602 2.129 16.771 16.771 0 01-2.96 1.586 17.39 17.39 0 01-3.22.976 17.085 17.085 0 01-3.343.328zm0 0"></path>
      </g>
      <path
        d="M1.965 0h5.308v-9.426l3.586 5.02h3.477l3.559-4.992V0h5.312v-18.586h-4.355l-6.266 8.84-6.242-8.84h-4.38zm0 0"
        transform="translate(44.565 256.033)"
      ></path>
      <path
        d="M11.02.398c5.921 0 10.113-4.007 10.113-9.691 0-5.684-4.192-9.691-10.113-9.691-5.922 0-10.118 4.007-10.118 9.691C.902-3.609 5.098.398 11.02.398zM6.344-9.293c0-2.789 1.941-4.727 4.676-4.727 2.761 0 4.671 1.938 4.671 4.727 0 2.79-1.91 4.727-4.671 4.727-2.735 0-4.676-1.938-4.676-4.727zm0 0"
        transform="translate(69.732 256.033)"
      ></path>
      <path
        d="M1.965 0h5.363v-5.285h2.02L12 0h6.082l-3.426-6.266c1.965-1.09 3.078-3.054 3.078-5.656 0-4.113-2.785-6.664-7.3-6.664h-8.47zm5.258-9.559v-4.644h2.496c1.699 0 2.629.82 2.629 2.308 0 1.489-.93 2.336-2.63 2.336zm0 0"
        transform="translate(91.792 256.033)"
      ></path>
      <path
        d="M1.965 0H15v-4.383H7.273V-7.25h6.72v-4.3h-6.72v-2.708h7.438v-4.328H1.965zm0 0"
        transform="translate(110.905 256.033)"
      ></path>
      <path
        d="M10.648.398c5.122 0 9-3.105 9.797-7.832H15c-.664 1.75-2.23 2.868-4.246 2.868-2.602 0-4.41-1.938-4.41-4.727 0-2.812 1.832-4.727 4.46-4.727 1.942 0 3.56 1.09 4.118 2.762h5.418c-.957-4.699-4.781-7.726-9.746-7.726-5.735 0-9.692 3.957-9.692 9.691C.902-3.559 4.86.398 10.648.398zm0 0"
        transform="translate(133.231 256.033)"
      ></path>
      <path
        d="M11.02.398c5.921 0 10.113-4.007 10.113-9.691 0-5.684-4.192-9.691-10.113-9.691-5.922 0-10.118 4.007-10.118 9.691C.902-3.609 5.098.398 11.02.398zM6.344-9.293c0-2.789 1.941-4.727 4.676-4.727 2.761 0 4.671 1.938 4.671 4.727 0 2.79-1.91 4.727-4.671 4.727-2.735 0-4.676-1.938-4.676-4.727zm0 0"
        transform="translate(154.522 256.033)"
      ></path>
      <path
        d="M1.965 0h5.308v-9.426l3.586 5.02h3.477l3.559-4.992V0h5.312v-18.586h-4.355l-6.266 8.84-6.242-8.84h-4.38zm0 0"
        transform="translate(176.582 256.033)"
      ></path>
      <path
        d="M1.965 0h5.363v-18.586H1.965zm0 0"
        transform="translate(201.748 256.033)"
      ></path>
      <path
        d="M1.965 0h5.308v-9.48L14.336 0h4.355v-18.586h-5.28v9.426l-7.067-9.426h-4.38zm0 0"
        transform="translate(211.04 256.033)"
      ></path>
      <path
        d="M10.832.398c6.398 0 10.41-4.648 9.824-11.18H9.902v3.774h5.125c-.53 1.567-2.015 2.625-4.14 2.625-2.973 0-4.7-2.094-4.7-4.91 0-2.922 1.883-4.91 4.645-4.91 1.648 0 3.055.715 3.77 1.883h5.71c-1.09-4.063-4.859-6.664-9.558-6.664C4.91-18.984.902-15 .902-9.293c0 5.734 4.035 9.691 9.93 9.691zm0 0"
        transform="translate(231.72 256.033)"
      ></path>
      <path
        d="M8.629.398c4.621 0 7.355-2.175 7.355-5.84 0-3.081-1.992-4.886-6.504-5.894-2.39-.531-3.265-1.117-3.265-2.074 0-.902.793-1.457 2.043-1.457 1.488 0 2.336.77 2.336 2.176h5.043c0-3.825-2.918-6.293-7.485-6.293-4.382 0-7.09 2.175-7.09 5.683 0 3.133 2.043 5.07 6.239 5.867 2.258.45 3.347 1.141 3.347 2.204 0 .93-.796 1.46-2.097 1.46-1.543 0-2.446-.824-2.446-2.257H.93C.93-2.02 3.797.398 8.629.398zm0 0"
        transform="translate(103.89 292.691)"
      ></path>
      <path
        d="M11.02.398c5.921 0 10.113-4.007 10.113-9.691 0-5.684-4.192-9.691-10.113-9.691-5.922 0-10.118 4.007-10.118 9.691C.902-3.609 5.098.398 11.02.398zM6.344-9.293c0-2.789 1.941-4.727 4.676-4.727 2.761 0 4.671 1.938 4.671 4.727 0 2.79-1.91 4.727-4.671 4.727-2.735 0-4.676-1.938-4.676-4.727zm0 0"
        transform="translate(120.853 292.691)"
      ></path>
      <path
        d="M11.02.398c5.921 0 10.113-4.007 10.113-9.691 0-5.684-4.192-9.691-10.113-9.691-5.922 0-10.118 4.007-10.118 9.691C.902-3.609 5.098.398 11.02.398zM6.344-9.293c0-2.789 1.941-4.727 4.676-4.727 2.761 0 4.671 1.938 4.671 4.727 0 2.79-1.91 4.727-4.671 4.727-2.735 0-4.676-1.938-4.676-4.727zm0 0"
        transform="translate(142.913 292.691)"
      ></path>
      <path
        d="M1.965 0h5.308v-9.48L14.336 0h4.355v-18.586h-5.28v9.426l-7.067-9.426h-4.38zm0 0"
        transform="translate(164.973 292.691)"
        ></path>
        <path
          d="M1.727-6.61h4.832l.293-11.976H1.434zM1.3-2.417C1.3-.824 2.496.344 4.14.344c1.648 0 2.843-1.168 2.843-2.762 0-1.59-1.195-2.758-2.843-2.758-1.645 0-2.84 1.168-2.84 2.758zm0 0"
          transform="translate(185.653 292.691)"
        ></path>
      </svg>
  </button>
)

}
export default ComingSoonCard