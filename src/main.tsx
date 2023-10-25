import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ContextProvider from "./contextCart/ContextCart.tsx";
import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import { apiEcommerceService } from "./service/apiEcommerce.ts";
import { Home } from "./Home/index.tsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
