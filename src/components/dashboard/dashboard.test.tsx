import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Dashboard } from './dashboard';
import { Provider, themes } from '@stardust-ui/react';
import * as constants from '../constants';
import { IUpdate } from '../../update.interface';

describe("Dashboard", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    const getCurrentTimeFn = () => {
      return 1;
   };
 
   const sendUpdateFn = (id: string, name: string, destination: string, event_name: constants.EventNameType) => {};

    const div = document.createElement('div');

    wrapper = mount(
        <Provider theme={themes.teams}>
            <Dashboard getCurrentTime={getCurrentTimeFn} sendUpdateFn={sendUpdateFn} />
        </Provider>
    , div);
  });

  it('renders without crashing', () => {});

  it('rendered element is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it(`setting props doesn't crash`, () => {
    const update: IUpdate = {
      id: "id",
      name: "string",
      event_name: "CREATED",
      sent_at_second: 1,
      destination: "string"
    };

    wrapper.setProps({
      newupdate: {...update}
    });
  });
});
