'use strict';

let React = require('react');
let In = require('./in');
let list = [
    'app',
    '&nbsp;&nbsp;&nbsp;&nbsp;src',
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;main.js',
    '&nbsp;&nbsp;&nbsp;&nbsp;resources',
    '&nbsp;&nbsp;&nbsp;&nbsp;index.html'
];

let App = React.createClass({
    render: function () {
        return (
            <In list={list} />
        );
    }
});

module.exports = App;