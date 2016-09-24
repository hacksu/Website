import * as React from "react";
import {EventFetch} from "../event-fetch";

export interface WhatWeTeachProps {img: string, left?: boolean, id?: string }

export class WhatWeTeach extends React.Component<WhatWeTeachProps, {}> {
    render() {
        let content =   <div>
                            <h2> What do we teach? </h2>
                            <p className="lead">
                                We teach a wide variety of technologies, both
                                front end and back end. These include things
                                like jQuery Mobile, Python, Django, Node.js,
                                Android, iOS, Heroku, and much more. All of this
                                is in hopes that you fall in love with one or
                                many of these technologies and construct
                                something cool.
                            </p>
                        </div>


        if (this.props.left) {
            return  <div className="row" id={this.props.id}>
                        <div className="col-md-4">
                            <img className="img-circle img-responsive img-info"
                            src={this.props.img} alt="Kent State" />
                        </div>
                        <div className="col-md-7 col-md-offset-1">
                            {content}
                        </div>
                        <div className="row">
                            <div className="col-md-7 col-md-offset-5">
                                <EventFetch src="/api/events"/>
                            </div>
                        </div>
                    </div>
        } else {
            return  <div className="row">
                        <div className="col-md-7">
                            {content}
                        </div>
                        <div className="col-md-4 col-md-offset-1">
                            <img className="img-circle img-responsive img-info"
                            src={this.props.img} alt="Kent State" />
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <EventFetch src="/api/events"/>
                            </div>
                        </div>
                    </div>
        }
    }
}
