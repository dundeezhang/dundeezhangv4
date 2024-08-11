import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Root from "./routes/root";
import Blog from "./routes/blog";

import ArtZero from "./routes/components/blog-components/0";
import ArtOne from "./routes/components/blog-components/1";
import ArtTwo from "./routes/components/blog-components/2";

import "./routes/components/css/index.css"

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
