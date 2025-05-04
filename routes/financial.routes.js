import express from 'express';
import { authenticate } from '../controllers/auth.controller.js';
import { getFinancials } from '../controllers/financial.controller.js';

const financialRouter = express.Router();

financialRouter.get('/', authenticate, getFinancials);

export default financialRouter;
