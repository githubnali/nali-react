# Namaste React

# 🚀 Episode 01 - React Fundamentals

> Understanding how React works, why it exists, and building your very first React application from scratch.

---

# 📚 What You'll Learn

- What is React?
- Why developers use React
- Library vs Framework
- Installing and using React through CDN
- Creating your first React element
- Rendering React to the DOM
- Understanding `createRoot()`
- Understanding `React.createElement()`
- Building nested elements in React
- What is Emmet?
- What is `crossorigin`?
- How React updates the UI

---

# What is React?

React is an open-source JavaScript library used for building user interfaces.

Instead of manually manipulating HTML every time data changes, React efficiently updates only the required parts of the page.

React is especially useful for:

- Single Page Applications (SPA)
- Dashboards
- E-commerce websites
- Social media applications
- Admin Panels
- SaaS products

---

# Why React?

Without React:

- More DOM manipulation
- More repetitive code
- Harder to maintain large applications

With React:

- Component-based architecture
- Reusable code
- Faster UI updates
- Better developer experience
- Easier application maintenance

---

# What is a Library?

A library is a collection of reusable code that helps developers perform common tasks.

The developer decides:

- when to call it
- where to use it
- how much of it to use

Examples:

- React
- Lodash
- jQuery
- Axios

---

# What is a Framework?

A framework provides a complete structure for building an application.

Instead of calling the framework whenever needed, the framework calls your code.

Examples:

- Angular
- Django
- Laravel
- Ruby on Rails

---

# Library vs Framework

| Library | Framework |
|----------|-----------|
| Used when needed | Controls application flow |
| Flexible | Opinionated |
| Easier to integrate | Provides complete architecture |
| You control execution | Framework controls execution |

A simple way to remember:

> A library is a toolbox.
>
> A framework is an entire workshop.

---

# Understanding Inversion of Control

This is the biggest difference between a library and a framework.

### Library

```
Your Code
     ↓
React Function
```

You decide when to call the library.

---

### Framework

```
Framework
      ↓
Your Code
```

The framework decides when your code executes.

---

# What is Emmet?

Emmet is a productivity tool built into most code editors.

It allows developers to write HTML much faster using abbreviations.

Example:

```
ul>li*5
```

Expands into

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

This saves a significant amount of development time.

---

# HTML Hello World

```html
<!DOCTYPE html>

<html>
<head>
    <title>Hello World</title>
</head>

<body>

<div id="root">
    <h1>Hello World</h1>
</div>

</body>
</html>
```

The browser directly renders this HTML.

---

# JavaScript Hello World

Instead of writing HTML manually, JavaScript can create elements dynamically.

```javascript
const heading = document.createElement("h1");

heading.innerHTML = "Hello World";

document.getElementById("root").appendChild(heading);
```

JavaScript creates the DOM element first and then inserts it into the page.

---

# Using React through CDN

Instead of installing React locally, we can include it using CDN links.

```html
<script crossorigin
src="https://unpkg.com/react@18/umd/react.development.js">
</script>

<script crossorigin
src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
</script>
```

---

# Why Two Files?

### React

Contains the core React library.

Responsible for:

- Creating React elements
- Managing components
- Hooks
- State
- JSX processing

---

### ReactDOM

Responsible for interacting with the browser DOM.

It renders React elements into HTML.

---

# What is `crossorigin`?

The `crossorigin` attribute allows the browser to safely load external resources from another domain.

It is commonly used when loading:

- JavaScript libraries
- Fonts
- Images
- APIs

It also enables better error reporting and secure resource sharing.

---

# Creating Your First React Element

React elements are created using:

```javascript
React.createElement()
```

Example:

```javascript
const heading = React.createElement(
    "h1",
    {},
    "Hello React"
);
```

---

# Understanding `React.createElement()`

Syntax

```javascript
React.createElement(
    type,
    props,
    children
);
```

Example

```javascript
React.createElement(
    "h1",
    {
        id: "title"
    },
    "Hello World"
);
```

---

## Parameter 1

```
"h1"
```

The HTML element to create.

---

## Parameter 2

```
{
    id: "title"
}
```

Props (attributes)

Examples:

- id
- className
- style
- title

---

## Parameter 3

```
"Hello World"
```

Children

This can be

- Text
- Another React element
- Multiple React elements
- Components

---

# Understanding createRoot()

```javascript
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
```

This tells React

> "Manage everything inside this DOM node."

---

# Rendering React

```javascript
root.render(heading);
```

React converts the React element into real DOM elements and displays it inside the browser.

---

# Important Note

React controls the container passed into `createRoot()`.

Everything inside that container is managed by React.

```html
<div id="root">
    Existing HTML
</div>
```

After

```javascript
root.render(...)
```

React replaces the existing content with the rendered React tree.

---

# Creating Nested Elements

HTML

```html
<div id="parent">

    <div id="child">

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>

    </div>

</div>
```

Equivalent React

```javascript
const parent = React.createElement(
    "div",
    { id: "parent" },

    React.createElement(
        "div",
        { id: "child" },

        [
            React.createElement(
                "h1",
                {},
                "Heading 1"
            ),

            React.createElement(
                "h2",
                {},
                "Heading 2"
            )
        ]
    )
);
```

---

# Rendering Nested Structure

```javascript
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(parent);
```

---

# Key Takeaways

✅ React is a JavaScript library.

✅ React builds user interfaces using reusable components.

✅ Libraries give control to developers.

✅ Frameworks control the application flow.

✅ `React.createElement()` creates React elements.

✅ `ReactDOM.createRoot()` creates the React root.

✅ `render()` displays React elements inside the browser.

✅ React efficiently updates the DOM whenever changes occur.

---

# Practice Exercises

### Exercise 1

Create

```html
<h1>Hello React</h1>
```

using only React.

---

### Exercise 2

Create

```html
<div>

<h1>Title</h1>

<p>Description</p>

</div>
```

using `React.createElement()`.

---

### Exercise 3

Create the following hierarchy

```
Parent

├── Child 1
│   ├── H1
│   └── H2

└── Child 2
    ├── H1
    └── H2
```

using nested `React.createElement()` calls.

---

# Summary

In this episode, you learned the foundations of React development.

You explored:

- Why React exists
- Library vs Framework
- Using React through CDN
- Creating React elements
- Rendering elements into the DOM
- Building nested UI structures

These concepts form the building blocks for everything you'll create in React moving forward.