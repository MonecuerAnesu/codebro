// backend/routes/autoNews.js
import express from 'express';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const NEWS_API_KEY = process.env.VITE_NEWS_API_KEY; // should be set in your .env

router.get('/fetch', async (req, res) => {
  try {
    const response = await axios.get('https://newsdata.io/api/1/news', {
      params: {
        apikey: NEWS_API_KEY,
        category: 'technology',
        language: 'en'
      }
    });

    const articles = response.data.results || [];

    const entries = articles.map(article => ({
      title: article.title,
      content: article.description || article.content || '',
      created_at: new Date(article.pubDate)
    }));

    const { error } = await supabase.from('news_feed').insert(entries);

    if (error) return res.status(500).json({ error });

    res.status(200).json({ inserted: entries.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching news', error: err.message });
  }
});

export default router;
