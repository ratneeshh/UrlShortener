const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

// Route to create a short URL
router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: 'originalUrl is required' });
  }

  const shortUrl = Math.random().toString(36).substring(2, 8);
  const url = new Url({ originalUrl, shortUrl });
  try {
    await url.save();
    res.json({ originalUrl, shortUrl });
  } catch (err) {
    res.status(500).json({ error: 'Error saving URL' });
  }
});

// Route to redirect to the original URL
router.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;
  console.log(`Received request to redirect short URL: ${shortUrl}`);

  try {
    const url = await Url.findOne({ shortUrl });
    if (url) {
      console.log(`Found original URL: ${url.originalUrl}`);
      res.redirect(url.originalUrl);
    } else {
      console.log('URL not found');
      res.status(404).json('URL not found');
    }
  } catch (err) {
    console.error('Error finding URL:', err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
