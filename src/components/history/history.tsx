import { ICardProps } from '../card/card';
import * as constants from '../constants';
import * as _ from 'lodash';
import React from 'react';
import { Button, Dialog, Header, Image, Flex, Text } from '@stardust-ui/react';

import CreatedIcon from '../../assets/created.png';
import CookedIcon from '../../assets/cooked.png';
import CancelledIcon from '../../assets/cancelled.png';
import DeliveredIcon from '../../assets/delivered.png';
import DriverReceivedIcon from '../../assets/driver_received.png';
import OrderTrackerIcon from '../../assets/order_tracker_icon.png';

export interface IHistoryProps {
    allUpdatesOfAllOrdersUnfiltered: ICardProps[];
    id: string;
}

export class History extends React.Component <
  IHistoryProps,
  {}
> {
   public render() {
        return <Dialog content={this.getDialogContent()} trigger={<Button content={constants.SeeHistoryButton} />} />;
   } 

   private getDialogContent = () => {
    const events: JSX.Element[] = [];
    const orderHistory = _.filter(this.props.allUpdatesOfAllOrdersUnfiltered, update => update.id === this.props.id);
    const content = _.orderBy(orderHistory, 'sent_at_second', 'asc');
    _.forEach(content, event => {
        events.push(
            <Flex.Item hAlign="center" vAlign="center">
                <Flex hAlign="center" vAlign="center">
                    {this.getImage(event.event_name)} 
                    <Text>  {this.getFriendlyString(event.event_name)} at {event.sent_at_second}{constants.TimestampUnit}</Text>
                </Flex>
            </Flex.Item>
        );
        events.push(<br/>);
    });

    const { id, name, destination } = content[0];
    return (
        <Flex column>
            <Header color="brand">{constants.OrderNumber}{id}</Header>
            <Text>{constants.OrderName}: {name}</Text>
            <Text>{constants.Destination}: {destination}</Text>
            <br/>
            {events}
        </Flex>
    );
   }

    private getFriendlyString = (event_name: string) => {
        switch(event_name) {
            case constants.CreatedEventName:
                return constants.CreatedHeader;
            case constants.CookedEventName:
                return constants.CookedHeader;
            case constants.CancelledEventName:
                return constants.CancelledHeader;
            case constants.DriverReceivedEventName:
                return constants.DeliveredHeader;
            case constants.DeliveredEventName:
                return constants.DeliveredHeader;
        }
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
