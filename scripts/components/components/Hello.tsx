import * as React from "react";
import {Event} from "./Event"

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>
                  <h1>Hello</h1>
                  <Event title="test party" content="" type="test" start={new Date("2001-05-15 19:00")}/>
               </div>;
    }
}