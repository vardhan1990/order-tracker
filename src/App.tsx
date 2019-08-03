import React from 'react';
import './App.css';
import { OrderTracker } from './components/order-tracker/order-tracker'; 
import {Timer} from './components/timer/timer';
import { Divider, Header, Flex } from '@stardust-ui/react';
import { AppTitle } from './constants';

const App: React.FC = () => {
  return (
    <div id="app">
      <Flex space="between">
        <Header
          id="header"
          as="h1"
          color="brand"
          content={AppTitle}
        />
        <Timer />
      </Flex>
      <Divider color="brand" size={0}/>
      <OrderTracker />
    </div>
  );
}

export default App;
