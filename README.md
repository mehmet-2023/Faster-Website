# 🚀 Faster – Launch & Demo Website

This repository contains the official **launch website** and playable **demo page** for **Faster**, a fast-paced mobile game designed to challenge your reflexes and color perception.

---

## 🎮 About the Game

**Faster** is a minimalist, reflex-based mobile game where players must:
- 🟢 React to the correct color in time
- 🧠 Stay sharp under pressure
- ❌ Avoid mistakes to survive the speed!

Built for quick and addictive gameplay – perfect for short, intense play sessions.

---

## 🌐 Website Overview

### `index.html` – Main Landing Page
- Game overview and description
- Teaser video (`reklam_yatay.mp4`)
- Call-to-action to try the demo

### `demo.html` – Playable Demo Page
- A lightweight, browser-based playable version of Faster
- Users can test reflexes and leave feedback

### `privacy.html` – Privacy Policy
- Transparency about user data handling and analytics

---

## 📁 Project Structure

```bash
.
├── scripts/
│   ├── comments.json         # Stores demo page comments
│   ├── get-comments.php      # Loads comments from the server
│   ├── online.js             # Tracks online user activity
│   ├── script.js             # Core frontend logic
│   ├── server.js             # Optional Node.js server
│   └── submit.php            # Handles comment submission
│
├── styles/
│   ├── styles.css            # Base styling for the site
│   └── styles_online.css     # Styling for online status UI
│
├── demo.html                 # Playable demo page
├── index.html                # Game landing page
├── privacy.html              # Privacy policy
└── reklam_yatay.mp4          # Game teaser/ad video
