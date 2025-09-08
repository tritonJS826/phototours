import {getSignaturePayload} from 'src/services/galleryService';
import express from 'express';

const router = express.Router();

router.get('/gallery/signature', (req, res) => {
  res.json(getSignaturePayload());
});

export default router;
