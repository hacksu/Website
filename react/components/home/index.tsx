import * as React from "react";
import {Jumbotron} from "./jumbotron"
import {Zebra} from "../layout/zebra"
import {PicInfo} from "./pic-info"

export interface HomeProps {  }

export class Home extends React.Component<HomeProps, {}> {
    render() {
        return  <div>
                    <Jumbotron>
                        <div className="row">
                            <div className="col-xs-4">
                                <h1 className="title"> Learn </h1>
                                <h1 className="title"> Grow </h1>
                                <h1 className="title"> Create </h1>
                            </div>
                        </div>
                    </Jumbotron>

                    <Zebra>
                        <PicInfo
                        id="about-info"
                        img="/images/2.jpg"
                        title="Who are we?"
                        content={`Hacksu is a student organization at Kent
                        State University focused on learning and
                        utilizing contemporary web and mobile
                        technologies. We are a very diverse
                        community, spanning multiple majors from
                        Fashion Design to Zoology and are open to
                        students of any skill level. Everyone is
                        welcome.`}/>
                        <PicInfo
                        img="/images/2.jpg"
                        title="Who are we?"
                        content={`Hacksu is a student organization at Kent
                        State University focused on learning and
                        utilizing contemporary web and mobile
                        technologies. We are a very diverse
                        community, spanning multiple majors from
                        Fashion Design to Zoology and are open to
                        students of any skill level. Everyone is
                        welcome.`}/>
                    </Zebra>
                </div>
    }
}