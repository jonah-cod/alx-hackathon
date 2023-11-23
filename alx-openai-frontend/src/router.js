import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProductListings from "./pages/productListings";
import AdminDashboard from "./pages/adminDashboard";
import ProductDetails from "./components/productDetails";
import Cart from "./pages/cart";
import Reports from "./components/reports";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		children: [
			{ index: "index", element: <ProductListings /> },
			{ path: "/product/:id", element: <ProductDetails /> },
			{ path: "/cart", element: <Cart /> },
		],
	},
	{
		path: "/dashboard",
		element: <AdminDashboard />,
		children: [{ path: "reports", element: <Reports /> }],
	},
]);
