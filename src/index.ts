import express from 'express';
const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Home');
})

app.listen(PORT);