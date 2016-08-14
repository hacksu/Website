import * as React from "react";
export interface EventProps { title: string, content: string, type: string, start: Date }

export class Event extends React.Component<EventProps, {}> {

  constructor(props: EventProps) {
    super(props);
    this.state = { };
  }

  getMessageHtml () {
    return  {__html: this.props.content};
  }

  render() {
      return <div>
                <h1>{this.props.title}</h1>
                <span dangerouslySetInnerHTML={this.getMessageHtml()} />
             </div>;
  }
}
