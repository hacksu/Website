import * as React from "react";


export interface ZebraProps {
    children?: React.ReactElement<any>[];
}

export class Zebra extends React.Component<ZebraProps, {}> {
    render() {
        let zebra_items = React.Children.map(
            this.props.children,
            (item, i) => {
                let element = React.cloneElement(item as React.ReactElement<any>, {left: i%2 == 0})
                if (i%2 == 0) {
                    return  <div className="container">
                                {element}
                            </div>
                } else {
                    return  <div className="color-bg">
                                <div className="container">
                                    {element}
                                </div>
                            </div>
                }
            }
        );
        return  <div>{zebra_items}</div>;
    }
}