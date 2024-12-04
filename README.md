Church Finder App
A React and Node.js application that allows users to find churches in their area, set preferences, and view detailed information about each church. The app includes user authentication (sign-up and login) and a preference-based search system.

Features
User Authentication:

Secure sign-up and login system using bcrypt for password hashing.
User preferences are saved to the database.
Preferences:

Set preferences like denomination, church size, worship style, language, service times, and childcare availability.
Find churches that match user preferences.
Church Information:

Display detailed information about churches, including location, worship style, and additional attributes.
Responsive Design:

Optimized for desktop and mobile views using Material-UI.
Technologies Used
Frontend
React: Dynamic and interactive user interfaces.
Material-UI (MUI): Modern and responsive design system.
Axios: HTTP requests to the backend.
Backend
Node.js: Server-side runtime.
Express.js: Web framework for handling routes and API requests.
MongoDB Atlas: Cloud-based database for storing user and church data.
bcrypt: Secure password hashing.
dotenv: Environment variable management.
Installation
Prerequisites
Node.js installed (v16+ recommended).
MongoDB Atlas account for the database.
Backend Setup
Navigate to the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend/ folder:

env
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the backend server:

bash
Copy code
node server.js
Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the frontend/ folder:

env
Copy code
REACT_APP_API_URL=http://localhost:5000
Start the React development server:

bash
Copy code
npm start
Folder Structure
bash
Copy code
project/
├── backend/               # Node.js backend
│   ├── server.js          # Entry point for backend
│   ├── db.js              # MongoDB connection setup
│   ├── models/            # Mongoose models
│   │   ├── User.js        # User schema
│   ├── routes/            # Express routes
│   │   ├── userRoutes.js  # User authentication routes
│   ├── .env               # Environment variables (excluded in .gitignore)
│   ├── package.json       # Backend dependencies
├── frontend/              # React frontend
│   ├── src/               # React source code
│   │   ├── components/    # Reusable components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SignUpForm.tsx
│   │   │   ├── PreferencesForm.tsx
│   │   ├── pages/         # Page components
│   │   │   ├── HomePage.tsx
│   │   │   ├── SignUpPage.tsx
│   │   │   ├── PreferencesPage.tsx
│   │   │   ├── LoginPage.tsx
│   ├── public/            # Static assets
│   ├── .env               # Frontend environment variables
│   ├── package.json       # Frontend dependencies
Usage
Sign Up:

Create an account by entering your name, email, and password on the sign-up page.
Set Preferences:

Specify preferences such as denomination, size, worship style, and service times.
Find Churches:

View a list of churches that match your preferences.
Login:

Log in to save and update your preferences.
API Endpoints
User Routes (/api/users)
POST /signup: Register a new user.
POST /login: Authenticate an existing user.
Environment Variables
Backend
env
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Frontend
env
Copy code
REACT_APP_API_URL=http://localhost:5000
To-Do
Add a map view to display church locations.
Implement advanced search filters.
Allow users to add and manage their own church listings.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Add feature-name"
Push to the branch:
bash
Copy code
git push origin feature-name
Create a pull request.
License
This project is licensed under the MIT License. See LICENSE for more information.