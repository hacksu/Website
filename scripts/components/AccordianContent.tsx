import * as React from "react";

export interface AccordianContentProps {expanded: boolean}

export class AccordianContent extends React.Component<AccordianContentProps, {}> {
    state: {expanded: boolean, inTransition: boolean, height: number} = {expanded: false, inTransition: false, height: 0}
    constructor(props: AccordianContentProps) {
        super(props);
        this.state.expanded = props.expanded;
    }
    render() {
        if (this.state.expanded != this.props.expanded) {
            console.log("this.state.inTransition=",this.state.inTransition)
            this.state.inTransition = true;
            this.state.expanded = this.props.expanded;
        }
        let style = {
            "overflow": "hidden",
            "transition": "height 500ms",
            "background": "white",
            "borderBottom": ((this.state.expanded || this.state.inTransition) ? "1px solid  #ddd": "none")
        };
        return <div style={style} ref={(content) => {
                    if (!content) {
                        return;
                    }
                    let setSize = () => {
                        console.log(this.state.height)
                        if (this.state.inTransition) {
                            content.style.height = this.state.expanded ? "0" : this.state.height + "px";
                            setTimeout(setSize, 1);
                            this.state.inTransition = false;
                            setTimeout(() => this.setState({"inTransition": false}), 1+500);
                        } else {
                            content.style.height = !this.state.expanded ? "0" : this.state.height + "px";
                        }
                    }
                    setTimeout(setSize, 1);
                }}>
                    {
                        (() => {
                            if (this.state.expanded || this.state.inTransition) {
                                return  <div className="content"
                                        ref = {(element) => {if (element) this.state.height = element.clientHeight;}}>
                                            {this.props.children}
                                        </div>
                            }
                        })()
                    }

                </div>;
    }
}