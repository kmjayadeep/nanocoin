import * as WebSocket from 'ws'
import { Server } from 'ws'

const sockets: WebSocket[] = [];

enum MessageType {
    QUERY_LATEST = 0,
    QUERY_ALL = 1,
    RESPONSE_BLOCKCHAIN = 2
}

class Message {
    public type: MessageType;
    public data: any
}

const getSockets = () => sockets;

const initP2PSever = (port: number) => {
    //TODO
}

const broadcastLatest = () => {
    //TODO
}

export { broadcastLatest };