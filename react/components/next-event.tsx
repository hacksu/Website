import * as React from "react";
import {Event} from "../event"


export interface NextEventProps {src: string}

export class NextEvent extends React.Component<NextEventProps, {}> {
    request: JQueryXHR;
    state: {event: Event};
    constructor(props: NextEventProps) {
        super(props);
        this.request = $.get(props.src, (data: any) => {
            console.log(data);
            for(var i = 0; i < data.events.length; ++i) {
                if( new Date(data.events[i].date) > new Date()) {
                    data.events[i].date = new Date(data.events[i].date)
                    this.setState( {event: data.events[i]} );
                    return;
                };
            }
        });
        this.state = { event: undefined};
    }
    componentWillUnmount() {
        this.request.abort();
    }

    render() {

        return <a href="/#events">
                    <i className="material-icons" style={{fontSize: "20px", display: "inline"}}>date_range</i>

                    <span style={{display: "inline", verticalAlign: "top", paddingLeft: "0.5rem"}}>{this.state.event?this.state.event.title: ""}</span>
                </a>
    }
}
