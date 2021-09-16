const express = require('express');
import { verifyToken } from '../middlewares/auth/jwt.middelware';
import { verifyRolSuperAdmin } from "../middlewares/auth/verify.middleware"
import { addConsortium, findConsortiums, findConsortium } from '../controllers/consortiums.controller';
 
const router = express.Router();

router.post('/', [verifyToken, verifyRolSuperAdmin], addConsortium);
router.get('/', [verifyToken, verifyRolSuperAdmin], findConsortiums);
router.get('/:id', [verifyToken, verifyRolSuperAdmin], findConsortium);

module.exports = router;
