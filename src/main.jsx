import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import "../css/all.min.css";

import App from "./Components/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ShopProvider } from "./Components/Context/ShopContext";
import { AuthProvider } from "./Components/Context/AuthContext";

let queryCient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ShopProvider>
      <QueryClientProvider client={queryCient}>
        <App />
      </QueryClientProvider>
      ,
    </ShopProvider>
  </AuthProvider>,
);
