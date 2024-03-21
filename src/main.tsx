import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import * as info from "./info.json";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App info={info} />
    </React.StrictMode>
);
