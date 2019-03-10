import * as React from "react";

interface ContactProps {

}


export function Contact(props: ContactProps) {
    return  <div className="container">
                <div className="row">
                    <div className="div col-md-10 col-md-offset-1">
                        <h1>Contact Us</h1>
                        <br/>
                        <p className="lead">
                            Send us an email at <a href="mailto:hacksu@cs.kent.edu">hacksu@cs.kent.edu</a>
                        </p>
                        <p className="lead">
                            Join our group on <a href="http://facebook.com/groups/hacksu">Facebook</a>
                        </p>
                        <p className="lead">
                            Follow us on <a href="http://twitter.com/hacksu">Twitter</a>
                        </p>
                        <p className="lead">
                            Check out our projects on <a href="https://github.com/hacksu">GitHub</a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" style={{'textAlign': 'center', color: '#b9b9b9'}}>
                        <h3 style={{'fontWeight': 300}}> We want to hear what you think! </h3>
                    </div>
                </div>
            </div>
}
