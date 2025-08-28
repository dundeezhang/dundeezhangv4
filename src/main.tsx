import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./routes/home";
import Works from "./routes/works";

import "./css/tableofcontent.css";
import "./css/index.css";
import "./css/about.css";
import "./css/root.css";
import "./css/works.css";
import "./css/footer.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/works",
    element: <Works />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
