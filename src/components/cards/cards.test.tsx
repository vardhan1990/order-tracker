import React from 'react';
import { mount } from 'enzyme';
import { Cards } from './cards';
import { IUpdate } from '../../update.interface';
import { Provider, themes } from '@stardust-ui/react';

describe("Cards", () => {
  const updates: IUpdate[] = [{
    id: "id",
    name: "string",
    event_name: "CREATED",
    sent_at_second: 1,
    destination: "string"
  }];

  it('renders without crashing', () => {
    const div = document.createElement('div');

    mount(
        <Provider theme={themes.teams}>
            <Cards content={updates} />
        </Provider>
    , div);
  });
});
