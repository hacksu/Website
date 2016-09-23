import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./components/home";
import { Layout } from "./components/layout"

ReactDOM.render(<Layout><Home/></Layout>,
    document.getElementById("react")
);