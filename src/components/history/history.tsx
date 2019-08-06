import * as constants from '../constants';
import * as _ from 'lodash';
import React from 'react';
import { Button, Dialog, Header, Image, Flex, Text } from '@stardust-ui/react';
import { IUpdate } from '../../update.interface';

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
                <Header styles={{"margin": "1.5rem 0 0.5rem 0 "}} as="h3" color="brand">{constants.UpdateHistory}</Header>
                {this.getUpdatesTimeline(historyOrdered)}
            </Flex>
        );
    };

   private getHeaderAndMetadata = (id: string, name: string, destination: string) => {
       return (
        <div>
            <Header styles={{"margin": "0 0 0 0 "}} align="center" color="brand">{constants.OrderNumber}{id}</Header>
            <br />
            <Header styles={{"margin": "1.5rem 0 0.5rem 0 "}} as="h3" color="brand">{constants.OrderName}</Header>
            <Text>{name}</Text>
            <br />
            <Header styles={{"margin": "1.5rem 0 0.5rem 0 "}} as="h3" color="brand">{constants.Destination}</Header>
            <Text>{destination}</Text>
        </div>
       );
   }

   private getUpdatesTimeline = (historyOrdered: IUpdate[]) => {
    const events: JSX.Element[] = [];
    _.forEach(historyOrdered, event => {
        events.push(
          <Flex.Item>
              <Flex vAlign="end">
                  <Text timestamp>{event.sent_at_second}{constants.TimestampUnit}</Text>
                  {this.getImage(event.event_name)}
                  <Text>{constants.getFriendlyString(event.event_name)}</Text>
              </Flex>
          </Flex.Item>
        );
        events.push(<br/>);
    });
    return events;
   }

    private getImage = (event_name: string) => {
        let image = '../../assets/order-tracker.png';
        switch(event_name) {
            case constants.CreatedEventName:
                image = '../../assets/created.png';
                break;
            case constants.CookedEventName:
                image = '../../assets/cooked.png';
                break;
            case constants.CancelledEventName:
                image = '../../assets/cancelled.png';
                break;
            case constants.DriverReceivedEventName:
                image = '../../assets/driver_received.png';
                break;
            case constants.DeliveredEventName:
                image = '../../assets/order-tracker-icon.png';
                break;
            default:
                image = '../../assets/order-tracker.png';
                break;
        }
        return <Image id="image" src={image} styles={{
            "height": "2rem",
            "margin": "0 0.5rem 0 2rem"
        }}/>;
    }
}
