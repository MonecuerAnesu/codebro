// routes/newsFeed.js
import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// ✅ Supabase setup
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// ✅ GET /api/news-feed
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('news_feed')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
});

export default router;
