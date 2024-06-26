//This is the router for navigation
import React from "react";
import { EventPage } from "./pages/EventPage";
import { EventsPage } from "./pages/EventsPage";
import { AddEventForm } from "./pages/AddEventForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root";
import { RouterData } from "./Data/RouterData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <EventsPage />,
        loader: RouterData,
      },
      {
        path: "/event/:eventId",
        element: <EventPage />,
        loader: RouterData,
      },
      {
        path: "/AddEventForm",
        element: <AddEventForm />,
        loader: RouterData,
      },
    ],
  },
]);
// @ts-ignore

export const Router = () => {
  return <RouterProvider router={router} />;
};
