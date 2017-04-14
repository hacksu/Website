import * as React from "react";
import {Jumbotron} from "./jumbotron"
import {Zebra} from "../layout/zebra"
import {PicInfo} from "./pic-info"
import {WhatWeTeach} from "./what-we-teach"

export interface HomeProps {  }

export class Home extends React.Component<HomeProps, {}> {
    render() {
        console.log("made it");

        return  <div id="wrap">
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
                        img="/images/2.jpg">
                            <h2> Who are we? </h2>
                            <p className="lead">
                                Hacksu is a student organization at Kent
                                State University focused on learning and
                                utilizing contemporary web and mobile
                                technologies. We are a very diverse
                                community, spanning multiple majors from
                                Fashion Design to Zoology and are open to
                                students of any skill level. Everyone is
                                welcome.
                            </p>
                        </PicInfo>

                        <WhatWeTeach img="/images/1.jpg" id="events"/>
                        <PicInfo
                        img="/images/3.jpg">
                            <h2> How do I get involved? </h2>
                            <p className="lead">
                                We recommend coming to our weekly meetings,
                                held during the semester, on Tuesdays at
                                the Honors College in Room 060 at 7:00pm.
                                You can also join our
                                <a href="https://www.facebook.com/groups/hacksu">
                                    Facebook page
                                </a>
                                and follow us on
                                <a href="https://www.twitter.com/_hacksu">
                                    Twitter
                                </a>
                                to see what we are up to!
                            </p>
                            <p className="lead">
                                Sign up to our mailing list so we can keep
                                you updated on our weekly meetings and other
                                goings ons.
                            </p>
                            <form className="newsletter"
                                  action="/api/mailinglist"
                                  method="post">
                                  <label>Email: </label>
                                  <input type="email" name="email" id="email" required/>
                                  <input type="submit" value="Register"/>
                            </form>
                        </PicInfo>
                    </Zebra>
                </div>
    }
}
