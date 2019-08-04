import React from 'react';
import './App.css';
import { OrderTracker } from '../order-tracker/order-tracker'; 
import { Divider, Header, Flex } from '@stardust-ui/react';
import { AppTitle } from '../constants';
import { ICardProps } from '../card/card';
import { emitReadyEventOnSocket } from '../../web-api/api';
import * as constants from '../constants';

interface IAppState {
  newCardContent: ICardProps;
  timeInSeconds: number;
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
      },
      timeInSeconds: 0
    }
  }

  public componentDidMount() {
    emitReadyEventOnSocket(
      (newCardContent: any) => 
        this.setState({
          newCardContent: newCardContent as ICardProps
        }),
      (timer: any) => 
        this.setState({
          timeInSeconds: timer as number
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
          <Header
            id="header"
            as="h1"
            color="brand"
            content={constants.ClockHeader + ': ' + this.state.timeInSeconds + constants.TimestampUnit}
          />
        </Flex>
        <Divider color="brand" size={0}/>
        <OrderTracker getCurrentTime={() => this.state.timeInSeconds} newCardContent={this.state.newCardContent} />
      </div>
    );
  }
}

export default App;