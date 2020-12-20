import React, { useState } from 'react'
import Editor from './components/Editor';
// import Tempo from './Tempo'


function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  return (
    <div className="App">
      {/* <Tempo /> */}

      <div className="pane top-pane">
        <Editor LangName="xml" value={html} onChange={setHtml} /*HTML code editor*/ />
        <Editor LangName="css" value={css} onChange={setCss} /*CSS code editor*/ />
        <Editor LangName="js" value={js} onChange={setJs} /*JS code editor*/ />
      </div>
      <div className="pane bottom-pane">

      </div>

    </div>
  );
}

export default App;
