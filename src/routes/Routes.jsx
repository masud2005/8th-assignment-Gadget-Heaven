import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/Home";
// import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import AllProducts from "../components/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import OrderHistory from "../pages/OrderHistory";
// import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/categories.json'),
                children: [
                    {
                        path: '/',
                        element: <AllProducts />,
                        loader: () => fetch('/all-products.json')
                    },
                    {
                        path: '/:category',    
                        element: <AllProducts />,
                        loader: () => fetch('/all-products.json')
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/order history',
                element: <OrderHistory />
            },
            {
                path: '/product-details/:productId',
                element: <ProductDetails />,
                loader: () => fetch('/all-products.json')
            }
        ]
    }
])

export default routes;

// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/Home";
// import Statistics from "../pages/Statistics";
// import Dashboard from "../pages/Dashboard";
// import AllProducts from "../components/AllProducts";
// import ProductDetails from "../pages/ProductDetails";

// const routes = createBrowserRouter([
//     {
//         path: '/',
//         element: <MainLayout />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />,
//                 loader: () => fetch('../categories.json'),
//                 children: [
//                     {
//                         path: '/',
//                         element: <AllProducts />,
//                         loader: () => fetch('../all-products.json')
//                     },
//                     {
//                         path: '/:category',    
//                         element: <AllProducts />,
//                         loader: () => fetch('../all-products.json')
//                     }
//                 ]
//             },
//             {
//                 path: '/statistics',
//                 element: <Statistics />
//             },
//             {
//                 path: '/dashboard',
//                 element: <Dashboard />
//             },
//             {
//                 path: '/product-details/:productId',
//                 element: <ProductDetails />,
//                 loader: () => fetch('../all-products.json')
//             }
//         ]
//     }
// ])

// export default routes;