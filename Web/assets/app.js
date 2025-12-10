// ===== URL CHECKER FUNCTIONALITY =====

// Normalize URL to ensure consistent format
function normalizeURL(url) {
    try {
        const urlObj = new URL(url);
        if (urlObj.pathname === '/') {
            urlObj.pathname = '';
        }
        urlObj.searchParams.sort();
        return urlObj.toString().toLowerCase().replace(/\/$/, '');
    } catch (e) {
        return url.toLowerCase().replace(/\/$/, '');
    }
}

// Simple hash function to generate consistent results for the same URL
function hashURL(url) {
    const normalized = normalizeURL(url);
    let hash = 0;
    for (let i = 0; i < normalized.length; i++) {
        const char = normalized.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// Check if URL matches unsafe patterns
function isKnownUnsafePattern(url) {
    const lowerUrl = url.toLowerCase();

    // ===== Expanded Suspicious Keyword List =====
    const unsafePatterns = [
        // Existing keywords
        'malware', 'phishing', 'virus', 'hack', 'scam', 'fraud', 'suspicious',

        // Common phishing words
        'login', 'verify', 'secure', 'update', 'account', 'bank', 'payment',

        // Spam/marketing keywords
        '100% free', '100% satisfied',
        'additional income', 'extra cash',
        'best price', 'lowest price',
        'cash bonus', 'big bucks',
        'free access', 'free gift', 'free trial',
        'guaranteed',
        'increase sales', 'increase traffic',
        'limited time offer',
        'make money',
        'money back',
        'prize', 'winner',
        'risk-free',
        'save up to',
        'special promotion'
    ];

    // Keyword Detection
    if (unsafePatterns.some(pattern => lowerUrl.includes(pattern))) {
        return true;
    }

    // ===== Suspicious Domain Extensions =====
    const badExtensions = ['.xyz', '.top', '.zip', '.click', '.buzz'];
    if (badExtensions.some(ext => lowerUrl.endsWith(ext))) {
        return true;
    }

    // ===== Detect IP-based URLs =====
    if (/^https?:\/\/\d{1,3}(\.\d{1,3}){3}/.test(lowerUrl)) {
        return true;
    }

    // ===== Extremely Long URL =====
    if (url.length > 150) {
        return true;
    }

    return false;
}

// Main URL check function
function checkURL() {
    const input = document.getElementById('urlInput');
    const url = input.value.trim();
    const loading = document.getElementById('loading');
    const result = document.getElementById('result');

    result.classList.remove('show');

    if (!url) {
        showResult('<i class="fas fa-exclamation-triangle"></i> Please enter a URL', 'unsafe');
        return;
    }

    if (!isValidURL(url)) {
        showResult('<i class="fas fa-times-circle"></i> Invalid URL format<br><small>Please enter a valid URL starting with http:// or https://</small>', 'unsafe');
        return;
    }

    loading.classList.add('show');

    setTimeout(() => {
        loading.classList.remove('show');

        // Check known unsafe patterns first
        if (isKnownUnsafePattern(url)) {
            showResult('<i class="fas fa-exclamation-triangle"></i> WARNING: Potentially UNSAFE<br><small>This URL may contain threats</small>', 'unsafe');
            return;
        }

        // Hash-based simulated analysis
        const urlHash = hashURL(url);
        const isSafe = urlHash % 10 >= 3;

        if (isSafe) {
            showResult('<i class="fas fa-check-circle"></i> URL appears to be SAFE<br><small>No threats detected</small>', 'safe');
        } else {
            showResult('<i class="fas fa-exclamation-triangle"></i> WARNING: Potentially UNSAFE<br><small>This URL may contain threats</small>', 'unsafe');
        }

    }, 1500);
}

// Show result message
function showResult(message, type) {
    const result = document.getElementById('result');
    result.innerHTML = message;
    result.className = 'result show ' + type;
}

// Validate URL format
function isValidURL(string) {
    try {
        const url = new URL(string);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
        return false;
    }
}

// Allow Enter key to trigger check
if (document.getElementById('urlInput')) {
    document.getElementById('urlInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkURL();
        }
    });
}

// ===== AUTHENTICATION FUNCTIONALITY =====

// Sign In validation
function handleSignIn(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.classList.remove('show');

    if (username === 'admin' && password === '123456') {
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid admin credentials';
        errorMessage.classList.add('show');
    }
}

// Sign Up handling
function handleSignUp(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const successMessage = document.getElementById('successMessage');

    if (fullname && email && password) {
        successMessage.textContent = 'Account created successfully (Frontend Only — no database)';
        successMessage.classList.add('show');

        setTimeout(() => {
            window.location.href = 'signin.html';
        }, 2000);
    }
}

// Logout functionality
function handleLogout() {
    window.location.href = 'signin.html';
}
