# WorkVault

WorkVault is a decentralized freelancing platform where **clients and freelancers connect using Web3 authentication**.  
Users can log in using their crypto wallet, create profiles, and collaborate securely.

The goal of WorkVault is to combine **freelancing + blockchain identity** to make hiring more transparent and secure.

---

## 🚀 Features

- 🔐 Wallet Authentication (Web3 login using wallet signature)
- 👤 User Profiles
  - Client profile
  - Freelancer profile
- 📝 Profile Completion Flow
- 🔔 Real-time Notifications
- 📂 Project & Work Management
- 🎨 Modern UI using Tailwind CSS + shadcn/ui

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- shadcn/ui
- Wagmi
- Ethers.js

### Backend
- Node.js
- Express.js
- MongoDB

### Blockchain
- Ethereum
- Solidity Smart Contracts

---

## 📁 Project Structure

```
workvault/
│
├── client/           # React frontend
├── server/           # Backend API
├── contracts/        # Solidity smart contracts
└── README.md
```

---

## 🔐 Authentication Flow

1. User connects their **crypto wallet**
2. Application retrieves the **wallet address**
3. User signs a **message**
4. Backend verifies the **wallet signature**
5. User session is created
6. If profile is incomplete → redirect to **Complete Profile page**

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/workvault.git
```

Navigate to the project folder

```bash
cd workvault
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory.

```
VITE_API_URL=your_backend_url
MONGO_URI=your_database_url
JWT_SECRET=your_secret_key
```

---

## 📌 Future Improvements

- Smart contract based payments
- Escrow system
- Reputation system
- Decentralized storage (IPFS)
- Real-time chat system

---

## 👨‍💻 Author

**Jaydip Jadhav**

- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourprofile

---

## 📜 License

This project is licensed under the **MIT License**.