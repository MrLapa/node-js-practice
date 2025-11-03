const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.send('<form action="/admin/settings" method="POST"><input type="text" name="setting" placeholder="New Setting"><button type="submit">Go to Settings</button></form>');
});

router.post('/settings', (req, res) => {
  res.send(`<h1>Admin Settings Page</h1><p>${req.body.setting}</p>`);
});

module.exports = router;