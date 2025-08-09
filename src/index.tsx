import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import reportWebVitals from "./reportWebVitals";
import App from "./core/components/App";
import { Theme } from "@radix-ui/themes";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserRegisterPage } from "./player/components/userRegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/error",
    element: <h1>Something is wrong</h1>,
  },
  {
    path: "/register",
    element: <UserRegisterPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Theme
      accentColor="green"
      grayColor="gray"
      panelBackground="translucent"
      scaling="100%"
      radius="small"
      style={{ backgroundColor: "#a2dfab" }}
    >
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
