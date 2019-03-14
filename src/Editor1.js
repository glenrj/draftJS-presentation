import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

class Editor1 extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(),
        }

        this.onChange = this.onChange.bind(this);
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.onUnderlineClick = this.onUnderlineClick.bind(this);
        this._onBoldClick = this._onBoldClick.bind(this);
        this.onToggleCode = this.onToggleCode.bind(this);
        this.onItalicClick = this.onItalicClick.bind(this);
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

    onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

    onToggleCode = () => {
        this.onChange(RichUtils.toggleCode(this.state.editorState));
    }

    render() {
        return (
            <React.Fragment>
                <div className="ui">
                    <button onClick={this.onUnderlineClick} > Underline</button>
                    <button onClick={this._onBoldClick}>Bold</button>
                    <button onClick={this.onItalicClick}>Italic</button>
                    <button onClick={this.onToggleCode}>Code</button>
                </div>
                <Editor
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                />
            </React.Fragment>
        )
    }
}

export default Editor1;