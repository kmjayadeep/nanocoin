import * as express from 'express';
import * as bodyParser from 'body-parser';
import { getBlockchain, generateNextBlock } from './blockchain';


const httpPort: number = parseInt(process.env.HTTP_PORT) || 4000;
const p2pPort: number = parseInt(process.env.P2P_PORT) || 4001;

const initHttpServer = (port: number) => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/blocks', (req, res) => {
        res.json(getBlockchain());
    })

    app.post('/mine', (req, res) => {
        const newBlock = generateNextBlock(req.body.data);
        res.json(newBlock);
    })

    app.listen(port, () => {
        console.log('listening on port : ' + port);
    })
}

initHttpServer(httpPort);