import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

import AdminDashboard from "./pages/admin";
import Item1 from "./pages/item1";
import Item2 from "./pages/item2";
import Item3 from "./pages/item3";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/item1" element={<Item1 />} />
        <Route path="/item2" element={<Item2 />} />
        <Route path="/item3" element={<Item3 />} />
      </>
    )
  );

  return (
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  );
};

export default App;
