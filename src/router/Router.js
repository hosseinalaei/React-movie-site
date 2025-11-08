import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "../components/loader/Loader";
import Layout from "../layout";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/home/Home"));
const Categories = lazy(() => import("../pages/categories/Categories"));
const CategoryMovies = lazy(() =>
  import("../pages/categories/CategoryMovies/CategoryMovies")
);
const Movie = lazy(() => import("../pages/movie/Movie"));
// const NotFound = lazy(() => import("../pages/not-found/NotFound"));

/**
 * Example PublicRoute for React Router v6
 */
const PublicRoute = ({ children }) => {
  const isAuthenticated = false; // replace with your auth logic
  return !isAuthenticated ? children : <NavLink to="/" replace />;
};

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="/categories"
              element={
                <PublicRoute>
                  <Categories />
                </PublicRoute>
              }
            />
            <Route
              path="/categories/:name/:id"
              element={
                <PublicRoute>
                  <CategoryMovies />
                </PublicRoute>
              }
            />
            <Route
              path="/movie/:id"
              element={
                <PublicRoute>
                  <Movie />
                </PublicRoute>
              }
            />
            {/* Catch-all 404 route */}
            {/* <Route
              path="*"
              element={
                <PublicRoute>
                  <NotFound />
                </PublicRoute>
              }
            /> */}
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainRouter;
