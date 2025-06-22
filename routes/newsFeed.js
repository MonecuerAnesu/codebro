// routes/newsFeed.js
import express from 'express';
const router = express.Router();

// Example static news feed data (replace with database or API later)
const exampleArticles = [
  {
    title: '🚀 CodeBro Launched!',
    description: 'Check out our latest web design and branding projects!',
    url: 'https://codebro.com/portfolio'
  },
  {
    title: '🔥 New Tech Trends',
    description: 'Explore 2025 design tools for developers and creatives.',
    url: 'https://techcrunch.com'
  }
];

// GET /api/news-feed
router.get('/', (req, res) => {
  res.json({ articles: exampleArticles });
});

export default router;
