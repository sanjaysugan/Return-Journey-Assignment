import express, { Request, Response } from 'express';

export const getProducts = (req: Request, res: Response) => {
  res.json({ message: 'Successfully fetched products' });
};

export const getProductById = (req: Request, res: Response) => {
  const productId = req.params.id;
  res.json({ message: `Successfully fetched product with ID ${productId}` });
};
