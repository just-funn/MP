# URL Safety Checker

A modern web application and Telegram bot for checking URL safety and protecting users from malicious links, phishing attacks, and malware.

## 📋 Project Overview

URL Safety Checker is an academic project designed to help users verify the safety of URLs before clicking them. The project includes a professional web interface and a Telegram bot, both powered by Google Safe Browsing API for real-time threat detection.

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

## 🚀 Getting Started

### Web Application

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MP/Web
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     ```
   - Navigate to `http://localhost:8000`

3. **Login Credentials** (Frontend Demo)
   - Username: `admin`
   - Password: `123456`

### Telegram Bot

1. **Install dependencies**
   ```bash
   cd MP/Telegram_bot
   pip install python-telegram-bot requests
   ```

2. **Configure API Keys**
   - Get a Telegram Bot Token from [@BotFather](https://t.me/botfather)
   - Get a Google Safe Browsing API key from [Google Cloud Console](https://console.cloud.google.com/)
   - Update the credentials in `URL_Safety_Checker_bot.py`:
     ```python
     TELEGRAM_BOT_TOKEN = "your_bot_token_here"
     GOOGLE_API_KEY = "your_api_key_here"
     ```

3. **Run the bot**
   ```bash
   python URL_Safety_Checker_bot.py
   ```

## 📱 Using the Application

### Web Interface

1. **Landing Page** (`index.html`)
   - Learn about URL safety and best practices
   - View features and benefits
   - Click "Get Started" to access the dashboard

2. **Sign In** (`signin.html`)
   - Enter admin credentials
   - Access the URL checker dashboard

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

## 🎨 Design Features

- **Clean Corporate Theme**: Professional blue gradient background with white cards
- **Responsive Layout**: Adapts to all screen sizes (desktop, tablet, mobile)
- **Smooth Animations**: Fade-in, slide-up, and hover effects
- **Accessibility**: Proper labels, ARIA attributes, and semantic HTML
- **Modern UI/UX**: Card-based layout similar to SaaS applications

## 🔒 Security Features

- **Google Safe Browsing API**: Industry-standard threat detection
- **Pattern Detection**: Identifies suspicious keywords in URLs
- **Consistent Results**: Hash-based verification for demo purposes
- **No Data Storage**: Frontend-only authentication (no database)

## 👥 Team Members

1. Onkar Ghadage
2. Aarya Jadhav
3. Zeenat Shaikh
4. Vishwajeet Kumbhar

## 📝 Notes

- This is an **academic project** designed for educational purposes
- The web application uses frontend-only validation (no backend database)
- For production use, implement proper backend authentication and database
- Keep API keys secure and never commit them to version control
- Use environment variables for sensitive credentials

## 🔮 Future Enhancements

- Backend API integration
- User account management with database
- URL history and analytics
- Batch URL checking
- Browser extension
- API rate limiting and caching
- Advanced threat intelligence

## 📄 License

This project is designed for academic use only. All rights reserved.

## 🤝 Contributing

This is an academic project. For suggestions or improvements, please contact the team members.

## 📞 Support

For issues or questions:
- Check the Telegram bot: [@URL_Safety_Checker_bot](https://t.me/URL_Safety_Checker_bot)
- Contact the development team

---

© 2025 URL Safety Checker • Designed for Academic Project Use Only • All Rights Reserved