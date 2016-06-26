let React = require('react');
let FolderContent = require('./folder-content');

let FolderStructure = React.createClass({
    getInitialState: function () {
        return {
            contents: this.props.contents
        }
    },

    onIndent: function (id) {
        let contents = this.state.contents,
            i;

        for (i = 0; i < contents.length; i++) {
            if (contents[i].id === id) {
                contents[i].depth = contents[i].depth + 1;
            }
        }
        this.setState({
            contents: contents
        });
    },

    onUnIndent: function (id) {
        let contents = this.state.contents,
            i;

        for (i = 0; i < contents.length; i++) {
            if (contents[i].id === id) {
                contents[i].depth = contents[i].depth - 1;
            }
        }
        this.setState({
            contents: contents
        });
    },

    render: function () {
        return (
            <div className="folder-structure">
                {
                    this.state.contents.map(function (content, idx) {
                        return <FolderContent
                            key={'content-' + idx}
                            id={content.id}
                            name={content.name}
                            depth={content.depth}
                            onIndent={this.onIndent}
                            onUnIndent={this.onUnIndent}
                        />
                    }.bind(this))
                }

            </div>
        );
    }
});

module.exports = FolderStructure;