const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const EMAILS_FILE = path.join(__dirname, 'emails.json');

// Email liste dosyası yoksa oluştur
if (!fs.existsSync(EMAILS_FILE)) {
  fs.writeFileSync(EMAILS_FILE, JSON.stringify([]));
}

app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Geçerli bir e-posta girin.' });
  }

  const emails = JSON.parse(fs.readFileSync(EMAILS_FILE));
  if (emails.includes(email)) {
    return res.status(409).json({ error: 'Bu e-posta zaten kayıtlı.' });
  }

  emails.push(email);
  fs.writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));

  res.json({ message: 'Kayıt başarılı!' });
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
