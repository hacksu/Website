import * as React from "react";

export interface PicInfoProps { title: string, content: string, img: string, left?: boolean, id?: string }

export class PicInfo extends React.Component<PicInfoProps, {}> {
    render() {
        if (this.props.left) {
            return  <div className="row" id={this.props.id}>
                        <div className="col-md-4">
                            <img className="img-circle img-responsive img-info"
                            src={this.props.img} alt="Kent State" />
                        </div>
                        <div className="col-md-7 col-md-offset-1">
                            <h2> {this.props.title} </h2>
                            <p className="lead">
                                {this.props.content}
                            </p>
                        </div>
                    </div>
        } else {
            return  <div className="row">
                        <div className="col-md-7">
                            <h2> {this.props.title} </h2>
                            <p className="lead">
                                {this.props.content}
                            </p>
                        </div>
                        <div className="col-md-4 col-md-offset-1">
                            <img className="img-circle img-responsive img-info"
                            src={this.props.img} alt="Kent State" />
                        </div>
                    </div>
        }
    }
}