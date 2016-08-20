import * as React from "react";
import {ReactCSSTransitionGroup} from "react-addons-css-transition-group";
console.log(ReactCSSTransitionGroup);

export interface AccordianItemProps {title: string}

export class AccordianItem extends React.Component<AccordianItemProps, {}> {
    state: {expanded: boolean, height: string}
    constructor(props: AccordianItemProps) {
        super(props);
        this.state = {expanded: false, height: "0"};
    }

    expand () {
        console.log("Expanding", this.state.expanded)
        this.setState({expanded: !this.state.expanded})
    }

    render() {

        return <div>
                    <div className="header" onClick={() => this.expand()}>
                        {this.props.title}
                    </div>
                    <ReactCSSTransitionGroup transitionName="accordian-content" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {
                        (() => {
                            console.log("test123")
                            if (this.state.expanded) {
                                return  this.props.children

                            }
                        })()
                    }
                    </ReactCSSTransitionGroup>
                </div>;
    }
}