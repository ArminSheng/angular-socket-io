export class Message {
    id?: number;
    text: string;
    timestamp?: number;
    username?: string;
    type?: string

    constructor (text: string, timestamp: number) {
        this.text = text;
        this.timestamp = timestamp;
    }
}
