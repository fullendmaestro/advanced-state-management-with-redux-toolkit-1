import { StrictMode } from "react";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>,
);
