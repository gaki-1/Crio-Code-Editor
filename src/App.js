import React, { useState } from 'react'
import Editor from './components/Editor';

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  return (
    <div className="App">
      <div>
        <div className="pane top-pane">
          <Editor LangName="xml" value={html} onChange={setHtml} /*HTML code editor*/ />
          <Editor LangName="css" value={css} onChange={setCss} /*CSS code editor*/ />
          <Editor LangName="js" value={js} onChange={setJs} /*JS code editor*/ />
        </div>
      </div>
      <div>
        <div className="bottom-pane">

        </div>

      </div>
    </div>
  );
}

export default App;
