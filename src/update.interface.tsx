import * as constants from './components/constants';

export interface IUpdate {
    id: string;
    name: string;
    event_name: constants.EventNameType;
    sent_at_second: number;
    destination: string;
}