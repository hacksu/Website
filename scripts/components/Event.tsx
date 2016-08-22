import * as React from "react";
import {AccordianItem} from "./AccordianItem";

export interface EventProps { title: string, content: string, date: Date }

export class Event extends React.Component<EventProps, {}> {
    state: {expanded: boolean}
    constructor(props: EventProps) {
        super(props);
        this.state = {expanded: false};
    }

    get messageHtml () {
        return  {__html: this.props.content};
    }

    get formatedDate() {
        const months = ["January", "February ", "March", "April", "May", "June",
                        "July", "August", "October", "November", "December"]
        return months[this.props.date.getMonth()] + " " + this.props.date.getDate()
    }

    render() {
        return  <AccordianItem title={this.props.title + this.formatedDate}>
                    <span dangerouslySetInnerHTML={this.messageHtml} />
                </AccordianItem>
    }
}
