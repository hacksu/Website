import * as React from "react";

export interface FooterProps { }

export class Footer extends React.Component<FooterProps, {}> {
    render() {
        let footer_items = React.Children.map(this.props.children, item => <li>{item}</li>)
        return  <div id="footer">
                    <div className="container">
                        <ul className="list-inline sub-nav">
                            {footer_items}
                        </ul>
                        <p className="text-muted credit">
                            &copy; 2016 HacKSU
                        </p>
                    </div>
                </div>
    }
}