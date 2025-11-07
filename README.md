 # 🛍️ Mock E-Commerce Cart — Backend

This is the **backend** for the **Mock E-Commerce Shopping Cart Application**, developed as part of the **Vibe Commerce Full Stack Internship Assignment**.
It is built using **Node.js**, **Express**, and **MongoDB (via Mongoose)** and provides RESTful APIs for managing products, cart, and checkout operations.

---

## 🚀 Tech Stack

| Feature     | Technology                                |
| ----------- | ----------------------------------------- |
| Runtime     | Node.js                                   |
| Framework   | Express.js                                |
| Database    | MongoDB (Mongoose ORM)                    |
| API Style   | REST (JSON)                               |
| Data Source | Fake Store API + Local Seeding            |
| Extras      | Error Handling, Mock User, DB Persistence |

---

## ✨ Features

✅ Fetch products (via Fake Store API or local seed)
✅ Add / Remove / View cart items
✅ Calculate total dynamically
✅ Checkout with receipt generation
✅ Auto-clear cart after checkout
✅ Mock user persistence in DB
✅ Centralized error handling

---

## 🧩 API Endpoints

| Method     | Endpoint        | Description                                           |
| ---------- | --------------- | ----------------------------------------------------- |
| **GET**    | `/api/products` | Fetch all products (from Fake Store API or seeded DB) |
| **POST**   | `/api/cart`     | Add or update cart item `{ productId, qty }`          |
| **GET**    | `/api/cart`     | Retrieve all cart items + total amount                |
| **DELETE** | `/api/cart/:id` | Remove item from cart by ID                           |
| **POST**   | `/api/checkout` | Checkout → generate mock receipt and clear cart       |

---

## 📦 Bonus Features Implemented

| Feature                           | Description                                                                |
| --------------------------------- | -------------------------------------------------------------------------- |
| 🧠 **Mock User**                  | A demo user (`demo@vibe.com`) is automatically created to store cart data. |
| 🌐 **Fake Store API Integration** | Fetches real products, images, and prices dynamically.                     |
| 🧮 **DB Persistence**             | All products, users, and cart items are stored in MongoDB.                 |
| ⚠️ **Error Handling**             | Graceful 400/404/500 responses with clear error messages.                  |
| 🧾 **Auto Cart Clear**            | Clears user’s cart after successful checkout.                              |

---

## 📁 Project Structure

```
mock-ecom-backend/
│
├── models/
│   ├── Product.js
│   ├── CartItem.js
│   └── User.js
│
├── routes/
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   └── checkoutRoutes.js
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/akashmhadgut/mock-ecom-backend
cd mock-ecom-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the backend root folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4️⃣ Start the development server

```bash
npm run dev
```

> Server runs at: `http://localhost:5000`

---

## 🧠 Example API Usage

### 📦 Fetch Products

```
GET /api/products
```

**Response:**

```json
[
  {
    "_id": "67376f4a5a3f8a13f8a8f601",
    "name": "Cotton T-Shirt",
    "price": 499,
    "image": "https://fakestoreapi.com/img/tshirt.png"
  }
]
```

---

### ➕ Add to Cart

```
POST /api/cart
Body: { "productId": "<PRODUCT_ID>", "qty": 2 }
```

**Response:**

```json
{
  "message": "Item added to cart",
  "cart": {
    "items": [
      { "productId": "67376f4a5a3f8a13f8a8f601", "qty": 2 }
    ]
  }
}
```

---

### 🛒 View Cart

```
GET /api/cart
```

**Response:**

```json
{
  "items": [
    {
      "_id": "67377688d12fba",
      "productId": {
        "name": "Cotton T-Shirt",
        "price": 499
      },
      "qty": 2
    }
  ],
  "total": 998
}
```

---

### ❌ Remove from Cart

```
DELETE /api/cart/:id
```

Removes a specific item from cart by ID.

---

### 💳 Checkout

```
POST /api/checkout
Body: { "name": "John Doe", "email": "john@example.com" }
```

**Response:**

```json
{
  "message": "Checkout successful",
  "receipt": {
    "name": "John Doe",
    "email": "john@example.com",
    "total": 998,
    "timestamp": "2025-11-06T18:40:00.000Z",
    "items": [
      { "product": "Cotton T-Shirt", "price": 499, "qty": 2 }
    ]
  }
}
```

---

## 🧰 Developer Notes

* The **cart** is linked to a mock user (`demo@vibe.com`), automatically created at startup.
* Products are pulled from **Fake Store API** or fallback to static seed data.
* Each route returns proper error codes (400, 404, 500) with helpful messages.
* After checkout, cart data is cleared automatically.

---

## 🌐 Frontend Repository

Frontend built with **React**, **Axios**, and **Bootstrap**:
🔗 [https://github.com/akashmhadgut/mock-ecom-frontend](https://github.com/akashmhadgut/mock-ecom-frontend)

---

## 🎥 Demo Video

🎬 [https://www.loom.com/share/94e7584b6469423d8f7f34a1264ce7ce](https://www.loom.com/share/94e7584b6469423d8f7f34a1264ce7ce)

---

## 🧑‍💻 Author

**Akash Mhadgut**
Full Stack Developer | Vibe Commerce Assignment
📧 Email: [akashmhadgut280@gmail.com](mailto:akashmhadgut280@gmail.com)

---

## 📜 License

This project is created for **educational and evaluation purposes** only.

 
