import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

class Editor2 extends Component {
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
                <Editor
                    className="reverse-draft"
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                />
            </React.Fragment>
        )
    }
}

export default Editor2;