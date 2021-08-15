import React, { Component } from "react";
import resumePDF from "./Resume-Jacob-Davidson.pdf";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
class Resume extends Component {
    render() {
        return (
            <div style={{display: "flex"}}>
                <Document file={resumePDF}>
                    onLoadError={console.error}
                <Page pageNumber={1}/>
                </Document>
                <Document file={resumePDF}>
                    <Page pageNumber={2}/>
                </Document>
            </div>
        );
    }
}

export default Resume;