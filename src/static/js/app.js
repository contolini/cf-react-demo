var React = require('react');
var Icon = require('cf-icons');

var Icons = React.createClass({
  render: function() {
    return (
      <ul>
        <li><Icon type="approved" /></li>
        <li><Icon type="error" /></li>
        <li><Icon type="help" /></li>
        <li><Icon type="delete" /></li>
      </ul>
    );
  }
});

React.render(
  <Icons />,
  document.getElementById('icons')
);
