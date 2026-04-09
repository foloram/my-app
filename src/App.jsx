import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./components/Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cart } from "./pages/Cart";
import { Shop } from "./pages/Shop";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { ShopContextProvider } from "./context/ShopContext";
import { MainLayout } from "./Layouts/MainLayout";
import { Provider } from "react-redux";

// REVIEW: QueryClient is created inside the component, so a new instance is created on every
// render. This defeats caching and causes unnecessary refetches. Move it outside the component
// (e.g., `const client = new QueryClient();` at module level) or wrap in useRef/useMemo.
function App() {
  const client = new QueryClient();
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <ShopContextProvider>
            <Router>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Shop />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/contact" element={<Contact />} />
                </Route>
              </Routes>
            </Router>
          </ShopContextProvider>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
