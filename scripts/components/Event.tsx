import * as React from "react";
export interface EventProps { title: string, content: string, date: Date }

export class Event extends React.Component<EventProps, {}> {
    state: {expanded: boolean}
    constructor(props: EventProps) {
        super(props);
        this.state = {expanded: false};
    }

    get messageHtml () {
        return  {__html: this.props.content};
    }

    get formatedDate() {
        const months = ["January", "February ", "March", "April", "May", "June",
                        "July", "August", "October", "November", "December"]
        return months[this.props.date.getMonth()] + " " + this.props.date.getDate()
    }

    render() {
        return <div className="event">
                    <div className="title-bar">
                        <h3 className="event-title" >{this.props.title}</h3>
                        <h5 className="date">{this.formatedDate}</h5>
                    </div>
                    <div>
                        {() => {
                            if (this.state.expanded) {
                                return <span dangerouslySetInnerHTML={this.messageHtml} />
                            } else {
                                return;
                            }
                        }}
                    </div>
                </div>;
    }
}
