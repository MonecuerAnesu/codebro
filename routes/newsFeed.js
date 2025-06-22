import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config(); // ✅ Load .env variables

const router = express.Router();

const API_KEY = process.env.NEWS_API_KEY;

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&max=10&apikey=${API_KEY}`
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
    console.error('❌ Backend API fetch error:', error.message);
    res.status(500).json({ message: 'Server error while fetching news' });
  }
});

export default router;
