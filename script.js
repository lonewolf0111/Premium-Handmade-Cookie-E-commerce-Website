// Cookie Products Data
const cookies = [
    {
        id: 1,
        name: "Chocolate Chip Bliss",
        emoji: "🍪",
        price: 3.99,
        description: "Classic chocolate chip cookies loaded with premium dark chocolate"
    },
    {
        id: 2,
        name: "Double Chocolate Delight",
        emoji: "🍫",
        price: 4.49,
        description: "Rich chocolate cookie with chocolate chunks and cocoa dust"
    },
    {
        id: 3,
        name: "Strawberry Shortbread",
        emoji: "🍓",
        price: 4.29,
        description: "Buttery shortbread with fresh strawberry pieces"
    },
    {
        id: 4,
        name: "Peanut Butter Cup",
        emoji: "🥜",
        price: 4.79,
        description: "Creamy peanut butter with chocolate cups inside"
    },
    {
        id: 5,
        name: "Oatmeal Raisin Delight",
        emoji: "🌾",
        price: 3.49,
        description: "Chewy oatmeal cookies packed with plump raisins"
    },
    {
        id: 6,
        name: "Lemon Zest Dream",
        emoji: "🍋",
        price: 4.19,
        description: "Tangy lemon-flavored cookies with white chocolate chips"
    },
    {
        id: 7,
        name: "Cinnamon Sugar Magic",
        emoji: "✨",
        price: 3.89,
        description: "Soft cookies coated with cinnamon and brown sugar"
    },
    {
        id: 8,
        name: "Mint Chocolate Dream",
        emoji: "🌿",
        price: 4.59,
        description: "Cool mint flavor paired with rich dark chocolate chunks"
    },
    {
        id: 9,
        name: "Coconut Paradise",
        emoji: "🥥",
        price: 4.09,
        description: "Tropical coconut cookies with toasted coconut flakes"
    },
    {
        id: 10,
        name: "Salted Caramel Crunch",
        emoji: "🍯",
        price: 4.99,
        description: "Sweet caramel with sea salt and toffee bits"
    }
];

// Cart Management
let cart = [];

// DOM Elements
const authModal = document.getElementById('authModal');
const cartModal = document.getElementById('cartModal');
const loginBtn = document.getElementById('loginBtn');
const cartBtn = document.getElementById('cartBtn');
const cookiesGrid = document.getElementById('cookiesGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const closeButtons = document.querySelectorAll('.close');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const contactForm = document.getElementById('contactForm');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCookies();
    setupEventListeners();
    loadCartFromStorage();
    updateLoginButton();
});

// Setup Event Listeners
function setupEventListeners() {
    // Modal handlers
    loginBtn.addEventListener('click', () => openAuthModal());
    cartBtn.addEventListener('click', () => openCartModal());
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.remove('show');
        });
    });

    // Tab switching
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Form submissions
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (signupForm) signupForm.addEventListener('submit', handleSignup);
    if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === authModal) authModal.classList.remove('show');
        if (e.target === cartModal) cartModal.classList.remove('show');
    });
}

// Render Cookies
function renderCookies() {
    cookiesGrid.innerHTML = cookies.map(cookie => `
        <div class="cookie-card">
            <div class="cookie-image">${cookie.emoji}</div>
            <div class="cookie-content">
                <h3 class="cookie-name">${cookie.name}</h3>
                <p class="cookie-description">${cookie.description}</p>
                <div class="cookie-price">$${cookie.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${cookie.id})">
                    Add to Cart 🛒
                </button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(cookieId) {
    const cookie = cookies.find(c => c.id === cookieId);
    const existingItem = cart.find(item => item.id === cookieId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...cookie, quantity: 1 });
    }

    saveCartToStorage();
    updateCartDisplay();
    showNotification(`${cookie.name} added to cart! 🎉`);
}

// Remove from Cart
function removeFromCart(cookieId) {
    cart = cart.filter(item => item.id !== cookieId);
    saveCartToStorage();
    updateCartDisplay();
}

// Update Cart Display
function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><p>Your cart is empty 😔</p><p>Start adding some delicious cookies!</p></div>';
        cartTotal.textContent = '0.00';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.emoji} ${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity}</div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);
    }
}

// Modal Functions
function openAuthModal() {
    authModal.classList.add('show');
    switchTab('login');
}

function openCartModal() {
    cartModal.classList.add('show');
}

function switchTab(tabName) {
    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
}

// Authentication Functions
function handleLogin(e) {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    if (email && password) {
        saveUserToStorage({ email, name: email.split('@')[0], method: 'email' });
        showNotification(`Welcome back, ${email.split('@')[0]}! 👋`);
        authModal.classList.remove('show');
        updateLoginButton();
        loginForm.reset();
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const password = e.target.elements[2].value;
    const confirmPassword = e.target.elements[3].value;

    if (password !== confirmPassword) {
        showNotification('Passwords do not match! ❌', 'error');
        return;
    }

    if (password.length < 6) {
        showNotification('Password must be at least 6 characters! ❌', 'error');
        return;
    }

    saveUserToStorage({ email, name, method: 'email' });
    showNotification(`Welcome, ${name}! Your account has been created! 🎉`);
    authModal.classList.remove('show');
    updateLoginButton();
    signupForm.reset();
}

function loginWithGoogle() {
    saveUserToStorage({ 
        email: 'user@gmail.com', 
        name: 'Google User',
        method: 'google'
    });
    showNotification('Logged in with Google! 🚀');
    authModal.classList.remove('show');
    updateLoginButton();
}

function signupWithGoogle() {
    saveUserToStorage({ 
        email: 'newuser@gmail.com', 
        name: 'New Google User',
        method: 'google'
    });
    showNotification('Account created with Google! 🎉');
    authModal.classList.remove('show');
    updateLoginButton();
}

function handleContactSubmit(e) {
    e.preventDefault();
    const name = e.target.elements[0].value;

    showNotification(`Thanks for reaching out, ${name}! We'll get back to you soon! 📧`);
    contactForm.reset();
}

// Storage Functions
function saveUserToStorage(user) {
    localStorage.setItem('cookieUser', JSON.stringify(user));
}

function getUserFromStorage() {
    const user = localStorage.getItem('cookieUser');
    return user ? JSON.parse(user) : null;
}

function saveCartToStorage() {
    localStorage.setItem('cookieCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cookieCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Update Login Button
function updateLoginButton() {
    const user = getUserFromStorage();
    if (user) {
        loginBtn.textContent = `👤 ${user.name}`;
        loginBtn.onclick = logout;
    }
}

function logout() {
    localStorage.removeItem('cookieUser');
    showNotification('You have been logged out! 👋');
    loginBtn.textContent = 'Login';
    loginBtn.onclick = () => openAuthModal();
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'error' ? '#e74c3c' : '#27ae60'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}