import React from 'react';
import { mount } from 'enzyme';
import { Dashboard, IDashboardProps } from './dashboard';
import { Provider, themes } from '@stardust-ui/react';
import * as constants from '../constants';

describe("Dashboard", () => {
  const getCurrentTimeFn = () => {
     return 1;
  };

  const sendUpdateFn = (id: string, name: string, destination: string, event_name: constants.EventNameType) => {};

  it('renders without crashing', () => {
    const div = document.createElement('div');
    
    mount(
        <Provider theme={themes.teams}>
            <Dashboard getCurrentTime={getCurrentTimeFn} sendUpdateFn={sendUpdateFn} />
        </Provider>
    , div);
  });
});
