import * as React from "react";
import {EventManagement} from "./event-management"
export interface AdminProps {location: { query: {access_token: string}, hash: string} }

const GOOGLE_OAUTH = "https://accounts.google.com/o/oauth2/v2/auth?response_type=token";
const CLIENT_ID = encodeURIComponent("172522245692-jcibsu3m69hs8un6ib4hum10voulgs9c.apps.googleusercontent.com");
const SCOPE = "profile";
export class Admin extends React.Component<AdminProps, {}> {
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

    render() {
        const REDIRECT_URI = encodeURIComponent(window.location.href);

        if (!this.token) {
            window.location.assign(GOOGLE_OAUTH+"&client_id="+CLIENT_ID+"&redirect_uri="+REDIRECT_URI+"&scope="+SCOPE);
        }
        console.log(this.props.location, this.token)
        return  <EventManagement src="/api/events"/>
    }
}
