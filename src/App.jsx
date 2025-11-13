// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { ToastProvider } from "./components/ui/ToastProvider";


function App() {
  return (
    <ToastProvider>
      <Router>
          <AppRoutes />
      </Router>
    </ToastProvider>
  );
}

export default App;