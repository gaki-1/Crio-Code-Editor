import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');

const Editor = (props) => {
    const { LangName, value, onChange } = props

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className="editor-container">
            <div className="editor-title">
                {LangName}
            </div>
            <button>O/C</button>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="codemirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: LangName,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </div>
    );
}

export default Editor;