import React from 'react';
import './App.css';
import { OrderTracker } from './components/order-tracker/order-tracker'; 
import {Clock} from './components/clock/clock';
import { Divider, Header, Flex } from '@stardust-ui/react';
import { AppTitle } from './constants';
import { ICardProps } from './components/card/card';

interface IAppState {
  newCardContent: ICardProps;
}

export class App extends React.Component<
  {},
  IAppState
> {
  private interval!: NodeJS.Timeout;

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
    const content = this.getMockContent();
    let i=0;
    this.interval = setInterval(() => {
      this.setState({ newCardContent: content[i++] as ICardProps });
      if (i === content.length) {
        i=0;
      }
    }, 5000);
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

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  private getMockContent = () => {
    return [
      {
        id: "TEST",
        name: "Cheese Pizza",
        event_name: "CREATED",
        sent_at_second: 1,
        destination: "1041 S Fairfax Ave, LA, CA 90019"
      },
      {
        id: "TEST",
        name: "Cheese Pizza",
        event_name: "COOKED",
        sent_at_second: 1,
        destination: "1041 S Fairfax Ave, LA, CA 90019"
      },
      {
        id: "TEST",
        name: "Cheese Pizza",
        event_name: "DRIVER_RECEIVED",
        sent_at_second: 1,
        destination: "1041 S Fairfax Ave, LA, CA 90019"
      },
      {
        id: "TEST",
        name: "Cheese Pizza",
        event_name: "DELIVERED",
        sent_at_second: 1,
        destination: "1041 S Fairfax Ave, LA, CA 90019"
      }
    ];
  }
}

export default App;