# 🚀 Namaste React - Episode 05: Let's Get Hooked!

> Learn how to structure a React application, organize components, understand module exports, and get started with React Hooks.

---

## 📖 Overview

In this episode, we improve the architecture of our Food Ordering App by following React best practices. We refactor the project into a scalable folder structure, learn how to share code using exports/imports, organize reusable constants, and introduce React Hooks to build interactive user interfaces.

---

# 📚 Topics Covered

## 1. Why React?

- Why React is preferred over plain HTML, CSS, and JavaScript
- Better developer experience
- Component-based architecture
- Efficient UI updates

---

## 2. Project Folder Structure

Learn how to organize a React project following industry standards.

```
src/
│
├── components/
│   ├── Header.js
│   ├── Body.js
│   └── RestaurantCard.js
│
├── utils/
│   ├── constants.js
│   └── mockData.js
│
└── App.js
```

### Best Practices

- Keep all application code inside the `src` folder.
- Create one file per component.
- Store reusable data separately.
- Follow meaningful naming conventions.

---

## 3. Component Organization

Instead of writing everything inside `App.js`, split the application into reusable components.

Example:

- Header
- Body
- RestaurantCard

Benefits:

- Cleaner code
- Easier maintenance
- Better scalability
- Improved reusability

---

# 📦 Export & Import

React provides two ways to share code between files.

---

## Default Export

```javascript
const Header = () => {};

export default Header;
```

Import:

```javascript
import Header from "./components/Header";
```

### Use Case

Use when exporting **one primary value** from a file.

---

## Named Export

```javascript
export const LOGO_URL = "...";
export const CDN_URL = "...";
```

Import:

```javascript
import { LOGO_URL, CDN_URL } from "../utils/constants";
```

### Use Case

Use when exporting **multiple values** from the same file.

---

## Can We Use Both?

✅ Yes.

A file can contain both:

- Default Export
- Named Exports

---

# 📂 Utility Folder

Create a `utils` folder to store reusable values.

Example:

- API URLs
- Image URLs
- Constants
- Mock Data

Instead of hardcoding values inside components.

```
utils/
│
├── constants.js
└── mockData.js
```

---

# 🍽 Mock Data

Store restaurant data separately inside

```
mockData.js
```

This keeps components clean and focused only on UI.

---

# 🎯 Building Interactive UI

Replace the search box with a button.

Example:

```
Top Rated Restaurant
```

On click:

- Filter restaurants
- Show only highly rated restaurants

---

# 🔍 Filtering Data

Use JavaScript's `filter()` method.

Example logic:

```javascript
const filteredRestaurants = list.filter(
  (restaurant) => restaurant.data.avgRating > 4.2
);
```

Filtering works correctly...

…but the UI does **not update automatically**.

Why?

Because normal JavaScript variables don't trigger React re-renders.

---

# ⚛ React Hooks

React provides built-in functions called **Hooks**.

Hooks allow functional components to use React features.

Two important hooks:

- useState()
- useEffect()

---

# useState()

Create a state variable.

```javascript
const [listOfRestaurant, setListOfRestaurant] = useState([]);
```

The first value:

```
Current State
```

The second value:

```
State Updater Function
```

---

## Updating State

```javascript
setListOfRestaurant(filteredRestaurants);
```

Whenever state changes:

- React detects the change
- Component re-renders
- UI updates automatically

---

# React Rendering Flow

```
Button Click
        ↓
Filter Data
        ↓
Update State
        ↓
React Re-renders
        ↓
Updated UI
```

---

# UI Layer vs Data Layer

React applications have two layers.

### Data Layer

- State
- API Data
- Variables

↓

### UI Layer

Displays whatever the data layer contains.

Whenever the data changes, React automatically updates the UI.

---

# React Reconciliation

When state changes:

1. React creates a new Virtual DOM.
2. Compares it with the previous Virtual DOM.
3. Finds only the differences.
4. Updates only the changed parts in the Real DOM.

This process is called:

- Reconciliation
- Diffing Algorithm

---

# React Fiber

React Fiber is the engine behind React's rendering process.

It helps React:

- Prioritize updates
- Split rendering into smaller tasks
- Improve rendering performance
- Keep the UI responsive
- Enable Concurrent Rendering

---

# Key Takeaways

- Organize your project using the `src` folder.
- Keep components modular and reusable.
- Store constants and mock data inside `utils`.
- Understand the difference between Default and Named exports.
- Use `useState()` for reactive state management.
- Update UI through state, not normal variables.
- React efficiently updates the DOM using Reconciliation and Fiber.

---

# Skills Learned

- React Project Structure
- Component Organization
- Default Export
- Named Export
- Import Statements
- Utility Files
- Mock Data Management
- Event Handling
- Array Filtering
- React Hooks
- useState
- State Management
- Reconciliation
- Virtual DOM
- React Fiber

---

## 🚀 Next Step
In the next episode, we'll continue building the Food Ordering App by introducing more React Hooks and working with real API data to create a dynamic, production-like application.

Happy Coding! 🎉