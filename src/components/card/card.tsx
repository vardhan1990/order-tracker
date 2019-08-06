import React from 'react';
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
