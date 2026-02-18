🛒 Micro Marketplace App (Full Stack + Mobile)

A full-stack marketplace application built with MERN stack and React Native (Expo).
Users can register, login, browse products, search with pagination, and mark favorites.

🌐 Live Demo

🔗 Frontend (Web): https://marketplace-fullstack-ix98.onrender.com/

🔗 Backend API: https://marketplace-fullstack-backend.onrender.com

📱 Mobile App: Run using Expo Go (see setup below)

⚠ Replace the above links with your actual deployed URLs.

📸 Screenshots
🖥 Web App

Products Page
<img width="1918" height="400" alt="image" src="https://github.com/user-attachments/assets/dd37e7a8-bc80-4365-a10a-dae5cf27d409" />

Login/Register Page
<img width="1919" height="400" alt="image" src="https://github.com/user-attachments/assets/c880bc71-ba76-49c3-8b80-8835608c2c0f" />
<img width="1919" height="400" alt="image" src="https://github.com/user-attachments/assets/162bae7f-55ac-49b8-930b-ad22dcad521a" />

📱 Mobile App (Expo)

Peoducts/Login/Register page

<img width="215" height="400" alt="image" src="https://github.com/user-attachments/assets/db353010-8fa0-41c4-9e90-0dc34b029ef8" />
<img width="215" height="400" alt="image" src="https://github.com/user-attachments/assets/dd3a3456-97f9-4050-a8bc-602e9246f046" />
<img width="215" height="400" alt="image" src="https://github.com/user-attachments/assets/40b283ce-385e-480a-8deb-b698de9bd31b" />


🚀 Features
✅ Authentication

User Register

User Login (JWT Based)

Protected Routes

🛍 Product System

Product Listing

Search Functionality

Pagination

Add to Favorites

📱 Mobile Support

Built using React Native (Expo)

API Integration with Backend

Same Auth + Product Flow

🛠 Tech Stack
Backend

Node.js

Express.js

MongoDB (Atlas)

JWT Authentication

CORS Enabled

Frontend (Web)

React.js

Vite

Tailwind CSS

Axios

Mobile

React Native

Expo

Axios

⚙️ Local Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/marketplace-fullstack.git
cd marketplace-fullstack

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Run backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Runs on:

http://localhost:5173

4️⃣ Mobile Setup (Expo)
cd mobile
npm install
npx expo start


📱 Install Expo Go on your phone
Scan QR code
App will open like native app.

🌍 Deployment
Backend → Render

Root Directory: backend

Build: npm install

Start: node index.js

Add Environment Variables in Render dashboard

Frontend → Render (Static Site)

Root Directory: frontend

Build Command: npm install && npm run build

Publish Directory: dist

📂 Project Structure
marketplace-fullstack/
│
├── backend/
├── frontend/
├── mobile/
├── screenshots/
└── README.md

🔐 Environment Variables

Never push .env file to GitHub.
.gitignore includes:

node_modules/
.env
dist/
.expo/

👨‍💻 Author

Vinay
Full Stack Developer (MERN + React Native)
