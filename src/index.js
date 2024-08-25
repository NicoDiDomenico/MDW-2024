import express from 'express';
import router from './routes/index.js'

const app = express();
const port = 3000;

app.use(router) // Permite anidar todas las rutas que le pasemos a través de router

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});