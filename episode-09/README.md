# Namaste React - Episode 09: Optimising Our App

## Overview

Episode 09 focuses on improving React application performance using modern optimization techniques such as **Lazy Loading**, **Code Splitting**, and **Suspense**.

These concepts help reduce the initial bundle size, improve loading speed, and provide a better user experience by loading only the required code when needed.

---

# Topics Covered

## 1. Why Optimization Matters

As applications grow, JavaScript bundles become larger, resulting in:

- Slow initial load
- Poor Lighthouse scores
- Increased bandwidth usage
- Reduced mobile performance

### Goals

- Smaller bundles
- Faster loading
- Better user experience
- Improved performance

---

## 2. React lazy()

`React.lazy()` allows components to be loaded only when they are required.

Example:

```jsx
import { lazy } from "react";

const Grocery = lazy(() => import("./pages/Grocery"));
```

### Benefits

- Loads components on demand
- Reduces initial bundle size
- Improves application performance

---

## 3. Suspense

`Suspense` displays a fallback UI while a lazy-loaded component is downloading.

Example:

```jsx
import { Suspense } from "react";

<Suspense fallback={<Shimmer />}>
    <Grocery />
</Suspense>
```

### Why Use Suspense?

- Better loading experience
- Prevents blank screens
- Improves perceived performance

---

## 4. lazy() + Suspense

`lazy()` should always be used together with `Suspense`.

### Without Suspense

- Blank screen
- Runtime error
- Poor user experience

### With Suspense

- Loading indicator
- Smooth transition
- Better UX

---

## 5. Code Splitting

Instead of delivering one large JavaScript bundle, React can split the application into multiple smaller chunks.

Before

```
bundle.js
18 MB
```

After

```
home.js
about.js
restaurant.js
grocery.js
...
```

### Benefits

- Faster initial load
- Better caching
- Route-based loading
- Improved mobile performance

---

## 6. Advantages of Lazy Loading

- Faster First Paint
- Smaller initial bundle
- Better caching
- Reduced bandwidth usage
- Better scalability
- Improved Lighthouse scores

---

## 7. Limitations

- Slight delay when loading a lazy component
- Requires `Suspense`
- Additional planning for route structure

---

## 8. Understanding Suspense Errors

Common reason:

Using `lazy()` without wrapping the component inside `Suspense`.

Incorrect

```jsx
<Grocery />
```

Correct

```jsx
<Suspense fallback={<Loading />}>
    <Grocery />
</Suspense>
```

---

## 9. Best Practices

- Split code by routes
- Lazy load heavy pages
- Keep the initial bundle small
- Show meaningful loading UI
- Use browser caching effectively
- Avoid over-splitting tiny components

---

## 10. Real Project Structure

```
src/
│
├── components/
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Restaurant.jsx
│   └── Grocery.jsx
│
├── App.jsx
└── main.jsx
```

Route Example

```jsx
const Grocery = lazy(() => import("./pages/Grocery"));

<Suspense fallback={<Shimmer />}>
    <Grocery />
</Suspense>
```

---

# Key Learnings

- Why optimization is important
- React lazy()
- Suspense
- Code Splitting
- Route-level optimization
- Bundle optimization
- Performance improvements
- Loading UI strategies
- Real-world project structure

---

# Tech Stack

- React
- React Router
- JavaScript (ES6+)
- JSX
- React.lazy()
- Suspense

---

# What I Learned

After completing Episode 09, I can now:

- Optimize React applications
- Implement Lazy Loading
- Use Suspense correctly
- Split code into smaller bundles
- Improve Lighthouse performance
- Build scalable route-based applications
- Design better loading experiences

---

# Author

**Nagaraju Nali**

Frontend Engineer

🚀 Learning React one episode at a time.