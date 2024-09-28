import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Project from "./components/Project.jsx";
import Resume from "./components/Resume.jsx";
import Home from "./components/Home.jsx";
import { createRoot } from "react-dom/client";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children: [
      { path: "", element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "contact", element: <Contact /> },
      { path: "project", element: <Project /> },
      { path: "resume", element: <Resume /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
