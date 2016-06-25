let React = require('react');
let Item = require('./item');

let In = React.createClass({
    render: function () {
        return (
            <div class="in">
                {
                    this.props.list.map(function (item, idx) {
                        return <Item key={'line-'+idx} text={item}/>
                    })
                }
            </div>
        );
    }
});

module.exports = In;