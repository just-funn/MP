# URL Safety Verification System

A modern web application and Telegram bot for checking URL safety and protecting users from malicious links, phishing attacks, and malware.

## 📋 Project Overview

URL Safety Verification System is an academic project designed to help users verify the safety of URLs before clicking them. The project includes a professional web interface and a Telegram bot, both powered by Google Safe Browsing API for real-time threat detection.

## ✨ Features

- **Web Dashboard**: Modern, responsive web interface with clean corporate design
- **Telegram Bot**: On-the-go URL verification directly in Telegram
- **Real-time Scanning**: Instant URL safety checks using Google Safe Browsing API
- **Threat Detection**: Identifies malware, phishing, social engineering, and harmful applications
- **User Authentication**: Secure admin login system (frontend demo)
- **Responsive Design**: Mobile-friendly interface that works on all devices

## 🛠️ Technology Stack

### Web Application
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript**: Client-side functionality and form validation
- **Font Awesome**: Professional icon library

### Telegram Bot
- **Python 3**: Core programming language
- **python-telegram-bot**: Telegram Bot API wrapper
- **Google Safe Browsing API**: URL threat detection
- **Requests**: HTTP library for API calls

## 📁 Project Structure

```
MP/
├── Web/
│   ├── assets/
│   │   ├── style.css          # Main stylesheet
│   │   └── app.js             # JavaScript functionality
│   ├── index.html             # Landing page
│   ├── signin.html            # Admin login page
│   ├── signup.html            # User registration page
│   └── dashboard.html         # URL checker dashboard
├── Telegram_bot/
│   └── URL_Safety_Checker_bot.py  # Telegram bot implementation
└── README.md
```

## 📱 Using the Application

### Web Interface

1. **Landing Page** (`index.html`)
   - Learn about URL safety and best practices
   - View features and benefits
   - Click "Get Started" to access the dashboard

2. **Sign In** (`signin.html`)
   - Enter credentials
   - Access the URL checker

3. **Dashboard** (`dashboard.html`)
   - Enter any URL in the input field
   - Click "Check URL Safety"
   - View instant results (Safe/Unsafe)
   - Access Telegram bot link

### Telegram Bot

1. **Start the bot**
   - Search for `@URL_Safety_Checker_bot` on Telegram
   - Send `/start` to begin

2. **Available Commands**
   - `/start` - Welcome message
   - `/help` - View available commands
   - `/about` - Learn about the bot and team

3. **Check URLs**
   - Simply send any URL (starting with http:// or https://)
   - Receive instant safety verification

## 👥 Team Members

1. Onkar Ghadage
2. Aarya Jadhav
3. Zeenat Shaikh
4. Vishwajeet Kumbhar

---

© 2025 URL Safety Verification System • Designed for Academic Project Use Only • All Rights Reserved
