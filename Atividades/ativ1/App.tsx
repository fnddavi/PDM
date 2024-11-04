import React from 'react';
import DrawerNavigator from './src/routes/DrawerNavigator';
import { LotteryProvider } from './src/contexts/LotteryContext';
// Importe outros providers, se houver

export default function App() {
  return (
    <LotteryProvider>
      <DrawerNavigator />
    </LotteryProvider>
  );
}