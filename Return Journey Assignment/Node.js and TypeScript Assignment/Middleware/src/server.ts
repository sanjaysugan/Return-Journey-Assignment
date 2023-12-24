import express from 'express';
import loggerMiddleware from './loggerMiddleware';

const app = express();
const port = 3000;

// Use the logger middleware for every incoming request
app.use(loggerMiddleware);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
