import { BrowserRouter, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Loading from '../components/loading';
import Loader from '../components/loader/Loader';
import Layout from '../layout';
import { PublicRoute } from './config';
const Home = lazy(() => import("../pages/home/Home"));
const Categories = lazy(() => import("../pages/categories/Categories"));
const CategoryMovies = lazy(() => import("../pages/categories/CategoryMovies/CategoryMovies"));
const Movie = lazy(() => import("../pages/movie/Movie"))

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Layout>
                    <Switch>
                        <PublicRoute path="/" exact>
                            <Home />
                        </PublicRoute>
                        <PublicRoute path="/categories" exact>
                            <Categories />
                        </PublicRoute>
                        <PublicRoute path="/categories/:name/:id" exact>
                            <CategoryMovies />
                        </PublicRoute>
                        <PublicRoute path="/movie/:id" exact>
                            <Movie />
                        </PublicRoute>
                        {/* <PublicRoute path="*" exact>
                            <NotFound />
                        </PublicRoute> */}
                    </Switch>
                </Layout>
            </Suspense>
        </BrowserRouter>
    )
}

export default MainRouter;