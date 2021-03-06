import { User } from './User';

export class Message {
    id?: number;
    text: string;
    timestamp?: number;
    username?: string;
    type?: string;
    avatar?: string;
    user?: User;
    isSelf?: Boolean;

    constructor (text: string, timestamp: number) {
        this.text = text;
        this.timestamp = timestamp;
    }
}
