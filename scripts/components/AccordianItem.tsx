import * as React from "react";
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
console.log(ReactCSSTransitionGroup);

export interface AccordianItemProps {title: string}

export class AccordianItem extends React.Component<AccordianItemProps, {}> {
    state: {expanded: boolean, height: string}
    constructor(props: AccordianItemProps) {
        super(props);
        this.state = {expanded: false, height: "0"};
    }

    expand () {
        this.setState({expanded: !this.state.expanded})
    }

    render() {

        return <div>
                    <div className="header" onClick={() => this.expand()}>
                        {this.props.title}
                    </div>
                    <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {
                        (() => {
                            if (this.state.expanded) {
                                return  <div key={"1"}>
                                            {this.props.children}
                                        </div>

                            }
                        })()
                    }
                    </ReactCSSTransitionGroup>
                </div>;
    }
}