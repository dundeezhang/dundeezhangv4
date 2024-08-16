import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./routes/home";
import Blog from "./routes/blog";

import ArtZero from "./routes/components/blog/articles/0";
import ArtOne from "./routes/components/blog/articles/1";
import ArtTwo from "./routes/components/blog/articles/2";

import "./routes/components/css/index.css";

import "./routes/components/css/index.css";
import "./routes/components/css/root.css";
import "./routes/components/css/works.css";
import "./routes/components/css/blogcomp.css";
import "./routes/components/css/contact.css";
import "./routes/components/css/footer.css";

import "./routes/components/css/blog.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "blog",
        element: <Blog />,
    },
    {
        path: "blog/article/0",
        element: <ArtZero />,
    },
    {
        path: "blog/article/1",
        element: <ArtOne />,
    },
    {
        path: "blog/article/2",
        element: <ArtTwo />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
