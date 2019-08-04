import React from 'react';
import './App.css';
import { OrderTracker } from '../order-tracker/order-tracker'; 
import {Clock} from '../clock/clock';
import { Divider, Header, Flex } from '@stardust-ui/react';
import { AppTitle } from '../constants';
import { ICardProps } from '../card/card';
import { emitReadyEventOnSocket } from '../../web-api/api';

interface IAppState {
  newCardContent: ICardProps;
}

export class App extends React.Component<
  {},
  IAppState
> {
  constructor(state: IAppState) {
    super(state);
    this.state = {
      newCardContent: {
        id: "initial",
        name: "initial",
        event_name: "CREATED",
        sent_at_second: -1,
        destination: "initial"
      }
    }
  }

  public componentDidMount() {
    emitReadyEventOnSocket((newCardContent: any) => 
      this.setState({
        newCardContent: newCardContent as ICardProps
      })
    );
  }

  public render() {
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
        <OrderTracker getCurrentTime={() => 200} newCardContent={this.state.newCardContent} />
      </div>
    );
  }
  
  // private getMockContent = () => {
  //   return [
  //     {
  //       id: "01",
  //       name: "Cheese Pizza",
  //       event_name: "CREATED",
  //       sent_at_second: 1,
  //       destination: "1041 S Fairfax Ave, LA, CA 90019"
  //     },
  //     {
  //       id: "01",
  //       name: "Cheese Pizza",
  //       event_name: "COOKED",
  //       sent_at_second: 1,
  //       destination: "1041 S Fairfax Ave, LA, CA 90019"
  //     },
  //     {
  //       id: "01",
  //       name: "Cheese Pizza",
  //       event_name: "DRIVER_RECEIVED",
  //       sent_at_second: 1,
  //       destination: "1041 S Fairfax Ave, LA, CA 90019"
  //     },
  //     {
  //       id: "01",
  //       name: "Cheese Pizza",
  //       event_name: "DELIVERED",
  //       sent_at_second: 1,
  //       destination: "1041 S Fairfax Ave, LA, CA 90019"
  //     }
  //   ];
  // }
}

export default App;