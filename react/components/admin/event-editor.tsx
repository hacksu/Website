import * as React from "react";
import {Event} from "../../event";

export interface EventEditorProps {event: Event, onChange: (event: Event) => void}

export class EventEditor extends React.Component<EventEditorProps, {}> {
    state: {title: string, date: string, content: string, id: number};

    constructor(props: EventEditorProps) {
        super(props);
        let event: any = this.props.event
        event.date = event.date.toLocaleString();
        this.state = event;
    }

    componentWillReceiveProps(props: EventEditorProps) {
        let event: any = this.props.event
        event.date = event.date.toLocaleString();
        this.setState(event);
    }

    render() {
        return  <form onSubmit={ (e)=> {
                    let event: any = this.state;
                    event.date = new Date(this.state.date);
                    this.props.onChange(event);
                    e.preventDefault()
                }}>
                    <div className="row">
                        <input type="text" value={this.state.title} onChange={e => this.setState({title: (e.target as any).value})}/>
                    </div>
                    <div className="row">
                        <input type="datetime" value={this.state.date} onChange={e => this.setState({date: (e.target as any).value})}/>
                    </div>
                    <div className="row">
                        <textarea style={{width: "100%"}} value={this.state.content} onChange={e => this.setState({content: (e.target as any).value})}/>
                    </div>
                    <div className="row">
                        <input type="submit" />
                    </div>
                </form>
    }
}
