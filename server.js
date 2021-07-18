const express = require('express');

const PORT = 5000;

const app = express();
const productRoutes = require('./routes');

app.use('/api/products', productRoutes);
app.get('/', (req, res) => res.send('root'));

app.listen(PORT, () => console.log('running'));
