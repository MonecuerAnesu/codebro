import express from 'express';
import cors from 'cors';
import newsFeedRoute from './routes/newsFeed.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ THIS IS IMPORTANT
app.use('/api/tech-news', newsFeedRoute);

app.get('/', (req, res) => {
  res.send('CodeBro Backend is running...');
});

app.listen(PORT, () => {
  console.log(`✅ Server is live at http://localhost:${PORT}`);
});
