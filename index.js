// index.js
import express from 'express';
import cors from 'cors';
import newsFeedRoute from './routes/newsFeed.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/news-feed', newsFeedRoute);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
