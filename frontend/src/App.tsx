import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./components/pages/HomePage";

//Lazy load other pages
// const HomePage = lazy(() => import("./components/pages/HomePage"));
const HomePage = lazy(() => new Promise((resolve) => {
  setTimeout(resolve, 2000);
}).then(() => import("./components/pages/HomePage")));

const LandingPage = lazy(() => import("./components/pages/LandingPage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ServicesPage = lazy(() => import("./components/pages/ServicesPage"));
const GalleryPage = lazy(() => import("./components/pages/GalleryPage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Suspense fallback="Loading...">
        <HomePage />
      </Suspense>,
    errorElement: <div>Error loading page</div>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="Loading...">
            <LandingPage />
          </Suspense>
        ),
        errorElement: <div>Error loading page</div>,
      },
      {
        path: "about",
        element: (
          <Suspense fallback="Loading...">
            <AboutPage />
          </Suspense>
        ),
        errorElement: <div>Error loading page</div>,
      },
      {
        path: "services",
        element: (
          <Suspense fallback="Loading...">
            <ServicesPage />
          </Suspense>
        ),
        errorElement: <div>Error loading page</div>,
      },
      {
        path: "gallery",
        element: (
          <Suspense fallback="Loading...">
            <GalleryPage />
          </Suspense>
        ),
        errorElement: <div>Error loading page</div>,
      },
      {
        path: "contact",
        element: (
          <Suspense fallback="Loading...">
            <ContactPage />
          </Suspense>
        ),
        errorElement: <div>Error loading page</div>,
      }
    ]
  }
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
export default App;