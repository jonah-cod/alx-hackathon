import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { Provider } from "react-redux";
import {store} from "./redux/store.js";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<RouterProvider router={routes}></RouterProvider>
			</div>
		</Provider>
	);
}

export default App;
