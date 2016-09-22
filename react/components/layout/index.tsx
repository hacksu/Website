import * as React from "react";
import {Footer} from "./footer";
import {Navbar} from "./navbar";


export interface LayoutProps { }

export class Layout extends React.Component<LayoutProps, {}> {
    render() {
        let content = this.props.children.map( (item, i) => )
        return  <div id="wrap">
                    <Navbar>
                        <div id="nextup"/>
                        <a href="https://khe.io"> Kent Hack Enough </a>
                        <a href="/contact"> Contact </a>
                        <a className="social-item" href="https://www.facebook.com/groups/hacksu/">
                            <img src="/images/facebook.png" />
                        </a>
                        <a className="social-item" href="https://twitter.com/_hacksu">
                            <img src="/images/twitter.png" />
                        </a>
                        <a className="social-item" href="https://github.com/hacKSU">
                            <img src="/images/github.png" />
                        </a>
                    </Navbar>
                    {this.props.children}
                    <Footer>
                        <a href="/#about-info" onclick="showAbout();return false;">
                            About
                        </a>
                        <a href="https://khe.io">
                            Kent Hack Enough
                        </a>
                        <a href="/contact">
                            Contact
                        </a>
                    </Footer>
                </div>
    }
}