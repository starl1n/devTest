import { Router } from 'express';
import { body, check } from 'express-validator';
import {
  transactionGet,
  transactionPost,
  transactionPut,
  transactionDelete,
} from '../controllers/transaction.controller';
import validateFields from '../middlewares/validate-fields.middelware';

const router = Router();

router.get('/', transactionGet);

router.post(
  '/',
  body('table').not().isEmpty(),
  body('table').isString(),
  body('action').not().isEmpty(),
  body('action').isString(),
  body('data').isLength({ min: 1 }),
  body('data').isArray(),
  validateFields,
  transactionPost
);

router.put(
  '/:id',
  check('id').isMongoId(),
  body('table').not().isEmpty(),
  body('table').isString(),
  body('action').not().isEmpty(),
  body('action').isString(),
  body('data').isLength({ min: 1 }),
  body('data').isArray(),
  validateFields,
  transactionPut
);

router.delete(
  '/',  
  transactionDelete
);

export default router;
