# 💻 Gadget Heaven

## Live Website Link
[Gadget Heaven](https://gadget1.netlify.app/)

## Requirement Document
[Gadget Heaven Frontend](https://github.com/ayubislam1/Gadget-Heaven.git)

## Overview
Gadget Heaven is an online platform for buying and selling electrical devices. We offer various product categories, including laptops, mobile phones, headphones, and watches. This project showcases fundamental React concepts and modern web development practices to deliver a dynamic and responsive user experience.

## React Fundamental Concepts Used
- **Hooks**: Usage of `useState`, `useEffect`, and `useLoaderData` for state management and side effects.
- **Event Handling**: Click events to handle product sorting, modal toggling, and deletion.
- **Conditional Rendering**: Conditional display of elements such as the cart items and modal dialogs.
- **Props**: Passing data and event handlers between components to ensure component communication.

## Data Handling and Management
- **Local Storage**: Used for storing and retrieving the list of added products to persist data even after refreshing the page.

## Features of the Project
1. **Dynamic Product Cart**: Add, view, and manage products in the cart with dynamic total cost calculation.
2. **Sort Functionality**: Sort products by price to easily find the most expensive or affordable items.
3. **Interactive Modal**: Show a payment success modal when purchasing, with the ability to close and redirect to the home page.
4. **Persistent Data Storage**: Products added to the cart are saved in local storage, maintaining state across page reloads.
5. **Responsive Design**: The project layout adapts to various screen sizes for a better user experience on mobile and desktop.

## 🚀 Frontend Installation and Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (Download from [Node.js Official Site](https://nodejs.org/))
- **npm** or **yarn** (Comes with Node.js)

---

### 1⃣ Clone the Repository
Run the following command to clone the project:

```bash
git clone https://github.com/ayubislam1/Gadget-Heaven.git

```

---

### 2⃣ Install Dependencies
Run the following command inside the frontend directory:

```bash
npm install
```

This will install all required dependencies.

---

### 3⃣ Set Up Environment Variables
Create a `.env` file in the project root and add the following environment variables:

```env
VITE_API_BASE_URL=your_api_base_url
```
Replace `your_api_base_url` with the actual backend API URL if applicable.

---

### 4⃣ Start the Development Server
To run the project locally, execute:

```bash
npm run dev
```

The frontend should now be accessible at `http://localhost:5173`.

---

## 🛠️ Building for Production
To create an optimized production build, run:

```bash
npm run build
```

This generates a `dist/` folder containing the optimized production files.

---

## 🎯 Now your Gadget Heaven frontend is ready to use! 🚀
