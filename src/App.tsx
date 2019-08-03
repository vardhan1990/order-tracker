import React from 'react';
import './App.css';
import logo from './logo.png';
import { OrderTracker } from './components/order-tracker/order-tracker'; 
import { Divider, Header } from '@stardust-ui/react';

const App: React.FC = () => {
  return (
    <div id="app">
      <Header
      id="header"
          as="h1"
          color="brand"
          content="Order Tracker"
        />
      <Divider color="brand" size={0}/>
      <OrderTracker />
    </div>
  );
}

export default App;
