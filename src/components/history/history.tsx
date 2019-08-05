import * as constants from '../constants';
import * as _ from 'lodash';
import React from 'react';
import { Button, Dialog, Header, Image, Flex, Text } from '@stardust-ui/react';
import { IUpdate } from '../../update.interface';

import CreatedIcon from '../../assets/created.png';
import CookedIcon from '../../assets/cooked.png';
import CancelledIcon from '../../assets/cancelled.png';
import DeliveredIcon from '../../assets/delivered.png';
import DriverReceivedIcon from '../../assets/driver_received.png';
import OrderTrackerIcon from '../../assets/order_tracker_icon.png';

export interface IHistoryProps {
    allUpdatesOfAllOrdersUnfiltered: IUpdate[];
    id: string;
}

export class History extends React.Component <
  IHistoryProps,
  {}
> {

   public render() {
       return <Dialog content={this.getDialog()} trigger={<Button content={constants.HistoryButton} />} />;
   }

    private getDialog = () => {
        const orderHistory = _.filter(this.props.allUpdatesOfAllOrdersUnfiltered,
            update => update.id === this.props.id);
        const historyOrdered = _.orderBy(orderHistory, 'sent_at_second', 'asc');

        if (historyOrdered.length < 1) {
            return (
                <Text>
                    {constants.NoHistoryFoundMessage}
                </Text>
            );
        }

        const lastUpdateForOrder = historyOrdered[historyOrdered.length-1];
        const { id, name, destination } = lastUpdateForOrder;
        return (
            <Flex column>
                {this.getHeaderAndMetadata(id, name, destination)}
                <br/>
                {this.getUpdatesTimeline(historyOrdered)}
            </Flex>
        );
    };

   private getHeaderAndMetadata = (id: string, name: string, destination: string) => {
       return (
        <div>
            <Header color="brand">{constants.OrderNumber}{id}</Header>
            <Text>{constants.OrderName}: {name}</Text>
            <br />
            <Text>{constants.Destination}: {destination}</Text>
        </div>
       );
   }

   private getUpdatesTimeline = (historyOrdered: IUpdate[]) => {
    const events: JSX.Element[] = [];
    _.forEach(historyOrdered, event => {
        events.push(
          <Flex.Item hAlign="center" vAlign="center">
              <Flex hAlign="center" vAlign="center">
                  {this.getImage(event.event_name)}
                  <Text>
                    {constants.getFriendlyString(event.event_name)} at {event.sent_at_second}{constants.TimestampUnit}
                  </Text>
              </Flex>
          </Flex.Item>
        );
        events.push(<br/>);
    });
    return events;
   }

    private getImage = (event_name: string) => {
        let image;
        switch(event_name) {
            case constants.CreatedEventName:
                image = CreatedIcon;
                break;
            case constants.CookedEventName:
                image = CookedIcon;
                break;
            case constants.CancelledEventName:
                image = CancelledIcon;
                break;
            case constants.DriverReceivedEventName:
                image = DriverReceivedIcon;
                break;
            case constants.DeliveredEventName:
                image = DeliveredIcon;
                break;
            default:
                image = OrderTrackerIcon;
                break;
        }
        return <Image id="image" src={image} />;
    }
}
