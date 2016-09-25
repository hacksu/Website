import * as React from "react";
import {EventManagement} from "./event-management"
export interface AdminProps {location: { query: {access_token: string}, hash: string} }

const GOOGLE_OAUTH = "https://accounts.google.com/o/oauth2/v2/auth?prompt=select_account&response_type=token";
const CLIENT_ID = encodeURIComponent("172522245692-jcibsu3m69hs8un6ib4hum10voulgs9c.apps.googleusercontent.com");
const SCOPE = encodeURIComponent("https://www.googleapis.com/auth/userinfo.profile");

export class Admin extends React.Component<AdminProps, {}> {
    state: {authenticated: boolean, userid: string} = {authenticated: undefined, userid: undefined}

    constructor(props: AdminProps){
        super(props);
    }

    get token() {
        var variables = decodeURIComponent(this.props.location.hash.substr(1, this.props.location.hash.length -1)).split('&');
        for (var i=0; i<variables.length; ++i) {
            var parts = variables[i].split("=");
            if (parts[0] == "access_token") {
                return parts[1];
            }
        }
        return undefined;
    }

    get oauth_url() {
        const REDIRECT_URI = encodeURIComponent(window.location.origin + window.location.pathname);
        return GOOGLE_OAUTH+"&client_id="+CLIENT_ID+"&redirect_uri="+REDIRECT_URI+"&scope="+SCOPE;
    }

    render() {
        if (!this.state.authenticated && this.state.userid) {
            return  <div>
                        <h1>Can't find you in the list of allowed users</h1>
                        {this.state.userid}
                        <a href={this.oauth_url}>Click here to sign in with a different account</a>
                    </div>
        } else if (!this.token) {
            return  <div>
                        <h1>You need to get an Oauth2 Token first</h1>
                        <a href={this.oauth_url}>Click here to sign in</a>
                    </div>
        } else if (this.state.authenticated != undefined && this.state.authenticated === false && this.state.userid === undefined) {
            return  <div>
                        <h1>Token probably expired</h1>
                        <a href={this.oauth_url}>Click here to sign in</a>
                    </div>
        } else if (this.state.authenticated === undefined) {
                $.ajax({
                    type: 'POST',
                    url: '/api/status',
                    data: JSON.stringify({token: this.token}),
                    contentType: "application/json",
                    dataType: 'json',
                    success: data  => {
                        this.setState({userid: data.userid, authenticated: data.authorized == true});

                        console.log(data);
                    },
                    error:  function( data ) {
                        console.log(data);
                    }
                });
            return <h1>Please wait</h1>
        } else if (this.state.authenticated) {
            return  <EventManagement src="/api/events" token={this.token}/>
        } else {
            return <h1>Please wait</h1>
        }
    }
}
