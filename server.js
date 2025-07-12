const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/download', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ success: false, error: 'Missing URL' });
  }

  // This just simulates yt-dlp call
  const dummyLink = 'https://example.com/downloaded-video.mp4';

  // Optional: Telegram Bot Integration
  const axios = require('axios');
  const token = 'YOUR_TELEGRAM_BOT_TOKEN';
  const chatId = 'YOUR_CHAT_ID';
  axios.get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=📥 New download requested: ${encodeURIComponent(url)}`).catch(console.error);

  res.json({
    success: true,
    title: "Video Title Placeholder",
    downloadUrl: dummyLink
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
