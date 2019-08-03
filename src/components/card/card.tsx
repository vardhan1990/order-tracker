import React from 'react';
import './card.css';
import CreatedIcon from '../../assets/created.png';
import { Flex, Header, Image, Text } from '@stardust-ui/react';

export interface ICardProps {
    id: string;
    name: string;
    event_name: string;
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
                    <Image fluid src={CreatedIcon} />
                </Flex.Item>
                <Flex.Item grow>
                    <Flex column gap="gap.small" vAlign="stretch" space="between">
                        <Header color="brand" as="h2">Order #{this.props.id}</Header>
                        <Text content={this.props.name} />
                        <Text content={this.props.destination} />
                        <Flex.Item push>
                            <Text>Received at {this.props.sent_at_second}s</Text>
                        </Flex.Item>
                    </Flex>
                </Flex.Item>
            </Flex>
        );
    }
}