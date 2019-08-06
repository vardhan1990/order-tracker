import React from 'react';
import { mount } from 'enzyme';
import { Update } from './update';
import { Provider, themes } from '@stardust-ui/react';
import * as constants from '../constants';
import { IUpdate } from '../../update.interface';

describe("Update", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    const latestUpdate: IUpdate[] = [{
      id: "id",
      name: "string",
      event_name: "CREATED",
      sent_at_second: 1,
      destination: "string"
    }];

    const sendUpdateFn = (id: string, name: string, destination: string, event_name: constants.EventNameType) => {};

    const div = document.createElement('div');

    wrapper = mount(
      <Provider theme={themes.teams}>
          <Update latestUpdate={latestUpdate} id={"id"} sendUpdateFn={sendUpdateFn} />
      </Provider>
    , div);
  });
  
  it('renders without crashing', () => {});

  it('rendered element is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it(`setting props doesn't crash`, () => {
    const latestUpdate: IUpdate[] = [{
      id: "newId",
      name: "string",
      event_name: "CREATED",
      sent_at_second: 1,
      destination: "string"
    }];


    wrapper.setProps({
      latestUpdate: {latestUpdate},
      id: 'newId'
    });
  });
});
