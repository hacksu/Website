import * as React from "react";
import {Jumbotron} from "./jumbotron"
import {Zebra} from "../layout/zebra"
import {PicInfo} from "./pic-info"
import {WhatWeTeach} from "./what-we-teach"
import {EventManagement} from "../event-management"
export interface HomeProps {  }

export class Home extends React.Component<HomeProps, {}> {
    render() {
        console.log("made it");

        return  <EventManagement api="adsfads"/>
    }
}
