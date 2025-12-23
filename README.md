# Vakuladevi Collections – MERN Saree Care

Door-pickup saree dry cleaning and polishing app built with MongoDB, Express, React, and Node.

## Project Structure
- `backend/` – Express API, MongoDB, Nodemailer, WhatsApp deep link
- `frontend/` – React + Vite + Tailwind UI

## Prerequisites
- Node.js 18+
- npm
- MongoDB Atlas connection string

## Backend Setup
1) `cd backend`
2) `npm install`
3) Copy `env.example` to `.env` and fill values:
   - `PORT` (default 5000)
   - `MONGODB_URI` (Atlas connection string)
   - `ALLOWED_ORIGINS` (comma list for CORS, e.g. http://localhost:5173)
   - Optional email: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`, `NOTIFY_EMAIL`
   - Optional WhatsApp number for deep link: `WHATSAPP_NUMBER` (e.g., 919876543210)
4) Run locally: `npm run dev` (nodemon) or `npm start`.

### API
- `POST /api/orders` – create order, triggers email (if configured) and returns WhatsApp deep link
- `GET /api/orders` – list orders (basic admin)
- `GET /api/health` – health check

## Frontend Setup
1) `cd frontend`
2) `npm install`
3) Copy `env.example` to `.env` and set:
   - `VITE_API_BASE_URL=http://localhost:5000`
   - `VITE_WHATSAPP_NUMBER=919876543210`
4) Run locally: `npm run dev` (Vite at 5173)

## Deploy
- Frontend: Vercel/Netlify (build `npm run build`, output `dist/`)
- Backend: Render/Railway/Fly
  - Set env vars from backend `.env`
  - Start command: `npm start`
  - Expose port from `PORT` env (service listens automatically)
  - Add frontend origin to `ALLOWED_ORIGINS`

## Email Notes
Configure SMTP credentials (e.g., Gmail App Password or a transactional provider). If SMTP is not set, the API safely skips email sending.

## WhatsApp
- Backend creates `wa.me` link in `POST /api/orders` response.
- Frontend floating button uses `VITE_WHATSAPP_NUMBER`.

## MongoDB
- Collection: `orders` (auto-created). Fields: name, phone, email, address, quantity, serviceType, pickupDate, notes, createdAt.

## Admin View
- Visit `/admin` on the frontend to see a simple table of all orders (client-side fetch of `GET /api/orders`).

## Styling
- Tailwind with maroon/gold/cream palette, Inter + Playfair fonts, responsive layout.

## Testing Checklist
- Backend: `POST /api/orders` with required fields returns 201 and WhatsApp link.
- Frontend: submit form shows loading, success/error messages, clears inputs on success.
- Admin page lists orders after creation.

