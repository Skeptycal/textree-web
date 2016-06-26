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

    addNewContent: function () {
        let contents = this.state.contents,
            newContent = {
                name: 'file name'
            },
            lastContent = contents[contents.length - 1];

        newContent.id = lastContent.id + 1;
        newContent.depth = lastContent.depth;
        contents.push(newContent);
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
                <div onClick={this.addNewContent} className="add-new folder-content">
                    <ul className="cta-buttons">
                        <li onClick="">⛌</li>
                    </ul>
                    <span className='name'>{''}</span>
                </div>

            </div>
        );
    }
});

module.exports = FolderStructure;