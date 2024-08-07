const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json());

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  date: { type: String, default: Date.now }
});

const Url = mongoose.model('Url', urlSchema);

mongoose.connect('mongodb://localhost:27017/urlshortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/api/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = Math.random().toString(36).substring(7);
  const newUrl = new Url({ originalUrl, shortUrl });
  await newUrl.save();
  res.json({ originalUrl, shortUrl });
});

app.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;
  const url = await Url.findOne({ shortUrl });
  if (url) {
    return res.redirect(url.originalUrl);
  } else {
    return res.status(404).json('No URL found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  mongoose.connection.once('open', () => {
    console.log('MongoDB connected');
  });
});
