
## Project Name
# Electronic Gadget Heaven

## Live Website Link

[https://e-gadget-heaven.surge.sh/](https://e-gadget-heaven.surge.sh/)

## Requirement Document Link



## Gadget Heaven Dashboard

Welcome to the **Gadget Heaven Dashboard**! This project is a dashboard-style application that allows users to manage a shopping cart and wishlist for the latest gadgets, with interactive features for sorting, purchasing, and updating their cart.


## Project Overview
The Gadget Heaven Dashboard is built using **React** and includes features for managing cart and wishlist items. Users can view the total cost of items, sort items by price, and complete a purchase. The app is built with React’s component-based architecture, local storage management, and a range of reusable components.

## Features
- **Add to Cart** and **Add to Wishlist** functionalities
- **Sort by Price** feature for cart items
- **Conditional Rendering** for buttons and modals
- **Dynamic List Rendering** for cart and wishlist items
- **Context API** for global state management of cart count
- **Modal** for successful purchase feedback

## React Fundamentals Used

### 1. Components
   - The project uses multiple React components, such as `Dashboard`, `Heading`, `AddCartContainer`, and `AddWishlistContainer`. Components make the app modular and reusable, with each component responsible for rendering a specific part of the UI.

### 2. State Management (`useState`)
   - The `useState` hook is used extensively to manage the state of cart items (`cartProducts`), wishlist items (`wishListProducts`), and the total cost (`totalCost`). Each component’s state is updated based on user interactions, and React re-renders the UI accordingly.

### 3. Side Effects with `useEffect`
   - The `useEffect` hook is used to fetch data from local storage when the component mounts, such as fetching stored cart and wishlist data. This hook allows for executing side effects, like data fetching or updating the document title, in functional components.

### 4. Event Handling
   - Event handlers, like `handleSortByPrice`, `handlePurchase`, and `removeAllCart`, are implemented for various button clicks. React handles these events similarly to JavaScript, allowing for custom functions to be called on `onClick` and other events.

### 5. Conditional Rendering
   - Conditional rendering is used to manage UI changes based on state, like disabling the "Purchase" button if the cart is empty or conditionally applying classes. This is done by checking the length of `cartProducts` and adjusting the button’s behavior and style accordingly.

### 6. Props Passing
   - Props are used to pass data to child components like `Heading`, `AddCartContainer`, and `AddWishlistContainer`. This ensures each child component receives the specific data it needs from its parent, promoting reusable and modular design.

### 7. React Router (`useNavigate`)
   - `useNavigate` is part of React Router and allows programmatic navigation, such as redirecting to the homepage after clearing the cart. It makes navigation within the single-page app smooth and allows for page transitions without refreshing.

### 8. Context API
   - The app uses the Context API, accessed via a custom `useCart` hook, to manage the cart count globally. This enables any component within the provider’s scope to access and update shared state, like the cart count, without passing props down multiple levels.

### 9. Dynamic List Rendering
   - Arrays like `cartProducts` and `wishListProducts` are rendered dynamically using `.map()`. Each item is displayed with a child component (`AddCartContainer` or `AddWishlistContainer`) that receives data via props, allowing the UI to reflect changes in the data automatically.

## Libraries Used

- **`react-tabs`**: Used to create tabbed navigation for Cart and Wishlist.
- **`react-icons`**: Provides access to a library of icons, adding visual appeal to buttons and headings.
- **`react-helmet-async`**: Helps manage the document title and other metadata, useful for SEO and user experience.
- **`react-hot-toast`**: Displays toast notifications to enhance feedback for actions like adding or removing items.
