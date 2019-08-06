import React from 'react';
import { mount } from 'enzyme';
import { Provider, themes } from '@stardust-ui/react';
import App from './App';

jest.mock('../../web-api/api', () => ({
  emitReadyEventOnSocket: () => {
  }
}));

describe("App", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    mount(
      <Provider theme={themes.teams}>
        <App />
      </Provider>
    , div);
  });
});
