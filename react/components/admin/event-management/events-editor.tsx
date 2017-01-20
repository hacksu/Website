import * as React from "react";
import {Event} from "../../../event";
import {EventEditor} from "./event-editor"
import {Add} from "./add"
import {Remove} from "./remove"
export interface EventsEditorProps {events: Event[],
                                    onChange: (event: Event) => void,
                                    onRemove: (event: Event) => void,
                                    onAdd: (event: Event) => void}

export class EventsEditor extends React.Component<EventsEditorProps, {}> {
    state: {editing: number, new: boolean}

    constructor(props: EventsEditorProps) {
        super(props);
        this.state = {editing: undefined, new: false};
    }

    render() {
        let sorted = this.props.events.sort((a, b) => (((a.date < b.date)?0:1) - ((a.date > b.date)?0:1)) )
        let events = sorted.map(
            (event, i) => {
                if (i == this.state.editing) {
                    return  <div  className="container" key={event.id}>
                                <EventEditor event={event} onChange={(event) =>{
                                    this.setState({editing: undefined});
                                    this.props.onChange(event);
                                }}/>

                            </div>
                } else {
                    return  <div className="container" key={event.id} onClick={()=>this.setState({editing: i})}>
                                <div className="row event-view">
                                    <h2 className="title">
                                        {event.title} 
                                        <span className="date"> ({event.date.toLocaleString()})</span>
                                    </h2>
                                    <span className="content" dangerouslySetInnerHTML={{__html: event.content}} />
                                </div>
                                <div className="row">
                                    <p onClick = { () => this.props.onRemove(event)}> Remove this event: <Remove onClick = { () => this.props.onRemove(event)}/> </p>
                                </div>
                            </div>
                }
            }
        );
        let top=<div className="container">
                    <h3 onClick = { () => this.setState({new: true})}>
                        Add a new event: <Add onClick = { () => this.setState({new: true})}/>
                    </h3>
                </div>

        if (this.state.new) {
            top =   <div className="container" key={-1}>
                        <EventEditor event={{title: "", content: "", date: new Date(), id: -1}} onChange={(event) =>{
                                            this.setState({new: false});
                                            this.props.onAdd(event);
                                        }}/>
                    </div>
                                
        }
        return  <div>
                    {top}
                    {events}
                </div>
    }
}
