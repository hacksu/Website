import * as React from "react";

export interface FooterProps { }

export class Footer extends React.Component<FooterProps, {}> {
    render() {
        let footer_items = this.props.children.map(item => <li>{item}</li>)
        return  <div id="footer">
                    <div className="container">
                        <ul className="list-inline sub-nav">
                            <li>
                                <a href="/#about-info" onclick="showAbout();return false;">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="https://khe.io">
                                    Kent Hack Enough
                                </a>
                            </li>
                            <li>
                                <a href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <p className="text-muted credit">
                            &copy; 2016 HacKSU
                        </p>
                    </div>
                </div>
    }
}