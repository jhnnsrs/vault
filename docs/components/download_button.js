import React, { useState } from 'react';


export const DownloadButton = (props) => {
    return <a href="https://github.com/jhnnsrs/jio/releases" target="_blank" className="button button--outline button--success" style={{marginBottom: "10px"}} rel="noopener noreferrer">{props.children}</a>
}