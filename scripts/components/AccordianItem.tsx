import * as React from "react";
import {AccordianContent} from "./AccordianContent";

export interface AccordianItemProps {title: string}

export class AccordianItem extends React.Component<AccordianItemProps, {}> {
    state: {expanded: boolean, height: string}
    constructor(props: AccordianItemProps) {
        super(props);
        this.state = {expanded: false, height: "0"};
    }

    expand () {
        this.setState({expanded: !this.state.expanded})
    }

    render() {

        return <div>
                    <div className="header" onClick={() => this.expand()}>
                        {this.props.title}
                    </div>
                    <AccordianContent expanded={this.state.expanded}>
                        {this.props.children}
                    </AccordianContent>
                </div>;
    }
}