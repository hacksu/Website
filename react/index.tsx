import * as React from "react";
import * as ReactDOM from "react-dom";

import { Routes } from "./routes";
import { Layout } from "./components/layout"

ReactDOM.render(<Layout><Routes/></Layout>,
    document.getElementById("react")
);