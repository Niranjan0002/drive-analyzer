
# 🚀 Drive Analyzer

A full-stack Google Drive file management and analytics app built using **React** and **Flask**. This project integrates with the **Google Drive API** and provides a smart, interactive interface to browse, visualize, and manage your Google Drive files.

![App Preview](./preview.png) <!-- Optional: Add a screenshot or GIF -->

## 🌟 Features

- 🔐 Google OAuth 2.0 Authentication
- 📁 View All Files in a Folder-Based Hierarchy
- 📊 Storage Usage Visualization (Used Space, File Counts)
- 📌 Star/Favorite Files
- 📄 View, Download, and Delete Files
- 🕵️ Full-Text Search
- 📤 Drag-and-Drop Uploads
- 📚 Activity Timeline & Stats Cards
- ⚡ Responsive, Modern UI

---

## 🛠️ Tech Stack

| Frontend | Backend  | Auth & APIs            | Deployment (Optional)    |
|----------|----------|------------------------|--------------------------|
| React    | Flask    | Google Drive API v3    | Render (for deployment)  |
| Vite     | Flask-CORS | OAuth2 + Google Auth | GitHub Pages / Render    |

---

## 🧠 Architecture

```
drive-analyzer/
├── frontend/              # React + Vite + Tailwind UI
│   ├── components/
│   └── ...
├── backend/               # Flask server with Google OAuth & API integration
│   ├── app.py
│   └── ...
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Google OAuth Setup
- Go to [Google Cloud Console](https://console.cloud.google.com)
- Create OAuth 2.0 credentials
- Add the following redirect URIs:
  - `http://localhost:5000/oauth2callback`
- Download the `client_secret.json` and place it in the `backend/` folder

### 2. Clone & Setup

```bash
git clone https://github.com/Niranjan0002/drive-analyzer.git
cd drive-analyzer
```

### 3. Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # or source venv/bin/activate (Linux/Mac)
pip install -r requirements.txt
```

Create a `.env` file in `backend/`:

```
CLIENT_SECRET_FILE=client_secret.json
SCOPES=https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid
REDIRECT_URI=http://localhost:5000/oauth2callback
```

Run the backend:

```bash
python app.py
```

---

### 4. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in `frontend/`:

```
REACT_APP_BACKEND_URL=http://localhost:5000
```

Start the React app:

```bash
npm start
```

---

## 🎯 Use Case

> Imagine a modern file dashboard that gives you analytics, management, and insights into your Google Drive — that’s what Drive Analyzer delivers.

Perfect for:
- Personal file management
- Smart dashboards for cloud storage
- Technical demonstrations of full-stack OAuth2 integration

---

## 📸 Screenshots

<!-- Optional: Add screenshots in `/screenshots` folder and link here -->
<p float="left">
  <img src="./screenshots/dashboard.png" width="45%" />
  <img src="./screenshots/files.png" width="45%" />
</p>

---

## 🧪 Future Enhancements

- [ ] Add file preview (PDF, images)
- [ ] Role-based access (shared folders)
- [ ] Upload progress indicators
- [ ] Real-time collaboration (WebSockets)
- [ ] Dark Mode toggle 🌙

---

## 🙋‍♂️ Author

Made with ❤️ by **Niranjan B.**  
[GitHub](https://github.com/Niranjan0002) | [LinkedIn](https://linkedin.com/in/niranjan0002)
