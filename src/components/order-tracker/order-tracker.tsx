import { Cards } from '../cards/cards';
import { ICardProps } from '../card/card';
import * as constants from '../constants';
import * as _ from 'lodash';
import React from 'react';
import { Accordion, Button, Form, Header, Text } from '@stardust-ui/react';

export interface IOrderTrackerProps {
  getCurrentTime: () => number;
  newUpdate?: ICardProps;
}
export interface IOrderTrackerState {
  filterDuration: number;
  filterMessage: string;
}

export class OrderTracker extends React.Component<
  IOrderTrackerProps,
  IOrderTrackerState
> {
  private latestStateOfAllOrdersUnfiltered: ICardProps[];
  private allUpdatesOfAllOrdersUnfiltered: ICardProps[];

  constructor(props: IOrderTrackerProps, state: IOrderTrackerState) {
    super(props, state);
    this.latestStateOfAllOrdersUnfiltered = [];
    this.allUpdatesOfAllOrdersUnfiltered = [];
    this.state = {
      filterDuration: -1,
      filterMessage: constants.NoFilterApplied
    };
  }

  public componentDidUpdate(prevProps: IOrderTrackerProps, prevState: IOrderTrackerState) {
    const { newUpdate: newCardContent } = this.props;

    if (newCardContent && prevProps.newUpdate !== newCardContent) {
      _.remove(this.latestStateOfAllOrdersUnfiltered, cardContent => cardContent.id === newCardContent.id);
      this.latestStateOfAllOrdersUnfiltered = _.concat(this.latestStateOfAllOrdersUnfiltered, [newCardContent]);
      this.allUpdatesOfAllOrdersUnfiltered = _.concat(this.allUpdatesOfAllOrdersUnfiltered, [newCardContent]);
    }
  }

  public render() {
    return (
      <div>
        {this.getFilters()}
        <Text>{this.state.filterMessage}</Text>
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
        type: 'number',
        inline: true
      },
      {
        control: {
          as: Button,
          key: 'filter-button',
          content: constants.FilterButton,
        },
        key: 'filter'
      },
    ];

    const onSubmit = (e: any) => {
      const filterDurationInput = parseInt(new FormData(e.target).get('filter-value') as string, 10);
      if (filterDurationInput && filterDurationInput > 0) {
        this.setState({
          filterDuration: filterDurationInput,
          filterMessage: constants.FilterCurrentlyApplied
        });
      } else {
        this.setState({
          filterDuration: -1,
          filterMessage: constants.NoFilterApplied
        });
      }
    };

    return (
      <div>
        <Header as="h2" color="brand">{constants.FiltersHeader}</Header>
        <Form
          onSubmit={onSubmit.bind(this)}
          fields={fields}
        />
       </div>
    );
  };

  private getLatestStateOfOrdersFiltered = () => {
    const { filterDuration } = this.state;
    const currentTime: number = this.props.getCurrentTime();
    return filterDuration < 0 ? this.latestStateOfAllOrdersUnfiltered : _.filter(this.latestStateOfAllOrdersUnfiltered,
      cardContent => (currentTime - cardContent.sent_at_second) < filterDuration);
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
    return (
      <Cards content={this.getLatestStateOfOrdersFiltered().filter(
        cardContent => cardContent.event_name === eventNameContentFilter)} />
    );
  }
}
