# 🌍 Wanderlust – Property Listing & Booking Web App

Wanderlust is a full-stack Airbnb-inspired web application where users can browse property listings, view details, register/login, and book stays. It’s built using **HTML, CSS, JavaScript** for the frontend, **Node.js and Express.js** for the backend, and **MongoDB** for database management.

---

## 🔗 Live Links


- 💻 **Frontend Repo:** https://github.com/hd84339/wanderlust
- 🔧 **Backend Repo:** https://github.com/hd84339/wanderlust
- 🌐 **Frontend Live Site (optional):** https://wanderlust-f7lf.onrender.com

---

## 🛠️ Tech Stack

### Frontend:
- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB (via MongoDB Atlas)

---

## ✅ Features

- 🏠 Homepage displaying property cards (image, title, location, price)
- 📄 Listing Detail Page with full description and booking option
- 🔐 User Authentication (Register/Login with JWT)
- 🗓️ Booking Functionality with booking form
- 📦 RESTful APIs:  
  - `GET /listings`  
  - `GET /listings/:id`  
  - `POST /bookings`  
  - `POST /auth/register`, `POST /auth/login`
- 💾 Database Models: User, Listing, Booking

---

## 🔐 Security Features

- JWT-based authentication for secure login
- Passwords hashed using **bcrypt**
- Input validation and sanitization

---

## 🚀 Deployment

- **Backend:** Deployed on https://wanderlust-f7lf.onrender.com
- **Database:** Hosted on MongoDB Atlas
- **Frontend:** Can be deployed on Netlify or Vercel

---

## 🧠 Future Improvements

- Real-time chat between guest and host (via Socket.io)
- Search filters (location, price range, availability)
- Google Maps integration for location-based browsing
- Payment gateway integration (e.g., Stripe)

---

## 🙋‍♂️ Developer

**Harsh Dubey**  
Passionate full-stack developer | Learning MERN stack  
📫 nkedin.com/in/harsh-dubey-498498256/

---

## 📂 Getting Started (Local Development)

```bash
# Clone the backend repo
git clone https://github.com/your-backend-repo.git
cd backend
npm install
npm start

# Clone the frontend repo
git clone https://github.com/your-frontend-repo.git
cd frontend
# Open index.html in browser or use Live Server
