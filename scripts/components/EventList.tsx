import * as React from "react";
import {Event, EventProps} from "./Event";
import {Accordian} from "./Accordian";

export interface EventListProps { src: string }


export class EventList extends React.Component<EventListProps, {}> {

    state: {events: EventProps[]};
    request: JQueryXHR;

    constructor(props: EventListProps) {
        super(props);
        this.request = $.get(props.src, (data: any) => {
            console.log(data);
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
        this.state
        let events = this.state.events.map(
            (event) => <Event key={event.title + event.date} title={event.title}
                        content={event.content} date={event.date} />
        )
        return <Accordian>
                    {events}
                </Accordian>;
    }
}
