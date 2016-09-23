import * as React from "react";

export interface JumbotronProps { }

export class Jumbotron extends React.Component<JumbotronProps, {}> {
    render() {
        let footer_items = React.Children.map(this.props.children, item => <li>{item}</li>)
        return  <div className="jumbotron">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
    }
}