import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const Editor = () => {
    return (  
        <div>
            <p>dummy code inside editor</p>
        </div>
    );
}
 
export default Editor;