import { Card, ICardProps } from '../card/card';
import React from 'react';
import { Flex } from '@stardust-ui/react';

export interface ICardsProps {
    content: ICardProps[];
}

export class Cards extends React.Component<
  ICardsProps,
  {}
> {
    public render() {
        const cards: JSX.Element[] = [];
        const cardsContent = this.props.content;
        cardsContent.forEach(cardContent => {
            cards.push(
                <Flex.Item hAlign="center" vAlign="center">
                    <Card {...cardContent}/>
                </Flex.Item>
            );
        });
        return <Flex wrap children={cards}/>;
    }
}
