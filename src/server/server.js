import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve('./', 'dist')));

app.get('/api', (req, res) => {
  res.send({ api: 'test' });
});

app.get('*', function(req, res) {
  res.sendFile(path.resolve('./', 'dist', 'index.html'))
});

app.listen(3000, () => {
  console.log('server running');
  console.log('123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890');
});