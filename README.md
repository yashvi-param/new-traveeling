
<img width="1899" height="901" alt="Screenshot 2026-02-03 111247" src="https://github.com/user-attachments/assets/eae56aa0-4301-4af8-82ee-51ca21bb66db" />

🌍 Travel Booking Application (React)

This is a React-based travel booking application that allows users to browse trips, view trip details, authenticate, book trips, and manage their bookings. The app uses React Router v6, protected routes, and React Bootstrap for UI layout.

🚀 Features

🏠 Home page

✈️ View all trips

📄 Trip detail page (dynamic routing)

🔐 Authentication (Login / Signup)
🛡️ Protected routes for booking

📝 Book a trip

📦 View user bookings

❌ Error handling with custom error page

📱 Responsive layout using React Bootstrap

🧩 Technologies Used

React

React Router DOM (v6)

React Bootstrap

JavaScript (ES6+)

CSS

📁 Project Structure
src/
│
├── components/
│   ├── ui/
│   │   ├── Home.jsx
│   │   └── ErrorElement.jsx
│   │
│   └── pages/
│       ├── Trips.jsx
│       ├── TripDetail.jsx
│       ├── BookingForm.jsx
│       └── MyBookings.jsx
│
├── auth/
│   └── Auth.jsx
│
├── routes/
│   ├── Layout.jsx
│   └── ProtectedRoutes.jsx
│
├── App.jsx
└── index.js

🛣️ Routing Overview

The application uses createBrowserRouter for routing.

Public Routes
Path	Component
/	Home
/trips	TripsData
/trips/:id	TripDetail
/auth	Auth
Protected Routes

(Accessible only after authentication)

Path	Component
/trip/:id/book	BookingForm
/myBooking	MyBookings
🔐 Protected Routes

The ProtectedRoutes component ensures that only authenticated users can:

Book a trip

View their bookings

Unauthenticated users are redirected to the authentication page.

❗ Error Handling

ErrorElement is used as a global error page.

Displays when an invalid route is accessed or a routing error occurs.

▶️ How to Run the Project

Clone the repository

git clone <repository-url>


Install dependencies

npm install


Start the development server

npm start


Open in browser

http://localhost:3000

📌 Key Concepts Used

Nested Routing

Dynamic Routes (:id)

Index Routes

Protected Routes

Layout Routes

Error Boundaries

Component-based architecture

⭐ Conclusion

This project demonstrates a real-world React routing structure with authentication and protected routes. It is ideal for learning React Router v6, route protection, and modular component design.
