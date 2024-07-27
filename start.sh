#!/bin/bash
# Navigate to the backend directory and start the backend server
cd backend
node server.js &

# Navigate back to the root and serve the Angular frontend
cd ../dist/portfolio
npx http-server -c-1 -p $PORT --proxy "http://localhost:$PORT?"