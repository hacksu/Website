import * as React from "react";
import { AccordianItem } from "./AccordianItem";
export interface AccordianProps {}

export class Accordian extends React.Component<AccordianProps, {}> {
    constructor(props: AccordianProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="accordian">
                    {this.props.children}
                </div>;
    }
}