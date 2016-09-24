import * as React from "react";
import {EventView, EventViewProps} from "./event-view";
import {Accordian} from "./Accordian";
import {Event} from "../event";

export interface EventListProps { events:  Event[]}


export class EventList extends React.Component<EventListProps, {}> {

    state: {events: EventViewProps[]}
    request: JQueryXHR;

    constructor(props: EventListProps) {
        super(props);
        this.state = { events: this.props.events.map(event => event as EventViewProps) };
    }


    collapseAll() {
        this.state.events.forEach((event) => {event.expanded=false})
    }

    render() {
        let events = this.state.events
            .filter((event) => (event.date > new Date))
            .slice(0, 4)
            .map( (event) => <EventView key={event.title + event.date} title={event.title}
                            content={event.content} date={event.date} expanded={event.expanded}
                            onToggled={(e) => {
                                                var current_state = event.expanded;
                                                this.collapseAll();
                                                event.expanded = !current_state;
                                                this.setState({events: this.state.events});
                                            }} />
        )
        return <Accordian>
                    {events}
                </Accordian>;
    }
}
