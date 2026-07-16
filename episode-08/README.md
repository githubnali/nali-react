# Namaste React - Episode 08: Let's Get Classy

## Overview

Episode 08 explores React Router's advanced routing concepts and introduces Class Components, state management, and lifecycle methods.

By the end of this episode, you'll understand modern routing patterns as well as how React worked before Hooks were introduced.

---

# Topics Covered

## 1. Nested Routes

Nested routes allow multiple pages to share a common layout.

Example

```jsx
const router = createBrowserRouter([
{
    path: "/",
    element: <AppLayout />,
    children: [
        {
            index: true,
            element: <Body />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "contact",
            element: <Contact />
        }
    ]
}
]);
```

### Benefits

- Shared layouts
- Cleaner routing
- Better code organization

---

## 2. createBrowserRouter()

Modern React Router configuration.

```jsx
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    }
]);

<RouterProvider router={appRouter} />
```

### Advantages

- Declarative routing
- Nested routes
- Error handling
- Dynamic routing

---

## 3. AppLayout & Outlet

`<Outlet />` renders the matched child route.

```jsx
function AppLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
```

### Why Use Outlet?

- Shared Header/Footer
- Dynamic page rendering
- Cleaner layouts

---

## 4. Route Configuration

Important properties

```jsx
{
    path: "/",
    element: <Home />,
    children: [],
    errorElement: <Error />
}
```

Useful options

- path
- element
- children
- index
- errorElement

---

## 5. Router Types

### Browser Router

- Uses HTML5 History API
- Best for production SPAs

### Hash Router

- Uses URL hash (#)
- Useful for static hosting

### Memory Router

- Stores routes in memory
- Great for testing

---

## 6. Introduction to Class Components

Class Components were the original way of building React components before Hooks.

```jsx
class App extends React.Component {

    render() {
        return <h1>Hello React</h1>;
    }

}
```

### Features

- Lifecycle methods
- State management
- Object-oriented syntax

---

## 7. Class vs Functional Components

| Class Components | Functional Components |
|-----------------|-----------------------|
| Uses class syntax | Uses functions |
| Uses this.state | Uses useState() |
| Lifecycle methods | Hooks |
| More boilerplate | Cleaner syntax |

---

## 8. this.state vs useState()

### Functional Component

```jsx
const [count, setCount] = useState(0);
```

### Class Component

```jsx
this.state = {
    count: 0
};

this.setState({
    count: this.state.count + 1
});
```

---

## 9. Lifecycle Methods

Execution Order

```
Constructor
      ↓
Render
      ↓
componentDidMount
      ↓
State Update
      ↓
Render
      ↓
componentDidUpdate
      ↓
componentWillUnmount
```

### Common Lifecycle Methods

#### constructor()

Initialize state.

#### render()

Returns JSX.

#### componentDidMount()

Runs after component mounts.

Best for

- API Calls
- Timers
- Event Listeners

#### componentDidUpdate()

Runs after state or props change.

#### componentWillUnmount()

Cleanup

- Remove event listeners
- Clear intervals
- Cancel subscriptions

---

## 10. Why Lifecycle Methods Matter

Lifecycle methods help us:

- Fetch API data
- Manage subscriptions
- Handle timers
- Improve performance
- Prevent memory leaks

---

# Key Learnings

- Nested Routing
- createBrowserRouter()
- Outlet Component
- Route Configuration
- BrowserRouter vs HashRouter vs MemoryRouter
- Class Components
- this.state
- useState()
- React Lifecycle Methods
- Component Mounting & Unmounting

---

# Tech Stack

- React
- React Router
- JavaScript (ES6+)
- JSX
- React Hooks
- Class Components

---

# What I Learned

After completing Episode 08, I can now:

- Configure modern React Router
- Create nested routes
- Build reusable layouts
- Understand legacy React code
- Work with Class Components
- Compare Hooks with Classes
- Use lifecycle methods correctly
- Choose the right router for different use cases

---

# Author

**Nagaraju Nali**

Frontend Engineer

🚀 Learning React one episode at a time.