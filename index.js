import express from 'express';
import cors from 'cors';
import newsFeedRoute from './routes/newsFeed.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tech-news', newsFeedRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
