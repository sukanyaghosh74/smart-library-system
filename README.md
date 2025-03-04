# 📚 Smart Library System - Backend
A modern library management system that allows students to easily **find, borrow, and return books** while offering **recommendations and analytics** to enhance the user experience.

---

## 🚀 Features

### 📖 **Book Management**
✔️ Add, update, and remove books from the library.  
✔️ Search for books using a **Google-like** search (simplified).  
✔️ Users can **rate and review** books.

### 🔄 **Smart Borrowing System**
✔️ Handle book **checkouts and returns**.  
✔️ **Calculate due dates** and track overdue books.  
✔️ **Fine Calculation** for overdue books.  
✔️ **Reservation System** – reserve unavailable books.

### 🤖 **Book Recommendations**
✔️ Personalized recommendations based on **user reading history**.  
✔️ Display **popular books** across different categories.  
✔️ Factor in **user ratings** to recommend books.

### 🎯 **Bonus Features** (Brownie Points 🧁)
✔️ **Advanced Search** – filter by **author, genre, and availability**.  
✔️ **Analytics Dashboard** – track **most borrowed books & genres**.  
✔️ **User Reading History** – store a history of borrowed books.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose ODM)  
- **Authentication**: JWT (JSON Web Tokens)  
- **API Documentation**: Swagger / Postman  

---

## 📦 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/sukanyaghosh74/smart-library-system.git
cd smart-library-system

# **📚 Smart Library System API Documentation**

### **Base URL**

```
http://localhost:5000/api
```

(Replace `localhost:5000` with your actual deployment URL)

---

## **🔐 Authentication**

### **1️⃣ Register a User**

#### **Endpoint:** `POST /auth/register`

- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": "654321",
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
  }
  ```

### **2️⃣ User Login**

#### **Endpoint:** `POST /auth/login`

- **Request Body:**
  ```json
  {
    "email": "johndoe@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your-jwt-token",
    "user": {
      "id": "654321",
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
  }
  ```

---

## **📖 Book Management**

### **3️⃣ Add a New Book (Admin Only)**

#### **Endpoint:** `POST /books`

- **Headers:**
  ```json
  {
    "Authorization": "Bearer your-jwt-token"
  }
  ```
- **Request Body:**
  ```json
  {
    "isbn": "978-3-16-148410-0",
    "title": "Sample Book",
    "author": "Author Name",
    "genre": ["Fiction", "Mystery"],
    "copies": 3,
    "available_copies": 3,
    "location": "Section A-12"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book added successfully",
    "book": {
      "isbn": "978-3-16-148410-0",
      "title": "Sample Book",
      "author": "Author Name",
      "genre": ["Fiction", "Mystery"],
      "copies": 3,
      "available_copies": 3,
      "location": "Section A-12",
      "borrowed_count": 0
    }
  }
  ```

### **4️⃣ Search for Books**

#### **Endpoint:** `GET /books/search?q={query}`

- **Example:**
  ```
  GET /books/search?q=mystery
  ```
- **Response:**
  ```json
  [
    {
      "isbn": "978-3-16-148410-0",
      "title": "Mystery Novel",
      "author": "Jane Doe",
      "genre": ["Mystery", "Thriller"],
      "copies": 5,
      "available_copies": 2,
      "rating": 4.5
    }
  ]
  ```

### **5️⃣ Get Book Details**

#### **Endpoint:** `GET /books/:isbn`

- **Example:**
  ```
  GET /books/978-3-16-148410-0
  ```
- **Response:**
  ```json
  {
    "isbn": "978-3-16-148410-0",
    "title": "Sample Book",
    "author": "Author Name",
    "genre": ["Fiction", "Mystery"],
    "copies": 3,
    "available_copies": 2,
    "location": "Section A-12",
    "rating": 4.5,
    "borrowed_count": 15
  }
  ```

---

## **📚 Borrowing System**

### **6️⃣ Borrow a Book**

#### **Endpoint:** `POST /books/borrow/:isbn`

- **Headers:**
  ```json
  {
    "Authorization": "Bearer your-jwt-token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book borrowed successfully",
    "due_date": "2025-03-18"
  }
  ```

### **7️⃣ Return a Book**

#### **Endpoint:** `POST /books/return/:isbn`

- **Headers:**
  ```json
  {
    "Authorization": "Bearer your-jwt-token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book returned successfully",
    "fine": 0
  }
  ```

---

## **🚀 How to Run the Backend Locally**

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/sukanyaghosh74/smart-library-system.git
cd smart-library-system
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Configure Environment Variables**

- Create a `.env` file and add:
  ```
  PORT=5000
  MONGO_URI=your-mongodb-connection-string
  JWT_SECRET=your-secret-key
  ```

### **4️⃣ Start the Server**

```sh
npm start
```

(Backend will run on ``)

