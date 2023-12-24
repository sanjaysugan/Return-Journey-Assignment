import request from 'supertest';
import express, { Request, Response } from 'express';
import { getProducts, getProductById } from './server';

const app = express();

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProductById);

describe('API Endpoints', () => {
  it('should get products successfully', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Successfully fetched products');
  });

  it('should get a product by ID successfully', async () => {
    const response = await request(app).get('/api/products/123');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Successfully fetched product with ID 123');
  });

  it('should handle invalid product ID', async () => {
    const response = await request(app).get('/api/products/invalidId');
    expect(response.status).toBe(500); 
  });
});

