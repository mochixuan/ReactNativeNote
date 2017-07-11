/* */ 
'use strict';
exports.__esModule = true;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _warning = require('warning');
var _warning2 = _interopRequireDefault(_warning);
var _invariant = require('invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _RouteUtils = require('./RouteUtils');
var _PropTypes = require('./PropTypes');
var _React$PropTypes = _react2['default'].PropTypes;
var string = _React$PropTypes.string;
var bool = _React$PropTypes.bool;
var func = _React$PropTypes.func;
var Route = _react2['default'].createClass({
  displayName: 'Route',
  statics: {createRouteFromReactElement: function createRouteFromReactElement(element) {
      var route = _RouteUtils.createRouteFromReactElement(element);
      if (route.handler) {
        _warning2['default'](false, '<Route handler> is deprecated, use <Route component> instead');
        route.component = route.handler;
        delete route.handler;
      }
      return route;
    }},
  propTypes: {
    path: string,
    ignoreScrollBehavior: bool,
    handler: _PropTypes.component,
    component: _PropTypes.component,
    components: _PropTypes.components,
    getComponents: func
  },
  render: function render() {
    _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered');
  }
});
exports['default'] = Route;
module.exports = exports['default'];
