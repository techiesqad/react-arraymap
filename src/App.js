import React from 'react';
import './style.css';

export default function App() {
 const channels= [
    {
      chrome: 'youtube',
      firefox: 'dailymotion',
      edge: 'facebook',
      opera: 'vk',
    },
  ];

  return (
    <div>
      {channels.map((item) => (
        <ul>
        <li>{item.edge}</li>
        <li>{item.firefox}</li>
        <li>{item.opera}</li>
        <li>{item.chrome}</li>
        </ul>
      ))}
    </div>
  );
}
