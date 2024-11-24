import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Basic API endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});