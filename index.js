// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import newsFeedRoute from './routes/newsFeed.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use('/api/news-feed', newsFeedRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
