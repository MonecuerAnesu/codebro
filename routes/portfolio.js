// backend/routes/portfolio.js
import express from 'express';
const router = express.Router();

// Sample route to test portfolio endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Portfolio route is working!' });
});

export default router;
