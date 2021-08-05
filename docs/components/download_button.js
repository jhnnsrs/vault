import React, { useState } from 'react';


export const DownloadButton = (props) => {
    return <button className="button button--outline button--success" style={{marginBottom: "10px"}}>{props.children}</button>
}