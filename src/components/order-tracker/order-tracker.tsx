import { Cards } from '../cards/cards';
import { ICardProps } from '../card/card';
import * as constants from '../constants';
import { History } from '../history/history';
import * as _ from 'lodash';
import React from 'react';
import { Accordion, Button, Flex, Header, Input, Text } from '@stardust-ui/react';

export interface IOrderTrackerProps {
  getCurrentTime: () => number;
  newUpdate?: ICardProps;
}
export interface IOrderTrackerState {
  filterDurationInput: string;
  filterDuration: number;
  filterMessage: string;
  viewHistoryId: string;
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
      filterDurationInput: "",
      filterDuration: -1,
      filterMessage: constants.NoFilterApplied,
      viewHistoryId: ""
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
      <Flex column>
        <Flex>
          <Flex.Item size="size.half">
              {this.getFilters()}
          </Flex.Item>
          <Flex.Item size="size.half">
            {this.getViewHistorySection()}
          </Flex.Item>
        </Flex>
        {this.getPanels()}
      </Flex>
    );
  }

  private getViewHistorySection = () => {
    return (
      <Flex column hAlign="center" vAlign="center" gap="gap.small">
        <Header as="h3" color="brand">{constants.ViewOrderHistory}</Header>
        <Header as="h4">{constants.ViewOrderHistoryDescription}</Header>
        <Header as="span">{constants.ViewOrderHistoryPrompt}</Header>
        <Flex>
          <Input id="view-history-id" type="string" value={this.state.viewHistoryId} onChange={e => {
              this.setState({
                viewHistoryId: (e.target as any).value as string
              });
              }
            }/>
          <History allUpdatesOfAllOrdersUnfiltered={this.allUpdatesOfAllOrdersUnfiltered}
              id={this.state.viewHistoryId} />
        </Flex>
      </Flex>
    );
  }

  private getFilters = () => {
    return (
      <Flex column hAlign="center" vAlign="center" gap="gap.small">
        <Header as="h3" color="brand">{constants.FiltersHeader}</Header>
        <Header as="h4">{constants.FiltersHeaderDescription}</Header>
        <Header as="span">{constants.FiltersHeaderPrompt}</Header>
        <Flex>
          <Input id="filter-value" type="number" value={this.state.filterDurationInput} onChange={e => {
                const inputValue = (e.target as any).value as string;
                this.setState({
                  filterDurationInput: inputValue
                });
              }
            }/>
          <Button content={constants.FilterButton} onClick={() => {
              const filterDurationInputNum = parseInt(this.state.filterDurationInput, 10);
              if (filterDurationInputNum && filterDurationInputNum > 0) {
                this.setState({
                  filterDuration: filterDurationInputNum,
                  filterMessage: constants.FilterCurrentlyApplied
                });
              } else {
                this.setState({
                  filterDuration: -1,
                  filterMessage: constants.NoFilterApplied
                });
              }
            }
          }/>
        </Flex>
        <Text>{this.state.filterMessage}</Text>
      </Flex>
    );
  }

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
