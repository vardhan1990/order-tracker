import React from 'react';
import './card.css';
import CreatedIcon from '../../assets/created.png';
import CookedIcon from '../../assets/cooked.png';
import CancelledIcon from '../../assets/cancelled.png';
import DeliveredIcon from '../../assets/delivered.png';
import DriverReceivedIcon from '../../assets/driver_received.png';
import OrderTrackerIcon from '../../assets/order_tracker_icon.png';
import { Button, Flex, Header, Image, Text } from '@stardust-ui/react';
import * as constants from '../constants';

export interface ICardProps {
    id: string;
    name: string;
    event_name: constants.EventNameType;
    sent_at_second: number;
    destination: string;
}

export class Card extends React.Component<
  ICardProps,
  {}
> {
    public render() {
        return (
            <Flex id='card' column gap="gap.medium" padding="padding.medium">
                <Flex.Item>
                    {this.getHeader()}
                </Flex.Item>
                <Flex.Item grow>
                    {this.getContent()}
                </Flex.Item>
            </Flex>
        );
    }

    private getHeader = () => {
        return (
            <Flex vAlign="start" hAlign="start" gap="gap.large">
                <Flex.Item>
                    {this.getImage()}
                </Flex.Item>
                <Flex.Item grow hAlign="center" vAlign="center">
                    <Header align="center" color="brand" as="h2">{constants.OrderNumber + this.props.id}</Header>
                </Flex.Item>
                <Flex.Item push>
                    {this.getActions()}
                </Flex.Item>
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
        return <Image id="image" src={image} />
    }

    private getContent = () => {
        return (
            <Flex column gap="gap.small" vAlign="stretch" space="between">
                <Text truncated content={constants.OrderName + ': ' + this.props.name} />
                <Text truncated content={constants.Destination + ': ' + this.props.destination} />
                <Text content={constants.Status + ': ' + this.props.event_name} />
                <Flex.Item push>
                    <Text timestamp>
                        {constants.UserTimestampHeader} {this.props.sent_at_second} {constants.TimestampUnit}.
                    </Text>
                </Flex.Item>
            </Flex>
        );
    }

    private getActions = () => {
        return <Button iconOnly text icon="edit" />;
    }
}