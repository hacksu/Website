import * as React from "react";
import {AccordianContent} from "./AccordianContent";


export interface AccordianItemProps {title: string | JSX.Element, expanded: boolean,  onToggled: (item: AccordianItem) => void}

export class AccordianItem extends React.Component<AccordianItemProps, {}> {
    state: {}
    constructor(props: AccordianItemProps) {
        super(props);
        this.state = {};
    }

    render() {

        return <div>
                    <div className="header" onClick={this.props.onToggled}>
                        {this.props.title}
                    </div>
                    <AccordianContent expanded={this.props.expanded}>
                        {this.props.children}
                    </AccordianContent>
                </div>;
    }
}