// routes/newsFeed.js
import express from 'express';
import axios from 'axios';

const router = express.Router();

const GNEWS_API_KEY = '35aaf12dd7704d2fad22a8d99bc14c65'; // ✅ Your real API key

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&max=10&apikey=${GNEWS_API_KEY}`
    );

    const articles = response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.image,
      source: article.source.name,
      publishedAt: article.publishedAt
    }));

    res.json({ articles });
  } catch (error) {
    console.error('❌ Error fetching real news:', error.message);
    res.status(500).json({ message: 'Error fetching news' });
  }
});

export default router;
// This code defines a route for fetching technology news articles from the GNews API.