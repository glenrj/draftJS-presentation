import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Editor1 from './Editor1.js';
import Editor2 from './Editor2.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onUnderlineClick = this.onUnderlineClick.bind(this);
    this._onBoldClick = this._onBoldClick.bind(this);
    this.onToggleCode = this.onToggleCode.bind(this);
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  onUnderlineClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  onToggleCode = () => {
    this.onChange(RichUtils.toggleCode(this.state.editorState));
  }

  render() {
    return (
      <React.Fragment>
        <header className="wrapper">
          <h1>Draft.js</h1>
          <h2>Rich Text Editor for React</h2>
          <div className="header-image">
            <a href="#1">
              <img src={require("./assets/9xvwNLlR_400x400.jpg")} alt="Draft.js logo" className="logo" />
            </a>
          </div>
        </header>
        <main className="wrapper">

          <section id="1">
            <h3>What is Draft.js?</h3>
            <p>"Draft.js makes it easy to build any type of rich text input, whether you're just looking to support a few inline text styles or building a complex text editor for composing long-form articles." - Facebook Inc.</p>
            <a href="#2"><i className="far fa-arrow-alt-circle-down"></i></a>
          </section>

          <section id="2">
            <h3>This is Draft.js</h3>
            <div>
              <Editor1 />
            </div>
            <a href="#3"><i class="far fa-arrow-alt-circle-down"></i></a>
          </section>

          <section id="3">
            <h3>How to add Draft.js to your website</h3>
            <p>Draft.js can only be used in React applications. It is dependent on the React DOM and will not work without it.</p>
            <h4>1. Install via command line</h4>
            <code>npm install --save draft-js react react-dom</code>
            <p>If you're having issues getting this to work, try:</p>
            <code>npm install --save draft-js react react-dom babel-polyfill</code>
            <a href="#4"><i class="far fa-arrow-alt-circle-down"></i></a>
          </section>

          <section id="4">
            <h4>2. Import Editor and draft.css</h4>
            <img src={require("./assets/imports.png")} alt="screenshot of Editor and draft.css being imported into React app" className="screenshot" />
            <a href="#5"><i class="far fa-arrow-alt-circle-down"></i></a>
          </section>

          <section id="5">
            <h4 className="stepThree">3. Use the Editor component like you would any other</h4>
            <p>The Editor component requires three props to work:</p>
            <img src={require("./assets/props.png")} alt="screenshot of Editor component code in React App" className="screenshot" />
            <a href="#6"><i class="far fa-arrow-alt-circle-down"></i></a>
          </section>

          <section id="6" className="imageSection">
            <img src={require("./assets/basicFunctions.png")} alt="screenshot of code, showing the functions that must be included for Draft.js to work" className="screenshot basicFunctions" />
            <a href="#7"><i class="far fa-arrow-alt-circle-down"></i></a>
          </section>
          
          <section id="7">
            <h3>Now you have a functional Rich Text Editor in your browser!</h3>
            <div className="reverse-draft">
              <Editor2 />
            </div>
            <a href="#8"><i class="far fa-arrow-alt-circle-down"></i></a>
          </section>
          <section id="8">
            <h3>Add a UI with RichUtils</h3>
            {/* <p>By importing RichUtils, you gain access to functions that control these styles as well. You can use these to create a UI that your user can interact with to change their styles if they don't know the key commands.</p> */}
            <a href="https://codepen.io/Kiwka/pen/YNYvyG" className="image-link"><img src={require("./assets/richFunctions.png")} alt="screenshot of code, showing the functions that power Draft.js buttons" className="screenshot richUtils" /></a>
            <a href="#9"><i class="far fa-arrow-alt-circle-down"></i></a>
          </section>
          <section id="9">
            <h3>Browser Support</h3>
            <div className="browser-image">
              <img src={require("./assets/browsers.png")} alt="" className="screenshot" />
            <a href="#10"><i class="far fa-arrow-alt-circle-down"></i></a>
            </div>
          </section>
          <section id="10">
            <h1>Thank you!</h1>

          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
