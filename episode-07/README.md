# Namaste React - Episode 07: Finding The Path

## Overview

Episode 07 focuses on understanding how React applications manage assets, React Hooks behavior, Single Page Applications (SPA), and modern routing techniques.

This episode strengthens core React concepts while explaining how navigation works in modern web applications.

---

# Topics Covered

## 1. Different Ways to Add Images in React

React provides multiple ways to display images.

### ES6 Import

```javascript
import logo from "./logo.png";

<img src={logo} alt="Logo" />;
```

### Public Folder

```jsx
<img src="/logo.png" alt="Logo" />
```

### Remote URL

```jsx
<img src="https://example.com/logo.png" alt="Logo" />
```

### CSS Background Image

```css
.hero {
    background-image: url("/banner.jpg");
}
```

---

## 2. Understanding useState()

`useState()` returns an array containing:

- Current state value
- State updater function

Example:

```javascript
const [count, setCount] = useState(0);
```

Internally:

```javascript
[0, function]
```

---

## 3. Understanding useEffect()

### Case 1

Without Dependency Array

```javascript
useEffect(() => {
    console.log("Runs on every render");
});
```

Runs after every render.

---

### Case 2

Empty Dependency Array

```javascript
useEffect(() => {
    console.log("Runs once");
}, []);
```

Runs only once after the initial render.

---

### Case 3

With Dependencies

```javascript
useEffect(() => {
    console.log("Runs whenever count changes");
}, [count]);
```

Runs:

- Initial render
- Whenever `count` changes

---

## 4. Single Page Application (SPA)

A Single Page Application loads a single HTML page and updates content dynamically without refreshing the browser.

### Benefits

- Faster navigation
- Better user experience
- Client-side rendering
- API-driven architecture
- Reduced full-page reloads

Popular SPA Frameworks

- React
- Angular
- Vue

---

## 5. Client-Side Routing

Navigation is handled inside the browser using JavaScript.

Example:

```jsx
<Route path="/" element={<Home />} />
```

### Advantages

- Fast navigation
- No full-page refresh
- Better user experience

### Challenges

- SEO optimization
- Initial bundle size

---

## 6. Server-Side Routing

Navigation is handled by the backend server.

Every route request returns a new HTML page.

### Advantages

- Better SEO
- Faster first meaningful paint
- Easy indexing

### Limitations

- Full page reloads
- Slower navigation

---

## Client-Side Routing vs Server-Side Routing

| Feature | Client Side | Server Side |
|----------|------------|-------------|
| Rendering | Browser | Server |
| Navigation | Fast | Slower |
| Reload | No | Yes |
| SEO | Needs SSR/Prerender | Excellent |
| User Experience | Smooth | Traditional |

---

# Key Learnings

- Multiple ways to load images in React
- Understanding what `useState()` returns
- Mastering `useEffect()` dependency behavior
- Understanding SPA architecture
- Client-side routing fundamentals
- Server-side routing fundamentals
- Routing performance comparison
- SEO considerations

---

# Tech Stack

- React
- JavaScript (ES6+)
- React Hooks
- React Router
- HTML5
- CSS3

---

# What I Built

By completing this episode, I now understand:

- How React manages static assets
- How Hooks execute internally
- How dependency arrays affect rendering
- Why SPAs are so popular
- How routing works in React
- Differences between Client-side and Server-side routing

---

# Author

**Nagaraju Nali**

Frontend Engineer

🚀 Learning React one episode at a time.