# React Router - Practical Exercise

This project is a comprehensive exercise designed to master client-side navigation in React using **React Router v6/v7**. It covers everything from basic setup to dynamic routing and nested structures.

---

## 🎯 Learning Objectives

* **SPA Navigation**: Understanding the difference between SPA and classic multi-page navigation.
* **Setup**: Installing and configuring `BrowserRouter`.
* **Static Routes**: Creating fixed paths for pages like Home, About, and Contact.
* **Error Handling**: Implementing a Catch-All (404) route for unknown paths.
* **Navigation**: Building dynamic navigation with the `Link` component.
* **Dynamic Routing**: Handling Parameterized Routes (e.g., `/users/:userId`).
* **Hooks**: Extracting data from URLs using the `useParams` hook.
* **Structure**: Organizing routes efficiently with Nested Routes.

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: v20.19+ or v22.12+
* **React Knowledge**: Basic understanding of Hooks (`useState`, `useEffect`).

### Installation

```bash
npm install react-router-dom

```

### Setup

To enable routing, wrap your application in the `BrowserRouter` component within `main.jsx`:

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

```

---

## 🛠 Features Implemented

### 1. Static Navigation

Created dedicated page components in `src/pages/` and mapped them to specific paths:

* `/` → **Home**
* `/about` → **About**
* `/contact` → **Contact**
* `/blog` → **Blog**

### 2. Error Handling (404)

Implemented a wildcard route (`*`) to catch any undefined paths and display a user-friendly "Not Found" page.

### 3. Dynamic Routes

Used dynamic segments to handle multiple IDs for users and blog posts:

* `/users/:userId` → **User Profiles**
* `/blog/:postId` → **Blog Posts**

### 4. The useParams Hook

Successfully implemented `useParams` to retrieve parameters from the URL and display dynamic content.

---

## 📁 Project Structure

```text
src/
├── assets/             # Static assets like SVGs
├── components/         # Shared components
│   ├── Navigation.jsx
│   └── Navigation.css
├── data/               # Local data files
│   └── posts.js
├── pages/              # Page components with styles
│   ├── About.jsx & About.css
│   ├── Blog.jsx & Blog.css
│   ├── BlogPost.jsx & BlogPost.css
│   ├── Contact.jsx & Contact.css
│   ├── Home.jsx & Home.css
│   ├── NotFound.jsx & NotFound.css
│   ├── UserProfile.jsx & UserProfile.css
│   └── Users.jsx & Users.css
├── App.jsx             # Main routes & layout
├── index.css           # Global styles
└── main.jsx            # App entry point

```

---

## 💡 Important Notes on Deployment

When deploying this SPA to platforms like **GitHub Pages**, remember that refreshing a route like `/about` might lead to a 404 error from the server. To fix this:

* Use a `HashRouter` for simple static hosting.
* Or, configure your host (Netlify, Vercel, etc.) to redirect all requests to `index.html`.

---

### 🌟 Happy Learning!

**Crafted by The_Bozgun 2026**
