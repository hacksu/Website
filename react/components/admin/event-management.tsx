import * as React from "react";
import {EventList} from "../event-list";
import {EventsEditor} from "./events-editor";
import {EventFetch} from "../event-fetch";
import {Event} from "../../event";
export interface EventManagementProps {src: string}

export class EventManagement extends React.Component<EventManagementProps, {}> {
    state: {events: Event[]}
    request: JQueryXHR;

    constructor(props: EventManagementProps) {
        super(props);
        this.addEvent;
        this.removeEvent;
        this.editEvent;
        this.state = {events: []};
        this.fetch();

    }

    fetch() {
        this.request = $.get(this.props.src, (data: any) => {
            this.setState(
                {events: data.events.map(
                     (event: any) => {
                         event.date = new Date(event.date);
                         return event;
                     })}
            );
        });
    }

    componentWillUnmount() {
        this.request.abort();
    }

    addEvent(event: Event){
        this.setState({events: this.state.events.concat(event)})
    }

    removeEvent(event: Event) {
        this.setState({events: this.state.events.filter(e=>e.id != event.id)});
    }

    editEvent(event: Event) {
        this.setState({events: this.state.events.map(e=>(e.id == event.id)?event:e)});
    }

    render() {
        return  <div  id="wrap">
                    <EventsEditor events={this.state.events}
                                  onChange={(event) => this.editEvent(event)}
                                  onRemove={(event) => this.removeEvent(event)}
                                  onAdd={(event) => this.addEvent(event)} />

                    <EventList events={this.state.events}/>

                </div>
    }
}
