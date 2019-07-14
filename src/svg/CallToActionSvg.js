import React from 'react';

const CallToActionSvg = () => {return <svg xmlns="http://www.w3.org/2000/svg" width="82.94" height="82.94" opacity='.7' viewBox="0 0 72.94 72.94">
  <defs>
    <filter id="Path_1" x="0" y="0" width="72.94" height="72.94" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3.5" result="blur"/>
      <feFlood floodColor="#9b4ea1" floodOpacity="0.871"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Path_3" x="12.999" y="19.723" width="46.703" height="35.753" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="2" result="blur-2"/>
      <feFlood floodColor="#9b4ea1" floodOpacity="0.839"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_2" data-name="Group 2" transform="translate(11 0)" opacity="0.91">
    <g transform="matrix(1, 0, 0, 1, -11, -8)" filter="url(#Path_1)">
      <path id="Path_1-2" data-name="Path 1" d="M556.394,298.94h-3.849c-.589-.085-1.183-.149-1.767-.259-10.372-1.943-17.365-7.816-20.644-17.908A49.777,49.777,0,0,1,529,275.394v-4.3a2.647,2.647,0,0,0,.189-.515c1.613-10.995,7.788-18.14,18.3-21.557a43.087,43.087,0,0,1,5.059-1.02h3.849c.589.087,1.177.172,1.766.262a25.393,25.393,0,0,1,20.9,18.881c.406,1.59.6,3.235.885,4.855v3.4c-.085.552-.154,1.106-.255,1.655-1.932,10.466-7.856,17.5-18.032,20.783A49.193,49.193,0,0,1,556.394,298.94ZM554.456,251.4c-11.912,0-21.933,9.875-22.1,21.482a22.224,22.224,0,0,0,22.044,22.67c12.055,0,22.144-9.91,22.14-21.761A22.143,22.143,0,0,0,554.456,251.4Z" transform="translate(-518 -240)" fill="#9b4ea1" />
    </g>
    <g transform="matrix(1, 0, 0, 1, -11, -8)" filter="url(#Path_3)">
      <path id="Path_3-2" data-name="Path 3" d="M597.523,344.145c3.281-3.29,6.477-6.489,9.666-9.7a1.728,1.728,0,0,1,2.143-.437,1.478,1.478,0,0,1,.823,1.793,2.3,2.3,0,0,1-.607,1.041q-5.334,5.379-10.7,10.721a1.758,1.758,0,0,1-2.759-.056q-5.326-5.307-10.633-10.633a1.706,1.706,0,1,1,2.374-2.381q4.412,4.382,8.8,8.789C596.888,343.547,597.162,343.8,597.523,344.145Z" transform="translate(-561.14 -306.38)" fill="#9b4ea1" stroke="#707070" strokeMiterlimit="10" strokeWidth="0.25"/>
    </g>
  </g>
</svg>
}

export default CallToActionSvg;