import * as React from "react";
import { AccordianItem } from "./AccordianItem";
export interface AccordianProps {}

export class Accordian extends React.Component<AccordianProps, {}> {
    constructor(props: AccordianProps) {
        super(props);
        this.state = {};
    }

    clicked () {
        console.log("Expanding")
    }

    render() {
        return <div className="accordian">
                    <AccordianItem title="testing 1">
                        content lots of content
                    </AccordianItem>
                    <AccordianItem title="testing 2">
                        content lots of content
                    </AccordianItem>
                </div>;
    }
}