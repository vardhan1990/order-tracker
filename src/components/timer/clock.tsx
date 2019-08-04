import * as React from 'react';
import { Header } from '@stardust-ui/react';
import * as constants from '../constants';

export interface ITimerState {
  timeInSeconds: number;
}

export class Clock extends React.Component<
  {},
  ITimerState
> {
  private intervalTimer!: NodeJS.Timeout;

  constructor(state: ITimerState) {
    super(state);
    this.state = {
      timeInSeconds: 0
    };
  }

  public componentDidMount() {
    this.intervalTimer = setInterval(
      () => {
        const currentTimerVal = this.state.timeInSeconds;
        this.setState({ timeInSeconds: currentTimerVal+1 });
      }, 1000
    );
  }

  public componentWillUnmount() {
    clearInterval(this.intervalTimer);
  }

  public getCurrentTime = (): number => {
    return this.state.timeInSeconds;
  }

  public render() {
    return (<Header
      id="header"
      as="h1"
      color="brand"
      content={`${constants.ClockHeader}: ${this.state.timeInSeconds}`}
    />);
  }
}
