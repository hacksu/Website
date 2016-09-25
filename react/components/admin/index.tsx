import * as React from "react";
import {EventManagement} from "./event-management"
export interface AdminProps {location: { query: {access_token: string}, hash: string} }

const GOOGLE_OAUTH = "https://accounts.google.com/o/oauth2/v2/auth?prompt=select_account&response_type=token";
const CLIENT_ID = encodeURIComponent("172522245692-jcibsu3m69hs8un6ib4hum10voulgs9c.apps.googleusercontent.com");
const SCOPE = encodeURIComponent("https://www.googleapis.com/auth/userinfo.profile");

export class Admin extends React.Component<AdminProps, {}> {
    state: {authenticated: boolean, userid: string} = {authenticated: false, userid: undefined}

    constructor(props: AdminProps){
        super(props);
        this.componentWillReceiveProps(props);
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

    componentWillReceiveProps(props: AdminProps) {
        const REDIRECT_URI = encodeURIComponent(window.location.href);

        if (!this.token) {
            window.location.assign(GOOGLE_OAUTH+"&client_id="+CLIENT_ID+"&redirect_uri="+REDIRECT_URI+"&scope="+SCOPE);
        }
        //console.log(this.props.location, this.token)
        console.log("sending event")
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
    }

    render() {
        if (!this.state.authenticated && this.state.userid) {
            return  <div>
                        <h1>Can't find you in the list of allowed users</h1>
                        {this.state.userid}
                    </div>
        } else if (this.state.authenticated) {
            return  <EventManagement src="/api/events"/>
        } else {
            return <h1>Please wait</h1>
        }
    }
}

110876166819934794060
110947483314315320479