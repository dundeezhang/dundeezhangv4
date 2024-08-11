import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Root from "./routes/root";
import Blog from "./routes/blog";
import Article from "./routes/articles";

import '/src/css/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "blog/article/:articleId",
    element: <Article />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
