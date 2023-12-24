import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// In-memory data store
const products = [
  { id: 1, name: 'Product 1', price: 20.0 },
  { id: 2, name: 'Product 2', price: 30.0 },
];

app.use(express.json());

// GET /api/products
app.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

// GET /api/products/:id
app.get('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }

  res.json(product);
});

// POST /api/products/:id
app.post('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }

  // Update product details
  products[productIndex] = { ...products[productIndex], ...req.body };

  res.json(products[productIndex]);
});

// DELETE /api/products/:id
app.delete('/api/products/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }

  // Remove the product from the array
  const deletedProduct = products.splice(productIndex, 1);

  res.json(deletedProduct[0]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${4200}`);
});
