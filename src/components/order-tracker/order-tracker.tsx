import React from 'react';
import { Cards } from '../cards/cards';
import { Accordion, Header } from '@stardust-ui/react';

const getMockContent = () => {
  return [
    {
      id: "123SAD3XS19",
      name: "Cheese Pizza",
      event_name: "DRIVER_RECEIVED",
      sent_at_second: 123,
      destination: "1041 S Fairfax Ave, LA, CA 90019"
    }, 
    {
      id: "123SAD3XS19",
      name: "Cheese Pizza",
      event_name: "DRIVER_RECEIVED",
      sent_at_second: 123,
      destination: "1041 S Fairfax Ave, LA, CA 90019"
    },
    {
      id: "123SAD3XS19",
      name: "Cheese Pizza",
      event_name: "DRIVER_RECEIVED",
      sent_at_second: 123,
      destination: "1041 S Fairfax Ave, LA, CA 90019"
    },
    {
      id: "123SAD3XS19",
      name: "Cheese Pizza",
      event_name: "DRIVER_RECEIVED",
      sent_at_second: 123,
      destination: "1041 S Fairfax Ave, LA, CA 90019"
    }
  ];
}

const getTitle = (title: string) => {
  return <Header color="brand" as="h3">{title}</Header>;
}

export const OrderTracker: React.FC = () => {
  const panels = [
    {
      title: getTitle("Created"),
      content: (
        <Cards content={getMockContent()}/>
      ),
    },
    {
      title: getTitle("Cooked"),
      content: (
        <Cards content={getMockContent()}/>
      ),
    },
    {
      title: getTitle("Driver Received"),
      content: (
        <Cards content={getMockContent()}/>
      ),
    },
    {
      title: getTitle("Canceled"),
      content: (
        <Cards content={getMockContent()}/>
      ),
    },
    {
      title: getTitle("Delivered"),
      content: (
        <Cards content={getMockContent()}/>
      ),
    },
  ]
  return <Accordion defaultActiveIndex={[0, 1, 2]} panels={panels} />
}