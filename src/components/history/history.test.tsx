import React from 'react';
import { mount } from 'enzyme';
import { History } from './history';
import { Provider, themes } from '@stardust-ui/react';
import * as constants from '../constants';
import { IUpdate } from '../../update.interface';

describe("History", () => {
  const updateArray: IUpdate[] = [{
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
            <History allUpdatesOfAllOrdersUnfiltered={updateArray} id={"id"} />
        </Provider>
    , div);
  });
});
