import * as constants from '../constants';
import React from 'react';
import { Button, Dialog, Dropdown, Flex, Grid, Header, Input, Text } from '@stardust-ui/react';
import { IUpdate } from '../../update.interface';

export type sendUpdateFn = (id: string, name: string, destination: string, event_name: constants.EventNameType) => void;

export interface IUpdateProps {
    latestUpdate: IUpdate[];
    id: string;
    sendUpdateFn: sendUpdateFn;
}

export interface IUpdateState {
    name: string;
    destination: string;
    event_name: string;
    message: string;
}

export class Update extends React.Component <
  IUpdateProps,
  IUpdateState
> {
    constructor(props: IUpdateProps, state: IUpdateState) {
        super(props,state);
        this.state = {
            name: "",
            destination: "",
            event_name: "",
            message: ""
        };
    }

    public componentDidMount() {
        const latestUpdate = this.props.latestUpdate;
        if (latestUpdate.length > 0) {
            this.setState({
                name: latestUpdate[0].name,
                destination: latestUpdate[0].destination,
                event_name: latestUpdate[0].event_name,
                message: ""
            });
        }
    }

   public render() {
       return <Dialog content={this.getDialog()} trigger={<Button content={constants.UpdateOrCreateButton} />} />;
   }

    private getDialog = () => {
        return (
            <Flex column>
                {this.getHeader(this.props.id)}
                <br/>
                <Flex column gap="gap.small">
                    {this.getInputs()}
                    {this.getUpdateButton()}
                    <Text>{this.state.message}</Text>
                </Flex>
            </Flex>
        );
    };

   private getHeader = (id: string) => {
       return (
            <div>
                <Header color="brand">{constants.OrderNumber}{id}</Header>
            </div>
       );
   }

   private getInputs = () => {
       return (
           <Flex column>
                <Grid columns={2}>
                        <Header as="span">{constants.UpdateOrderNamePrompt}</Header>
                        <Flex.Item grow>
                            <Input fluid id="order-name-input" type="string" value={this.state.name} onChange={(e: any) => {
                                const inputValue = (e.target as any).value as string;
                                this.setState({
                                    name: inputValue
                                });
                            }}/>
                        </Flex.Item>
                </Grid>
                <br />
                <Grid columns={2}>
                        <Header as="span">{constants.UpdateOrderDestinationPrompt}</Header>
                        <Flex.Item grow>
                            <Input fluid id="order-destination-input" type="string" value={this.state.destination} onChange={(e: any) => {
                                const inputValue = (e.target as any).value as string;
                                this.setState({
                                    destination: inputValue
                                });
                            }}/>
                        </Flex.Item>
                </Grid>
                <br />
                {this.getStateInput()}
                <br />
           </Flex>
       );
   }

   private getStateInput = () => {
       return (
        <Grid columns={2}>
            <Header as="span">{constants.UpdateOrderStatePrompt}</Header>
            <Flex.Item grow>
            <Dropdown
                fluid
                items={[
                    constants.CreatedEventName,
                    constants.CookedEventName,
                    constants.DriverReceivedEventName,
                    constants.CancelledEventName,
                    constants.DeliveredEventName
                ]}
                onSelectedChange={
                    (e, input) => {
                        this.setState({
                            event_name: (input as any).value as string
                        });
                    }
                }
            />
            </Flex.Item>
        </Grid>
       );
   }

   private getUpdateButton = () => {
    return (<Button content={constants.UpdateButton} onClick={() => {
        if (!this.props.id || !this.state.name || !this.state.destination || !this.state.event_name) {
            this.setState({
                message: constants.UpdateFormIncomplete
            });
            return;
        }

        this.props.sendUpdateFn(this.props.id, this.state.name,
            this.state.destination, this.state.event_name as constants.EventNameType);
        this.setState({
            name: "",
            destination: "",
            message: constants.UpdateSentConfirmation
        });
    }} />);
   }
}
