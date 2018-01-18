(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', 'babel-runtime/core-js/symbol', './ResourceAgent'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/symbol'), require('./ResourceAgent'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.symbol, global.ResourceAgent);
    global.index = mod.exports;
  }
})(this, function (module, exports, _symbol, _ResourceAgent) {
  'use strict';

  exports.__esModule = true;

  var _symbol2 = _interopRequireDefault(_symbol);

  var _ResourceAgent2 = _interopRequireDefault(_ResourceAgent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var resourceAgents = {};

  var connect = function connect() {
    var clientId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _symbol2['default'])();
    var server = arguments[1];

    var resourceAgent = resourceAgents[clientId];
    if (!resourceAgent) {
      resourceAgent = new _ResourceAgent2['default'](server.resourceConfigs, server.dispatch.bind(server));
      resourceAgents[clientId] = resourceAgent;
    }
    return resourceAgent;
  };

  exports['default'] = connect;
  module.exports = exports['default'];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXNvdXJjZUFnZW50cyIsImNvbm5lY3QiLCJjbGllbnRJZCIsInNlcnZlciIsInJlc291cmNlQWdlbnQiLCJyZXNvdXJjZUNvbmZpZ3MiLCJkaXNwYXRjaCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE1BQU1BLGlCQUFpQixFQUF2Qjs7QUFFQSxNQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBc0M7QUFBQSxRQUE3QkMsUUFBNkIsdUVBQWxCLDBCQUFrQjtBQUFBLFFBQVJDLE1BQVE7O0FBQ3BELFFBQUlDLGdCQUFnQkosZUFBZUUsUUFBZixDQUFwQjtBQUNBLFFBQUksQ0FBQ0UsYUFBTCxFQUFvQjtBQUNsQkEsc0JBQWdCLCtCQUFrQkQsT0FBT0UsZUFBekIsRUFBMENGLE9BQU9HLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCSixNQUFyQixDQUExQyxDQUFoQjtBQUNBSCxxQkFBZUUsUUFBZixJQUEyQkUsYUFBM0I7QUFDRDtBQUNELFdBQU9BLGFBQVA7QUFDRCxHQVBEOzt1QkFTZUgsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNvdXJjZUFnZW50IGZyb20gJy4vUmVzb3VyY2VBZ2VudCc7XG5jb25zdCByZXNvdXJjZUFnZW50cyA9IHt9O1xuXG5jb25zdCBjb25uZWN0ID0gZnVuY3Rpb24oY2xpZW50SWQgPSBTeW1ib2woKSwgc2VydmVyKSB7XG4gIGxldCByZXNvdXJjZUFnZW50ID0gcmVzb3VyY2VBZ2VudHNbY2xpZW50SWRdO1xuICBpZiAoIXJlc291cmNlQWdlbnQpIHtcbiAgICByZXNvdXJjZUFnZW50ID0gbmV3IFJlc291cmNlQWdlbnQoc2VydmVyLnJlc291cmNlQ29uZmlncywgc2VydmVyLmRpc3BhdGNoLmJpbmQoc2VydmVyKSk7XG4gICAgcmVzb3VyY2VBZ2VudHNbY2xpZW50SWRdID0gcmVzb3VyY2VBZ2VudDtcbiAgfVxuICByZXR1cm4gcmVzb3VyY2VBZ2VudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q7XG4iXX0=