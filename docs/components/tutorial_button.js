import React, { useState } from 'react';


export const TutorialButton = (props) => {
    return <button className="button button--outline button--danger" style={{marginBottom: "10px"}}>{props.children}</button>
}