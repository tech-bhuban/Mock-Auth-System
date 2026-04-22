
# 🔐 JWT Authentication Mock-Up

A technical demonstration of stateless authentication using **JSON Web Tokens (JWT)** and **Express Middleware**. This project simulates a real-world login flow and route protection.

## 🚀 Advanced Concepts Implemented
- **JWT Signing & Verification**: Secure token generation with an expiration window.
- **Custom Middleware**: A reusable `authenticateToken` function that intercepts requests to validate headers.
- **HTTP Status Codes**: Proper use of `401` (Unauthorized) and `403` (Forbidden) for security debugging.
- **Bearer Token Pattern**: Follows the industry-standard Authorization header format.

## 🛠 Setup
1. **Install Dependencies**:
   ```bash
   npm install express jsonwebtoken
   ```
2. **Run Server**:
   ```bash
   node server.js
   ```

## 🧪 Testing the Flow
1. **Login**: Send a `POST` request to `/login` with:
   ```json
   { "username": "admin", "password": "password123" }
   ```
2. **Copy Token**: Grab the `token` from the response.
3. **Access Dashboard**: Send a `GET` request to `/dashboard` with the header:
   `Authorization: Bearer <YOUR_TOKEN>`

## 🔒 Security Note
In a production environment, the `SECRET_KEY` should be stored in a `.env` file and never committed to version control.

## License
MIT
