# 🍪 CookieHaven - Premium Handmade Cookie E-commerce Website

A beautiful, fully-functional e-commerce website for selling premium handmade cookies with modern authentication and shopping features.

## ✨ Features

### 🔐 Authentication
- **Email/Password Sign Up & Login** - Create an account with email and password
- **Google OAuth Integration** - Quick sign-in with Google
- **Persistent Authentication** - User sessions saved in local storage
- **User Profile Display** - Shows logged-in user name in navigation

### 🛒 Shopping Features
- **10 Premium Cookie Products** - Beautifully displayed with prices and descriptions
- **Add to Cart Functionality** - Add multiple cookies to your cart
- **Cart Management** - View cart items, quantities, and total price
- **Remove from Cart** - Easily remove unwanted items
- **Cart Persistence** - Cart saved in browser storage

### 🎨 Design Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI** - Beautiful gradient backgrounds and smooth animations
- **Smooth Animations** - Floating elements, fade-ins, and hover effects
- **Professional Color Scheme** - Warm brown and cream colors theme
- **Fully Functional** - No additional backend required for demo

### 📱 Pages & Sections
- **Hero Section** - Eye-catching landing area with call-to-action
- **Cookie Gallery** - Grid display of all 10 cookie products
- **About Section** - Information about CookieHaven
- **Contact Section** - Contact form for customer inquiries
- **Shopping Cart** - Modal for viewing and managing cart items
- **Navigation Bar** - Sticky navigation with quick access to all features

## 🍪 Available Cookies

1. **Chocolate Chip Bliss** - $3.99 - Classic with premium dark chocolate
2. **Double Chocolate Delight** - $4.49 - Rich chocolate with chunks
3. **Strawberry Shortbread** - $4.29 - Buttery with fresh strawberry
4. **Peanut Butter Cup** - $4.79 - Creamy peanut butter with chocolate
5. **Oatmeal Raisin Delight** - $3.49 - Chewy with plump raisins
6. **Lemon Zest Dream** - $4.19 - Tangy lemon with white chocolate
7. **Cinnamon Sugar Magic** - $3.89 - Soft with cinnamon and sugar
8. **Mint Chocolate Dream** - $4.59 - Cool mint with dark chocolate
9. **Coconut Paradise** - $4.09 - Tropical with toasted coconut flakes
10. **Salted Caramel Crunch** - $4.99 - Sweet caramel with sea salt

## 🚀 Live Demo

Visit the live website: [CookieHaven](https://lonewolf0111.github.io/Premium-Handmade-Cookie-E-commerce-Website/)

## 🎯 How to Use

1. **Sign Up** - Create an account with email/password or Google
2. **Browse Cookies** - Scroll through our delicious selection
3. **Add to Cart** - Click "Add to Cart" on any cookie
4. **View Cart** - Click the cart button to see your items
5. **Checkout** - Click "Proceed to Checkout" when ready

## 💾 Data Storage

- **User Accounts** - Stored in browser's localStorage
- **Shopping Cart** - Persisted in localStorage
- **Session Data** - Maintains between page refreshes

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No dependencies, pure JS functionality
- **LocalStorage API** - For data persistence
- **GitHub Pages** - For deployment

## 📂 File Structure

```
Premium-Handmade-Cookie-E-commerce-Website/
├── index.html    # Main HTML file
├── styles.css    # Complete stylesheet
├── script.js     # All JavaScript functionality
└── README.md     # This file
```

## ⭐ Key Features Highlights

### Authentication System
- Form validation
- Password confirmation
- Google OAuth simulation
- User profile management
- Logout functionality

### Cart System
- Add/remove items
- Quantity tracking
- Total price calculation
- Empty cart messaging
- Cart persistence

### UI/UX
- Smooth animations
- Responsive grid layout
- Mobile-friendly design
- Intuitive navigation
- Beautiful notifications

## 💡 Customization

### Add New Cookies
Edit the `cookies` array in `script.js`:
```javascript
{
    id: 11,
    name: "Your Cookie Name",
    emoji: "🍪",
    price: 4.99,
    description: "Your cookie description"
}
```

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #D4823F;
    --secondary-color: #8B5A3C;
    /* ... more colors */
}
```

## 📱 Browser Support

- Chrome/Chromium ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

## 🔒 Security Note

This is a demo website. In production, you should:
- Implement backend authentication
- Use HTTPS for data transmission
- Never store sensitive data in localStorage
- Implement real Google OAuth
- Add backend payment processing

## 📞 Support

For issues or questions, feel free to contact through the website's contact form.

---

Made with ❤️ and 🍪 by CookieHaven Team