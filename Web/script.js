// Normalize URL to ensure consistent format
function normalizeURL(url) {
    try {
        const urlObj = new URL(url);
        // Remove trailing slash from pathname if it's just "/"
        if (urlObj.pathname === '/') {
            urlObj.pathname = '';
        }
        // Sort query parameters for consistency
        urlObj.searchParams.sort();
        // Convert to lowercase for case-insensitive comparison
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
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

// Check if URL is in a list of known unsafe patterns (for demo purposes)
function isKnownUnsafePattern(url) {
    const unsafePatterns = [
        'malware',
        'phishing',
        'virus',
        'hack',
        'scam',
        'fraud',
        'suspicious'
    ];
    
    const lowerUrl = url.toLowerCase();
    return unsafePatterns.some(pattern => lowerUrl.includes(pattern));
}

function checkURL() {
    const input = document.getElementById('urlInput');
    const url = input.value.trim();
    const loading = document.getElementById('loading');
    const result = document.getElementById('result');

    result.classList.remove('show');

    if (!url) {
        showResult('⚠️ Please enter a URL', 'unsafe');
        return;
    }

    if (!isValidURL(url)) {
        showResult('❌ Invalid URL format', 'unsafe');
        return;
    }

    loading.classList.add('show');
    
    // Simulate API check with consistent results
    setTimeout(() => {
        loading.classList.remove('show');
        
        // Check for known unsafe patterns first
        if (isKnownUnsafePattern(url)) {
            showResult('⚠️ WARNING: Potentially UNSAFE<br><small>This URL may contain threats</small>', 'unsafe');
            return;
        }
        
        // Use hash-based consistent check for demo purposes
        // The same URL will always produce the same result
        const urlHash = hashURL(url);
        const isSafe = urlHash % 10 >= 3; // 70% chance of being safe, but consistent
        
        if (isSafe) {
            showResult('✅ URL appears to be SAFE<br><small>No threats detected</small>', 'safe');
        } else {
            showResult('⚠️ WARNING: Potentially UNSAFE<br><small>This URL may contain threats</small>', 'unsafe');
        }
    }, 1500);
}

function showResult(message, type) {
    const result = document.getElementById('result');
    result.innerHTML = message;
    result.className = 'result show ' + type;
}

function isValidURL(string) {
    try {
        const url = new URL(string);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
        return false;
    }
}

// Allow Enter key to trigger check
document.getElementById('urlInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkURL();
    }
});