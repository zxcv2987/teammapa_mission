import express from 'express';
import {createMiddleware} from '@mswjs/http-middleware';
import {handlers} from './handlers';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use(createMiddleware(...handlers));

app.listen(PORT, () => console.log(`Mock server is running on port: ${PORT}`));
