'use strict';

let React = require('react');

let Item = React.createClass({

    getInitialState: function () {
        return {
            editing: false
        }
    },

    handleClick: function () {
        this.setState({
            editing: !this.state.editing
        });
    },
    createLineItem: function (item) {
        return {
            __html: item
        }
    },

    render: function () {
        let editElm = <input type="text" value={this.props.text}/>;
        let divElm = <div onClick={this.handleClick} dangerouslySetInnerHTML={this.createLineItem(this.props.text)}/>;
        return (
            this.state.editing ? editElm : divElm
        )
        ;
    }
});

module.exports = Item;