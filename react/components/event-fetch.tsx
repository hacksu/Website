import * as React from "react";
import {Event} from "../event";
import {EventList} from "./event-list";

export interface EventFetchProps { src: string }

export class EventFetch extends React.Component<EventFetchProps, {}> {
    state: {events: Event[]};
    request: JQueryXHR;

    constructor(props: EventFetchProps) {
        super(props);
        this.request = $.get(props.src, (data: any) => {
            this.setState(
                {events: data.events.map(
                     (event: any) => {
                         event.date = new Date(event.date);
                         return event;
                     })}
            );
        });
        this.state = { events: [] };
    }
    componentWillUnmount() {
        this.request.abort();
    }


    render() {
        return  <EventList events={this.state.events}/>
    }
}
