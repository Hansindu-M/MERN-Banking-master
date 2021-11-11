import React, { Component } from "react";
import doc from './level3.pcapng';

export default class connection extends Component {
    render() {
        return (

            <div className=" ">
                <h1>Do you want to test this?</h1>
                <iframe src={doc} width="200" height="300"></iframe>


            </div>

        );
    }
}