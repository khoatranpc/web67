import express from 'express';
import accountController from './src/controller/account.js';
import userController from './src/controller/user.js';
import validate from './src/middlewares/yup.js';
import { createInforUserSchema } from './src/controller/validate.js';

const app = express();

app.use(express.json());

app.post('/api/v1/register', accountController.register);

app.get('/api/v1/user', userController.getAll);
app.post('/api/v1/user', validate(createInforUserSchema), userController.createInfor);

app.listen(8001, () => {
    console.log('Server is runing 8001!')
});