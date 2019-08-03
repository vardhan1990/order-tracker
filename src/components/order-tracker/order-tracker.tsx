import React from 'react';
import { Cards } from '../cards/cards';
import { Accordion, Button, Header, Input } from '@stardust-ui/react';
import * as constants from '../../constants';

export const OrderTracker: React.FC = () => {
  return (
      <div>
        {getFilters()}
        {getPanels()}
      </div>
  );
}

const getFilters = () => {
  return  (
    <div>
      <Header align="center" as="h4">{constants.FilterPrefix} <Input inline placeholder="<enter a number>" /> {constants.FilterSuffix} <Button iconOnly size="small" icon="table-delete" /></Header> 
    </div>
  );
};

const getPanels = () => {
  const panels = [
    getPanel(constants.CreatedHeader, constants.CreatedEventName),
    getPanel(constants.CookedHeader, constants.CookedEventName),
    getPanel(constants.DriverReceivedHeader, constants.DriverReceivedEventName),
    getPanel(constants.CancelledHeader, constants.CancelledEventName),
    getPanel(constants.DeliveredHeader, constants.DeliveredEventName)
  ];
  return <Accordion defaultActiveIndex={[0, 1, 2]} panels={panels} />;
}

const getPanel = (header: string, eventNameContentFilter: string) => {
  return {
    title: getTitle(header),
    content: getCards(eventNameContentFilter)
  };
}

const getTitle = (title: string) => {
  return <Header color="brand" as="h3">{title}</Header>;
}

const getCards = (eventNameContentFilter: string) => {
  return (<Cards content={getMockContent().filter(content => content.event_name === eventNameContentFilter)}/>);
}

const getMockContent = () => {
  return [
    {
      id: "123SAD3XS19",
      name: "Cheese Pizza",
      event_name: "CREATED" as constants.EventNameType,
      sent_at_second: 123,
      destination: "1041 S Fairfax Ave, LA, CA 90019"
    }, 
    {
      id: "123SAD3XS19",
      name: "Cheese Pizza",
      event_name: "DELIVERED" as constants.EventNameType,
      sent_at_second: 123,
      destination: "1041 S Fairfax Ave, LA, CA 90019"
    }, 
    {
      id: "123SAD3XS19",
      name: "Cheese Pizza",
      event_name: "CREATED" as constants.EventNameType,
      sent_at_second: 123,
      destination: "1041 S Fairfax Ave, LA, CA 90019"
    }, 
    {
      id: "123SAD3XS19",
      name: "Cheese Pizza",
      event_name: "COOKED" as constants.EventNameType,
      sent_at_second: 123,
      destination: "1041 S Fairfax Ave, LA, CA 90019"
    },
    {
      id: "123SAD3XS19",
      name: "Cheese Pizza",
      event_name: "DRIVER_RECEIVED" as constants.EventNameType,
      sent_at_second: 123,
      destination: "1041 S Fairfax Ave, LA, CA 90019"
    },
    {
      id: "123SAD3XS19",
      name: "Cheese Pizza",
      event_name: "COOKED" as constants.EventNameType,
      sent_at_second: 123,
      destination: "1041 S Fairfax Ave, LA, CA 90019"
    },
    {
      id: "123SAD3XS19",
      name: "Cheese Pizza",
      event_name: "CANCELLED" as constants.EventNameType,
      sent_at_second: 123,
      destination: "1041 S Fairfax Ave, LA, CA 90019"
    }
  ];
}