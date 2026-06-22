import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { ThemeProvider } from "react-bootstrap";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")).render(
  <ThemeProvider dir="rtl">
    <Toaster position="top-right" richColors />
    <App />
  </ThemeProvider>,
);
