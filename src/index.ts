import express from 'express';
import userRoute from './routes/user.route';

const app = express();
const PORT = 3000;

app.use('/api', userRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});