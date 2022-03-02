import React from 'react';
import ShopProvider from './context/Shop';

// navigation
import MainNavigator from './navigation/MainNavigator'

export default function App() {

  return (
    <ShopProvider>
      <MainNavigator />
    </ShopProvider>
  )
}
