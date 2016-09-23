import * as React from "react";

export interface NavbarProps { }

export class Navbar extends React.Component<NavbarProps, {}> {
    render() {
        let nav_items = React.Children.map(this.props.children, item => <li>{item}</li>)
        return  <div className="navbar navbar-default">
                    <div className="navbar-header">
                        <button className="navbar-toggle"
                                type="button"data-toggle="collapse"
                                data-target=".navbar-collapse">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="/">
                            <img src="/images/hacksu.png" />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {nav_items}
                        </ul>
                    </div>
                </div>
    }
}