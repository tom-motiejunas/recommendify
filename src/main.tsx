import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_K0R7TjOycCR0nYaJGu_57FX_cr9-760",
  authDomain: "recommendation-commerce.firebaseapp.com",
  projectId: "recommendation-commerce",
  storageBucket: "recommendation-commerce.appspot.com",
  messagingSenderId: "395965825118",
  appId: "1:395965825118:web:f2dacb30ce42e05685b4cf",
  measurementId: "G-RETY1QB42W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
