import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ContextProvider from "./contextCart/ContextCart.tsx";
import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import { apiEcommerceService } from "./service/apiEcommerce.ts";
import { Home } from "./routes/Home/index.tsx";
import { Details } from "./routes/DetailsProduct/index.tsx";
import { Category } from "./routes/Categories/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        loader: () => {
          const product = apiEcommerceService.getProducts();
          return defer({
            product,
          });
        },
        element: <Home />,
      },
      {
        path: "/product/:productId",
        loader: (options) => {
          const params = options.params as any;
          const product = apiEcommerceService.getProductById(params.productId);
          return defer({
            product,
          });
        },
        element: <Details />,
      },

      {
        path: "products/category/:category",
        loader: (options) => {
          const params = options.params as any;
          const product = apiEcommerceService.getCategoryById(params.category);
          return defer({
            product,
          });
        },
        element: <Category />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
