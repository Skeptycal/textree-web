'use strict';

let React = require('react');

let FolderContent = React.createClass({

    getInitialState: function () {
        return {
            editing: false,
            name: this.props.name
        }
    },

    startEditing: function () {
        this.setState({
            editing: true
        }, function () {
            this.refs.nameInput.focus();
        });
    },

    cancelEditing: function () {
        this.setState({
            editing: false
        });
    },

    handleNameChange: function (event) {
        this.setState({
            name: event.target.value
        });

    },

    handleKeyPress: function (event) {
        let key = event.key;
        if (key === 'Enter' || key === 'Escape') {
            this.cancelEditing();
        } else if (event.shiftKey && key === 'Tab') {
            this.props.onUnIndent(this.props.id);
        } else if (key === 'Tab') {
            this.props.onIndent(this.props.id);
        }
    },

    renderIndent: function () {
        let depth = this.props.depth,
            depthArr = [],
            i;

        for (i = 1; i < depth; i++) {
            depthArr.push(<span key={'indent'+i} className='indent'></span>);
        }
        return depthArr;
    },

    renderInput: function () {
        return (
            <input
                ref="nameInput"
                type="text"
                onKeyDown={this.handleKeyPress}
                onChange={this.handleNameChange}
                onBlur={this.cancelEditing}
                value={this.state.name}/>
        );
    },

    renderName: function () {
        return (
            <span onClick={this.startEditing} className='name'>{this.state.name}</span>
        );
    },

    renderButtons: function() {
        return (
            <ul className="cta-buttons">
                <li>⛌</li>
            </ul>
        );
    },

    render: function () {
        let elm;

        if (this.state.editing) {
            elm = this.renderInput();
        } else {
            elm = this.renderName();
        }

        return (
            <div className='folder-content group'>
                {this.renderButtons()}
                {this.renderIndent()}
                {elm}
            </div>
        );
    }
});

module.exports = FolderContent;