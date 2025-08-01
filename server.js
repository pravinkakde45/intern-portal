const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: "Pravin Kakde",
    referralCode: "pravin2025",
    donations: 5300
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
