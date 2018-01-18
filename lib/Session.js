(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports", "babel-runtime/core-js/map", "babel-runtime/helpers/classCallCheck", "babel-runtime/helpers/possibleConstructorReturn", "babel-runtime/helpers/inherits"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("babel-runtime/core-js/map"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/helpers/inherits"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.map, global.classCallCheck, global.possibleConstructorReturn, global.inherits);
    global.Session = mod.exports;
  }
})(this, function (module, exports, _map, _classCallCheck2, _possibleConstructorReturn2, _inherits2) {
  "use strict";

  exports.__esModule = true;

  var _map2 = _interopRequireDefault(_map);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits3 = _interopRequireDefault(_inherits2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Session = function (_Map) {
    (0, _inherits3["default"])(Session, _Map);

    function Session() {
      (0, _classCallCheck3["default"])(this, Session);
      return (0, _possibleConstructorReturn3["default"])(this, _Map.apply(this, arguments));
    }

    return Session;
  }(_map2["default"]);

  exports["default"] = Session;
  module.exports = exports["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlNlc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBcUJBLE87Ozs7Ozs7Ozs7O3VCQUFBQSxPIiwiZmlsZSI6IlNlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uIGV4dGVuZHMgTWFwIHtcbiAgLy8gc2Vzc2lvbiDnmoTkuIDkupvlhbbku5bpgLvovpFcbn1cbiJdfQ==