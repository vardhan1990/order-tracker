import { IUpdate } from '../../update.interface';
import * as constants from '../constants';
import * as _ from 'lodash';
import { Dashboard } from '../dashboard/dashboard';
import React from 'react';
import { Divider, Header, Flex } from '@stardust-ui/react';
import { emitReadyEventOnSocket } from '../../web-api/api';


interface IAppState {
  newUpdate: IUpdate;
  timeInSeconds: number;
}

export class App extends React.Component<
  {},
  IAppState
> {
  constructor(state: IAppState) {
    super(state);
    this.state = {
      newUpdate: {
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
      (newUpdates: any) => {
          _.forEach(newUpdates, newUpdate =>
            this.setState({
              newUpdate: newUpdate as IUpdate
            })
          );
        },
      (clockTick: any) =>
        this.setState({
          timeInSeconds: clockTick as number
        })
    );
  }

  public render() {
    return (
      <Flex column styles={{
          "padding": "0 2rem 0 2rem",
          "background-color": "#edebe9"
        }}>
        <Flex space="between">
          <Header
            id="header"
            as="h1"
            color="brand"
            content={constants.AppTitle}
            styles={{
              "margin": "0 0 0 0"
            }}
          />
          <Header
            id="header"
            as="h1"
            color="brand"
            content={`${constants.ClockHeader}: ${this.state.timeInSeconds}${constants.TimestampUnit}`}
          />
        </Flex>
        <Divider color="brand" size={0}/>
        <Dashboard getCurrentTime={() => this.state.timeInSeconds} newUpdate={this.state.newUpdate}
                sendUpdateFn={this.sendUpdateFn.bind(this)} />
      </Flex>
    );
  }

  private sendUpdateFn = (id: string, name: string, destination: string, event_name: constants.EventNameType) => {
    this.setState({
      newUpdate: {
        id,
        name,
        destination,
        event_name,
        sent_at_second: this.state.timeInSeconds
      }
    });
  }
}

export default App;
