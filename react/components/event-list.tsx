import * as React from "react";
import {EventView, EventViewProps} from "./event-view";
import {Accordian} from "./accordian";
import {Event} from "../event";

export interface EventListProps { events:  Event[]}


export class EventList extends React.Component<EventListProps, {}> {

    state: {expanded: number}
    request: JQueryXHR;

    constructor(props: EventListProps) {
        super(props);
        this.state = {expanded: undefined};
    }


    render() {
        let content = this.props.events
            .filter((event) => (event.date > new Date))
            .slice(0, 4)
            .sort((a, b) => (((a.date < b.date)?0:1) - ((a.date > b.date)?0:1)) )
            .map( (event, i) => <EventView
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            content={event.content} date={event.date} expanded={this.state.expanded == i}
                            onToggled={(e) => {
                                                if (this.state.expanded === i) {
                                                    this.setState({expanded: undefined});
                                                } else {
                                                    this.setState({expanded: i});
                                                }
                                            }} />
        )
        return <Accordian>
                    {content}
                </Accordian>;
    }
}
