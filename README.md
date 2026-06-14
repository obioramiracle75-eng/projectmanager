# ProjectManager

This repo contains a full-stack task manager with separate `client/` and `server/` folders.

## Structure

- `client/` - React + TypeScript + Vite frontend
- `server/` - Express + TypeScript + Mongoose backend

## Local setup

1. Install dependencies
   - `cd client && npm install`
   - `cd server && npm install`

2. Create backend environment file
   - Copy `server/.env.example` to `server/.env`
   - Set `MONGO_URI` to your MongoDB connection string

3. Start the backend
   - `cd server && npm run dev`

4. Start the frontend
   - `cd client && npm run dev`

5. Open the frontend URL shown by Vite (usually `http://localhost:5173`)

## API URL

The frontend uses `VITE_API_URL` if provided. Otherwise it defaults to `http://localhost:5000`.

## Deployment

This repository is not a live hosted app by itself. To make it available via a link, deploy the frontend and backend to a hosting provider such as Vercel, Render, Railway, or Fly.io.

- Frontend: deploy the `client/` folder
- Backend: deploy the `server/` folder
- Set `MONGO_URI` in your backend environment
- Configure the deployed frontend to call the deployed backend using `VITE_API_URL`
