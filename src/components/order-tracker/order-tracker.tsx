import React from 'react';
import { Cards, ICardsProps } from '../cards/cards';
import { ICardProps } from '../card/card';
import { Accordion, Button, Header, Input } from '@stardust-ui/react';
import * as constants from '../../constants';
import * as _ from 'lodash';

type getCurrentTimeFn = () => number;

export interface IOrderTrackerProps {
  getCurrentTime: getCurrentTimeFn;
}

export interface IOrderTrackerState extends ICardsProps {
  filterDuration: number;
  newCardContent: ICardProps;
}

export class OrderTracker extends React.Component<
  IOrderTrackerProps,
  IOrderTrackerState
> {
  private fullContent: ICardProps[];

  constructor(props: IOrderTrackerProps, state: IOrderTrackerState) {
    super(props, state);
    this.fullContent = [];
    this.state = {
      content: [],
      filterDuration: -1,
      newCardContent: {
        id: "initial",
        name: "initial",
        event_name: "CREATED",
        sent_at_second: -1,
        destination: "initial"
      }
    };
  }

  public componentDidUpdate(prevProps: IOrderTrackerProps, prevState: IOrderTrackerState) {
    const { newCardContent, filterDuration } = this.state;

    if (prevState.newCardContent !== newCardContent) {
      this.fullContent = _.remove(this.fullContent, cardContent => cardContent.id === newCardContent.id);
      this.fullContent = _.concat(this.fullContent, [newCardContent]);
    }

    const currentTime: number = this.props.getCurrentTime();
    const newContent = filterDuration < 0 ? this.fullContent : _.filter(this.fullContent, cardContent => currentTime - cardContent.sent_at_second > 0);
    this.setState({
      content: newContent
    });
  }

  public render() {
    return (
        <div>
          {this.getFilters()}
          {this.getPanels()}
        </div>
    );
  }

  private getFilters = () => {
    return  (
      <div>
        <Header align="center" as="h4">{constants.FilterPrefix} <Input inline placeholder="<enter a number>" /> {constants.FilterSuffix} <Button iconOnly size="small" icon="table-delete" /></Header> 
      </div>
    );
  };

  private getPanels = () => {
    const panels = [
      this.getPanel(constants.CreatedHeader, constants.CreatedEventName),
      this.getPanel(constants.CookedHeader, constants.CookedEventName),
      this.getPanel(constants.DriverReceivedHeader, constants.DriverReceivedEventName),
      this.getPanel(constants.CancelledHeader, constants.CancelledEventName),
      this.getPanel(constants.DeliveredHeader, constants.DeliveredEventName)
    ];
    return <Accordion defaultActiveIndex={[0, 1, 2]} panels={panels} />;
  }
  
  private getPanel = (header: string, eventNameContentFilter: string) => {
    return {
      title: this.getTitle(header),
      content: this.getCards(eventNameContentFilter)
    };
  }
  
  private getTitle = (title: string) => {
    return <Header color="brand" as="h3">{title}</Header>;
  }
  
  private getCards = (eventNameContentFilter: string) => {
    return (<Cards content={this.state.content.filter(cardContent => cardContent.event_name === eventNameContentFilter)}/>);
  }
}