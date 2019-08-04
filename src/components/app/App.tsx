import React from 'react';
import { OrderTracker } from '../order-tracker/order-tracker';
import { Divider, Header, Flex } from '@stardust-ui/react';
import { ICardProps } from '../card/card';
import { emitReadyEventOnSocket } from '../../web-api/api';
import './App.css';
import * as constants from '../constants';
import * as _ from 'lodash';

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
    };
  }

  public componentDidMount() {
    emitReadyEventOnSocket(
      (newCards: any) => {
          _.forEach(newCards, newCard =>
            this.setState({
              newCardContent: newCard as ICardProps
            })
          );
        },
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
            content={constants.AppTitle}
          />
          <Header
            id="header"
            as="h1"
            color="brand"
            content={`${constants.ClockHeader  }: ${  this.state.timeInSeconds  }${constants.TimestampUnit}`}
          />
        </Flex>
        <Divider color="brand" size={0}/>
        <OrderTracker getCurrentTime={() => this.state.timeInSeconds} newCardContent={this.state.newCardContent} />
      </div>
    );
  }
}

export default App;
