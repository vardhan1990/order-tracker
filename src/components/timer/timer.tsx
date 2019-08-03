import * as React from 'react';
import { Header } from '@stardust-ui/react';

export class Timer extends React.Component {
    public render() {
        return (<Header
          id="header"
          as="h1"
          color="brand"
          content="00:00"
        />);
    }
}