import './App.css';
import Editor from './Editor';

function App() {
  return (
    <div className="App">
      <div>
        <div className="pane top-pane">
          <Editor /*HTML code editor*/ />
          <Editor /*CSS code editor*/ />
          <Editor /*JS code editor*/ />
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
