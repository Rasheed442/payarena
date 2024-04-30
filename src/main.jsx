import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { router } from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { ChakraProvider } from "@chakra-ui/react";
// import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ChakraProvider>
          <App />
          <ToastContainer />
        </ChakraProvider>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
