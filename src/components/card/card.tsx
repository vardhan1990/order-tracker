import React from 'react';
import CreatedIcon from '../../assets/created.png';
import CookedIcon from '../../assets/cooked.png';
import CancelledIcon from '../../assets/cancelled.png';
import DeliveredIcon from '../../assets/delivered.png';
import DriverReceivedIcon from '../../assets/driver_received.png';
import OrderTrackerIcon from '../../assets/order_tracker_icon.png';
import * as constants from '../constants';
import { Flex, Header, Image, Text } from '@stardust-ui/react';
import { IUpdate } from '../../update.interface';

export class Card extends React.Component<
  IUpdate,
  {}
> {
    public render() {
        return (
            <Flex id='card' column gap="gap.medium" padding="padding.medium" styles={{
                    "margin": "0 1rem 1rem 0",
                    "width": "500px",
                    "background-color": "white"
                }}>
                <Flex.Item>
                    {this.getHeader()}
                </Flex.Item>
                <Flex.Item>
                    {this.getContent()}
                </Flex.Item>
            </Flex>
        );
    }

    private getHeader = () => {
        return (
            <Flex hAlign="center" vAlign="center" gap="gap.small">
                {this.getImage()}
                <Header align="center" color="brand" as="h2">{constants.OrderNumber + this.props.id}</Header>
            </Flex>
        );
    };

    private getImage = () => {
        const { event_name } = this.props;
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
        return <Image id="image" src={image} styles={{
            "height": "2rem"
        }}/>;
    }

    private getContent = () => {
        return (
            <Flex column gap="gap.smaller">
                <Text truncated content={`${constants.OrderName}: ${this.props.name}`} />
                <Text truncated content={`${constants.Destination}: ${this.props.destination}`} />
                <Text content={`${constants.Status}: ${this.props.event_name}`} />
                <br />
                <Flex.Item align="center" push>
                    <Text timestamp>
                        {constants.UserTimestampHeader} {this.props.sent_at_second} {constants.TimestampUnit}.
                    </Text>
                </Flex.Item>
            </Flex>
        );
    }
}
