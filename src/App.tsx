import React from 'react';
import './App.css';
import { OrderTracker } from './components/order-tracker/order-tracker'; 
import {Clock} from './components/clock/clock';
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
        <Clock />
      </Flex>
      <Divider color="brand" size={0}/>
      <OrderTracker getCurrentTime={() => 200} />
    </div>
  );
}

// private getMockContent = () => {
//   return [
//     {
//       id: "TEST",
//       name: "Cheese Pizza",
//       event_name: "CREATED" as constants.EventNameType,
//       sent_at_second: 201,
//       destination: "1041 S Fairfax Ave, LA, CA 90019"
//     }, 
//     {
//       id: "123SAD3XS19",
//       name: "Cheese Pizza",
//       event_name: "CREATED" as constants.EventNameType,
//       sent_at_second: 123,
//       destination: "1041 S Fairfax Ave, LA, CA 90019"
//     }, 
//     {
//       id: "123SAD3XS195",
//       name: "Cheese Pizza",
//       event_name: "DELIVERED" as constants.EventNameType,
//       sent_at_second: 123,
//       destination: "1041 S Fairfax Ave, LA, CA 90019"
//     }, 
//     {
//       id: "123SAD3XS19",
//       name: "Cheese Pizza",
//       event_name: "CREATED" as constants.EventNameType,
//       sent_at_second: 123,
//       destination: "1041 S Fairfax Ave, LA, CA 90019"
//     }, 
//     {
//       id: "123SAD3XS193",
//       name: "Cheese Pizza",
//       event_name: "COOKED" as constants.EventNameType,
//       sent_at_second: 123,
//       destination: "1041 S Fairfax Ave, LA, CA 90019"
//     },
//     {
//       id: "123SAD3XS19",
//       name: "Cheese Pizza",
//       event_name: "DRIVER_RECEIVED" as constants.EventNameType,
//       sent_at_second: 123,
//       destination: "1041 S Fairfax Ave, LA, CA 90019"
//     },
//     {
//       id: "123SAD3XS191",
//       name: "Cheese Pizza",
//       event_name: "COOKED" as constants.EventNameType,
//       sent_at_second: 123,
//       destination: "1041 S Fairfax Ave, LA, CA 90019"
//     },
//     {
//       id: "123SAD3XS192",
//       name: "Cheese Pizza",
//       event_name: "CANCELLED" as constants.EventNameType,
//       sent_at_second: 123,
//       destination: "1041 S Fairfax Ave, LA, CA 90019"
//     }
//   ];
// }

export default App;
