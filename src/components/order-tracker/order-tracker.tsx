import React from 'react';
import { Cards } from '../cards/cards';
import { ICardProps } from '../card/card';
import { Accordion, Button, Form, Header } from '@stardust-ui/react';
import * as constants from '../constants';
import * as _ from 'lodash';

type getCurrentTimeFn = () => number;

export interface IOrderTrackerProps {
  getCurrentTime: getCurrentTimeFn;
  newCardContent?: ICardProps;

}

export interface IOrderTrackerState {
  filterDuration: number;
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
      filterDuration: -1
    };
  }

  public componentDidUpdate(prevProps: IOrderTrackerProps, prevState: IOrderTrackerState) {
    const { newCardContent } = this.props;

    if (newCardContent && prevProps.newCardContent !== newCardContent) {
      _.remove(this.fullContent, cardContent => cardContent.id === newCardContent.id);
      this.fullContent = _.concat(this.fullContent, [newCardContent]);
    }
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
    const fields = [
      {
        label: constants.FilterLabel,
        name: 'filter-value',
        id: 'filter-value',
        key: 'filter-value',
        inline: true,
        type: 'number'
      },
      {
        control: {
          as: Button,
          content: constants.FilterButton,
        },
        key: 'filter',
        inline: true
      },
    ];

    const onSubmit = (e: any) => {
      const filterValueEntered = parseInt(new FormData(e.target).get('filter-value') as string);
      this.setState({
        filterDuration: filterValueEntered ? filterValueEntered as number : -1
      });
    };

    return (
      <div>
        <Header as="h2">{constants.FiltersHeader}</Header>
        <Form
          onSubmit={onSubmit.bind(this)}
          fields={fields}
        />
       </div>
    );
  };

  private getContent = () => {
    const { filterDuration } = this.state;
    const currentTime: number = this.props.getCurrentTime();
    return filterDuration < 0 ? this.fullContent : _.filter(this.fullContent, cardContent => (currentTime - cardContent.sent_at_second) < filterDuration);
  }

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
    return (<Cards content={this.getContent().filter(cardContent => cardContent.event_name === eventNameContentFilter)}/>);
  }
}