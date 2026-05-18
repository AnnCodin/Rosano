import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import ApplyNow from "./Pages/ApplyNow";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="applynow" element={<ApplyNow />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
