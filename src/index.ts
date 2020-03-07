
import express from 'express';
import { PORT } from './app/config/constants';
import { userRouter } from './app/packages/index-packages';

const app = express();
app.use(express.json());
app.use('/users', userRouter);

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is listening on port ${PORT}`);
});