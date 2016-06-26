'use strict';

let React = require('react');
let FolderStructure = require('./components/folder-structure');
let folderContents = [
    {
        id: 1,
        name: 'app',
        depth: 1
    },
    {
        id: 2,
        name: 'src',
        depth: 2
    },
    {
        id: 3,
        name: 'main.js',
        depth: 3
    },
    {
        id: 4,
        name: 'resources',
        depth: 2
    },
    {
        id: 5,
        name: 'bundle.js',
        depth: 3
    }
];
let App = React.createClass({
    render: function () {
        return (
            <FolderStructure contents={folderContents}/>
        );
    }
});

module.exports = App;