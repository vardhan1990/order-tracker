import React from 'react';
import { mount } from 'enzyme';
import { Update } from './update';
import { Provider, themes } from '@stardust-ui/react';
import * as constants from '../constants';
import { IUpdate } from '../../update.interface';

describe("Update", () => {
  const latestUpdate: IUpdate[] = [{
    id: "id",
    name: "string",
    event_name: "CREATED",
    sent_at_second: 1,
    destination: "string"
  }];

  const sendUpdateFn = (id: string, name: string, destination: string, event_name: constants.EventNameType) => {};

  it('renders without crashing', () => {
    const div = document.createElement('div');

    mount(
        <Provider theme={themes.teams}>
            <Update latestUpdate={latestUpdate} id={"id"} sendUpdateFn={sendUpdateFn} />
        </Provider>
    , div);
  });
});
