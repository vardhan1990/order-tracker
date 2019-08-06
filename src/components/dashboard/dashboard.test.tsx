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

  it(`expect 14 headers`, () => {
    expect(wrapper.find('Header').length).toBe(14);
  });

  it(`expect 1 accordion`, () => {
    expect(wrapper.find('Accordion').length).toBe(1);
  });

  it(`expect 3 buttons`, () => {
    expect(wrapper.find('Button').length).toBe(3);
  });

  it(`expect 3 inputs`, () => {
    expect(wrapper.find('Input').length).toBe(3);
  });
});
