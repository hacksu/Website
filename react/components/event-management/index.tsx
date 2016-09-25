import * as React from "react";
import {EventList} from "../event-list";
import {EventsEditor} from "./events-editor";
import {EventFetch} from "../event-fetch";
import {Event} from "../../event";
export interface EventManagementProps {api: string}

export class EventManagement extends React.Component<EventManagementProps, {}> {
    state: {events: Event[]}
    constructor(props: EventManagementProps) {
        super(props);
        this.addEvent;
        this.removeEvent;
        this.editEvent;
        this.state = {events: [{title: "test", date: new Date(), content: "<p>test</p>", id: 1},
                               {title: "test", date: new Date(), content: "<p>test</p>", id: 2}]}

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
