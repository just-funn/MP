import telegram
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes
import requests
import re
import logging

# --- CONFIGURATION ---
TELEGRAM_BOT_TOKEN = "8328674693:AAF_g72vveutHlueAzzZsD1RwpjcpqEfcRY"
GOOGLE_API_KEY = "AIzaSyB77EacAh0ILLBInl0gZPhf8Y0boXkVRNk"
SAFE_BROWSING_API_URL = f"https://safebrowsing.googleapis.com/v4/threatMatches:find?key={GOOGLE_API_KEY}"

# --- DISABLE LOGGING COMPLETELY ---
logging.getLogger().setLevel(logging.CRITICAL)

# --- SIMPLE URL VALIDATION REGEX ---
URL_REGEX = re.compile(r"^(https?:\/\/[^\s]+)$", re.IGNORECASE)


# --- FUNCTION: CHECK URL SAFETY ---
async def check_url_safety(url: str) -> str:
    """Check a URL against Google Safe Browsing API and return a user-friendly message."""
    payload = {
        "client": {"clientId": "telegram-url-checker", "clientVersion": "1.1.0"},
        "threatInfo": {
            "threatTypes": [
                "MALWARE",
                "SOCIAL_ENGINEERING",
                "UNWANTED_SOFTWARE",
                "POTENTIALLY_HARMFUL_APPLICATION",
            ],
            "platformTypes": ["ANY_PLATFORM"],
            "threatEntryTypes": ["URL"],
            "threatEntries": [{"url": url}],
        },
    }

    try:
        response = requests.post(SAFE_BROWSING_API_URL, json=payload, timeout=10)
        response.raise_for_status()
        data = response.json()

        if "matches" in data:
            threat_type = data["matches"][0]["threatType"]
            return f"🚨 *DANGER!*\nThis URL is **NOT SAFE**.\nThreat Type: `{threat_type}`"
        else:
            return "✅ *SAFE!*\nThis URL appears safe according to Google Safe Browsing."

    except Exception:
        return "⚠️ *Error:* Could not connect to Google Safe Browsing. Please try again later."


# --- COMMAND HANDLERS ---

async def start_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "👋 *Welcome to URL Safety Checker Bot!*\n\n"
        "Send me any link like `https://example.com` and I'll tell you if it's safe.",
        parse_mode=telegram.constants.ParseMode.MARKDOWN,
    )


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "🛠️ *Available Commands:*\n\n"
        "/start - Greet the bot\n"
        "/help - For any help\n"
        "/about - Know about this bot\n\n"
        "👉 Just send a link (starting with http/https) and I'll check if it's safe!",
        parse_mode=telegram.constants.ParseMode.MARKDOWN,
    )


async def about_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "🤖 *About This Bot*\n"
        "This bot uses the *Google Safe Browsing API* to detect harmful or unsafe URLs.\n\n"
        "🔒 Made with ❤️ using Python and Telegram Bot API.\n"
        "👥 *Our Team:*\n"
        "1) Onkar Ghadage\n"
        "2) Aarya Jadhav\n"
        "3) Zeenat Shaikh\n"
        "4) Vishwajeet Kumbhar",
        parse_mode=telegram.constants.ParseMode.MARKDOWN,
    )


# --- MESSAGE HANDLER ---

async def check_url_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = update.message.text.strip()

    if not URL_REGEX.match(text):
        await update.message.reply_text(
            "❗ That doesn’t look like a valid URL.\n"
            "Please send a full URL starting with `http://` or `https://`.",
            parse_mode=telegram.constants.ParseMode.MARKDOWN,
        )
        return

    await update.message.reply_text("🔎 Checking URL safety... Please wait ⏳")
    result = await check_url_safety(text)
    await update.message.reply_text(result, parse_mode=telegram.constants.ParseMode.MARKDOWN)


# --- MAIN FUNCTION ---

def main():
    if not TELEGRAM_BOT_TOKEN or not GOOGLE_API_KEY:
        return

    app = Application.builder().token(TELEGRAM_BOT_TOKEN).build()

    # Register handlers
    app.add_handler(CommandHandler("start", start_command))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(CommandHandler("about", about_command))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, check_url_message))

    print("🤖 Bot is running... Press Ctrl+C to stop.")
    app.run_polling()


if __name__ == "__main__":
    main()
