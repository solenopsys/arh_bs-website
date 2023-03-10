import * as express from 'express';
import 'zone.js/dist/zone-node';


import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';
import {AppServerModule} from "./src/app/app.server.module";
const app = express();
console.log("START")


app.use('/query', createProxyMiddleware('http://10.23.92.86:8080/'));
app.use("/", express.static('dist/modules/hub/'));
app.use("/*", express.static('dist/modules/hub/'));
app.use("/*/*", express.static('dist/modules/hub/'));




const port = process.env.PORT || 4001;


app.listen(port, () => console.log(`server running on port ${port}!`));

// export * from './src/main.server';

