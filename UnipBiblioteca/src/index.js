import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes/routes'
console.disableYellowBox = true;

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff"/>
      <Routes />
    </>
  );
}