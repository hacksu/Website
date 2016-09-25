import * as React from "react";
import {Event} from "../../event";
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
                    return  <div className="container" key={event.id}>
                                <div className="row">
                                    <h2 onClick={()=>this.setState({editing: i})}>{event.title}</h2>
                                    <h3>{event.date.toString()}</h3>

                                    <div>
                                        <span dangerouslySetInnerHTML={{__html: event.content}} />
                                    </div>
                                </div>
                                <div className="row">
                                    <Remove onClick = { () => this.props.onRemove(event)}/>
                                </div>
                            </div>
                }
            }
        );
        let top = <Add onClick = { () => this.setState({new: true})}/>

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