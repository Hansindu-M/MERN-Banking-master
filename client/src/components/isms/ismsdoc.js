import React, { Component } from "react";
import doc1 from './documents/HP Banking  ISM organization chart data.xlsx';
import doc2 from './documents/HP Banking Assest Register.xlsx';
import doc3 from './documents/HP Banking Asset inventory.xlsm';
import doc4 from './documents/HP Banking BCR.docx';
import doc5 from './documents/HP Banking Controls cross check.xlsx';
import doc6 from './documents/HP Banking Data restoration form.docx';
export default class ismsdoc extends Component {
    render() {
        return (

            <div className=" ">
                <h2>HP Banking  ISM organization chart data</h2>
                <iframe src={doc1} width="200" height="300"></iframe>
                <h2>HP Banking Assest Register</h2>
                <iframe src={doc2} width="200" height="300"></iframe>
                <h2>HP Banking Asset inventory</h2>
                <iframe src={doc3} width="200" height="300"></iframe>
                <h2>HP Banking BCR</h2>
                <iframe src={doc4} width="200" height="300"></iframe>
                <h2>HP Banking Controls cross check</h2>
                <iframe src={doc5} width="200" height="300"></iframe>
                <h2>HP Banking Data restoration form</h2>
                <iframe src={doc6} width="200" height="300"></iframe>



            </div>

        );
    }
}