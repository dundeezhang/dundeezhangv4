import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./routes/home";
import Works from "./routes/works";
import Contact from "./routes/contact";

import "./css/tableofcontent.css";
import "./css/background.css";
import "./css/index.css";
import "./css/about.css";
import "./css/root.css";
import "./css/works.css";
import "./css/contact.css";
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
    {
        path: "/contact",
        element: <Contact />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
