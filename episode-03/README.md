# 🚀 React Fundamentals - Episode 03
## Laying the Foundation (Namaste React)

> Learn how React applications evolve from `React.createElement()` to modern JSX syntax, understand Babel's role, create reusable React components, and explore JSX expressions.

---

## 📚 What You'll Learn

- Creating custom npm scripts
- Running Development & Production builds
- Introduction to JSX
- Why JSX exists
- JSX vs HTML
- How Babel works
- JSX Transpilation
- React Functional Components
- Component Composition
- JSX Expressions
- Advantages of JSX
- Best VS Code Extensions

---

# 1️⃣ Project Scripts

Instead of running Parcel manually every time,

```bash
npx parcel index.html
```

create reusable scripts inside **package.json**.

### Development Script

```json
"scripts": {
  "start": "parcel index.html"
}
```

Run using

```bash
npm start
```

or

```bash
npm run start
```

---

### Production Script

```json
"scripts": {
  "build": "parcel build index.html"
}
```

Run using

```bash
npm run build
```

### ✅ Benefits

- Easier project startup
- Standard practice
- Used in almost every React project
- Makes onboarding easier

---

# 2️⃣ Why JSX?

Earlier we created UI using

```javascript
React.createElement()
```

Although powerful,

it is

❌ Difficult to read

❌ Verbose

❌ Hard to maintain

To solve this,

Facebook introduced **JSX**.

---

## What is JSX?

JSX stands for

> **JavaScript XML**

It is

- HTML-like syntax
- XML-like syntax
- Syntax extension for JavaScript

Example

```jsx
const heading = <h1>Hello React</h1>;
```

---

## JSX is NOT...

❌ HTML

❌ A React feature

❌ Understood directly by browsers

React can work without JSX,

but writing applications becomes much harder.

---

# 3️⃣ React.createElement vs JSX

Using React

```javascript
const heading = React.createElement(
  "h1",
  {},
  "Hello React"
);
```

Using JSX

```jsx
const heading = <h1>Hello React</h1>;
```

### Why JSX?

- Cleaner
- Easier to read
- Less code
- Better developer experience

---

# 4️⃣ Introducing Babel

Browsers understand

- JavaScript

Browsers DO NOT understand

- JSX

So who converts JSX?

## 👉 Babel

Babel is a JavaScript compiler (transpiler).

It converts

```jsx
<h1>Hello</h1>
```

into

```javascript
React.createElement(...)
```

before sending it to the browser.

---

## JSX Flow

```text
JSX
   ↓
Babel
   ↓
React.createElement()
   ↓
React Element
   ↓
JavaScript Object
   ↓
HTML
```

---

# 5️⃣ JSX vs HTML

Although they look similar,

they are NOT the same.

| HTML | JSX |
|-------|------|
| class | className |
| for | htmlFor |
| Hyphen attributes | camelCase |
| HTML | JavaScript syntax |

Example

```jsx
<div className="container">
```

instead of

```html
<div class="container">
```

---

# 6️⃣ Writing JSX

### Single Line

```jsx
const heading = <h1>Hello React</h1>;
```

---

### Multi Line

Always wrap JSX inside

```jsx
()
```

Example

```jsx
const heading = (
  <div>
    <h1>Hello React</h1>
  </div>
);
```

This helps Babel correctly identify the JSX block.

---

# 7️⃣ Useful VS Code Extensions

Install these extensions

✅ Prettier

- Auto formatting

---

✅ ESLint

- Code quality
- Error detection

---

✅ Better Comments

- Beautiful comments
- Easier code navigation

---

# 8️⃣ React Components

Everything in React is a component.

Two types

## Class Components

- Old approach
- Rarely used today

---

## Functional Components

- Modern
- Simple
- Recommended
- Industry standard

---

# 9️⃣ Functional Components

A Functional Component is simply

> A JavaScript function that returns JSX.

Example

```jsx
const Heading = () => (
  <h1>Hello React</h1>
);
```

Other valid syntax

```jsx
const Heading = () => {
  return <h1>Hello React</h1>;
};
```

---

## Naming Rule

Always start component names with

**Capital Letters**

Correct

```jsx
Heading
```

Wrong

```jsx
heading
```

---

# 🔟 Rendering Components

Use

```jsx
<Heading />
```

or

```jsx
<Heading></Heading>
```

React will render the returned JSX.

---

# 1️⃣1️⃣ Component Composition

One component can use another component.

Example

```jsx
const Title = () => (
  <h1>React</h1>
);

const Header = () => (
  <div>
    <Title />
  </div>
);
```

This is called

## Component Composition

---

# 1️⃣2️⃣ JavaScript inside JSX

Use

```jsx
{}
```

Example

```jsx
const number = 100;

const App = () => (
  <div>
    {number}
  </div>
);
```

Anything inside `{}` is treated as a JavaScript expression.

---

## React Element inside JSX

```jsx
const element = (
  <span>Hello</span>
);

const App = () => (
  <div>
    {element}
  </div>
);
```

---

# ⚠️ Infinite Rendering

Never call components recursively.

Example

```jsx
const A = () => <B />;

const B = () => <A />;
```

This causes

- Infinite loop
- Stack overflow
- Browser crash

---

# ⭐ Advantages of JSX

✅ Cleaner syntax

✅ Easier to read

✅ Easier to maintain

✅ Prevents XSS attacks

✅ Escapes malicious code

✅ Better error messages

✅ Improved developer experience

---

# 🧠 Key Takeaways

- Use npm scripts instead of long Parcel commands.
- JSX makes React code easier to read and maintain.
- Browsers cannot understand JSX directly.
- Babel transpiles JSX into JavaScript.
- Functional Components are the modern way to build React apps.
- Component Composition promotes reusable UI.
- JavaScript expressions can be embedded using `{}`.
- JSX improves readability, security, and productivity.

---

# 📌 Episode Summary

In this episode, we moved from manually creating React elements to writing modern React applications using JSX. We learned how Babel transpiles JSX, how to create reusable Functional Components, compose components together, and embed JavaScript expressions inside JSX. These concepts form the foundation for building scalable React applications.

---

## ⭐ Next Episode

**React Episode 04**

- React Elements vs Components
- Component Rendering
- JSX Deep Dive
- Advanced Component Patterns

Happy Coding! 🚀