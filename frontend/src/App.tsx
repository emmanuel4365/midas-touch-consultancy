import { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

//Lazy load other pages
// const HomePage = lazy(() => import("./components/pages/HomePage"));
// const HomePage = lazy(() => new Promise((resolve) => {
//   setTimeout(resolve, 2000);
// }).then(() => import("./components/pages/HomePage")));

const LandingPage = lazy(() => import("./components/pages/LandingPage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ServicesPage = lazy(() => import("./components/pages/ServicesPage"));
const GalleryPage = lazy(() => import("./components/pages/GalleryPage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <HomePage />,
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Simulate a loading time of 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
};
export default App;