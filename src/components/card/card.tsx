import React from 'react';
import './card.css';
import CreatedIcon from '../../assets/created.png';
import CookedIcon from '../../assets/cooked.png';
import CancelledIcon from '../../assets/cancelled.png';
import DeliveredIcon from '../../assets/delivered.png';
import DriverReceivedIcon from '../../assets/driver_received.png';
import OrderTrackerIcon from '../../assets/order_tracker_icon.png';
import { Button, Flex, Header, Image, Text } from '@stardust-ui/react';
import * as constants from '../../constants';

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
            <Flex id='card' gap="gap.medium" padding="padding.medium">
                <Flex.Item size="size.medium">
                    {this.getImage()}
                </Flex.Item>
                <Flex.Item grow>
                    {this.getContent()}
                </Flex.Item>
            </Flex>
        );
    }

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
        return <Image id="image" fluid src={image} />
    }

    private getContent = () => {
        return (
            <Flex column gap="gap.small" vAlign="stretch" space="between">
                <Header color="brand" as="h2">Order #{this.props.id}</Header>
                <Text content={this.props.name} />
                <Text content={this.props.destination} />
                {this.getActionButtons()}
                <Flex.Item push>
                    <Text>{constants.UserTimestampHeader} {this.props.sent_at_second}{constants.UserTimestampUnit}</Text>
                </Flex.Item>
            </Flex>
        );
    }

    private getActionButtons = () => {
        if(!this.isActiveOrder()) {
            return undefined;
        }

        return (
            <Flex gap="gap.small">
                <Button icon="stardust-checkmark" content="Done" />
                <Button icon="stardust-close" content="Cancel" />
            </Flex>
        );
    }

    private isActiveOrder() {
        const { event_name } = this.props;
        return event_name === constants.CreatedEventName || event_name === constants.CookedEventName || event_name === constants.DriverReceivedEventName;
    }
}