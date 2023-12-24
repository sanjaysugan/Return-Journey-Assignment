
This API provides endpoints to manage products.

1. Clone the repository:

git clone <https://github.com/sanjaysugan/Return-Journey-Assignment>
cd <https://github.com/sanjaysugan/Return-Journey-Assignment>

2. Install dependencies:

npm install

3. Build the TypeScript code:

npx tsc

4. Start the server:

node dist/server.js
The server will be running at http://localhost:4200.

Endpoints:

1. Get Products
Endpoint: GET /api/products

Description: Retrieve a list of products.

Example Request:

curl http://localhost:3000/api/products

Example Response:

[
  { "id": 1, "name": "Product 1", "price": 20.0 },
  { "id": 2, "name": "Product 2", "price": 30.0 }
]
2. Get Product by ID
Endpoint: GET /api/products/:id

Description: Retrieve details of a specific product by ID.

Example Request:

curl http://localhost:3000/api/products/1

Example Response:

{ "id": 1, "name": "Product 1", "price": 20.0 }

3. Update Product by ID
Endpoint: POST /api/products/:id

Description: Update details of a specific product by ID.

Example Request:

curl -X POST -H "Content-Type: application/json" -d '{"name": "Updated Product", "price": 25.0}' http://localhost:3000/api/products/1

Example Response:

{ "id": 1, "name": "Updated Product", "price": 25.0 }
4. Delete Product by ID
Endpoint: DELETE /api/products/:id

Description: Delete a specific product by ID.

Example Request:

curl -X DELETE http://localhost:3000/api/products/1

Example Response:

{ "id": 1, "name": "Updated Product", "price": 25.0 }

Error Handling:

If a product with the specified ID is not found, the API will respond with a 404 status code and an error message.
