(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'babel-runtime/core-js/object/create', 'babel-runtime/helpers/typeof'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('babel-runtime/core-js/object/create'), require('babel-runtime/helpers/typeof'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.create, global._typeof);
        global.utils = mod.exports;
    }
})(this, function (exports, _create, _typeof2) {
    'use strict';

    exports.__esModule = true;
    exports.cloneDeep = exports.isObject = undefined;
    exports.isUndefined = isUndefined;
    exports.cached = cached;

    var _create2 = _interopRequireDefault(_create);

    var _typeof3 = _interopRequireDefault(_typeof2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var isObject = exports.isObject = function isObject(value) {
        var type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value);
        return value != null && (type == 'object' || type == 'function');
    };

    function isUndefined(value) {
        return typeof value === 'undefined' || value === undefined;
    }

    /**
     * Create a cached version of a pure function.
     */
    function cached(fn) {
        var cache = (0, _create2['default'])(null);
        return function cachedFn(str) {
            var hit = cache[str];
            return hit || (cache[str] = fn(str));
        };
    }

    var cloneDeep = exports.cloneDeep = function cloneDeep(value) {
        if (null == value || "object" != (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value))) return value;
        if (value instanceof Number || value instanceof String || value instanceof Boolean) return value.valueOf();
        if (value instanceof Date) {
            var copy = new Date();
            copy.setTime(value.getTime());
            return copy;
        }
        if (value instanceof Object || value instanceof Array) {
            var copy = value instanceof Array ? [] : {};
            for (var attr in value) {
                if (value.hasOwnProperty(attr)) copy[attr] = value[attr] ? cloneDeep(value[attr]) : value[attr];
            }
            return copy;
        }
        throw new Error("Unable to clone obj! Its type isn't supported.");
    };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJpc1VuZGVmaW5lZCIsImNhY2hlZCIsImlzT2JqZWN0IiwidmFsdWUiLCJ0eXBlIiwidW5kZWZpbmVkIiwiZm4iLCJjYWNoZSIsImNhY2hlZEZuIiwic3RyIiwiaGl0IiwiY2xvbmVEZWVwIiwiTnVtYmVyIiwiU3RyaW5nIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJEYXRlIiwiY29weSIsInNldFRpbWUiLCJnZXRUaW1lIiwiT2JqZWN0IiwiQXJyYXkiLCJhdHRyIiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPZ0JBLFcsR0FBQUEsVztZQU9BQyxNLEdBQUFBLE07Ozs7Ozs7Ozs7OztBQWJULFFBQU1DLDhCQUFXLFNBQVhBLFFBQVcsQ0FBU0MsS0FBVCxFQUFnQjtBQUNwQyxZQUFNQyxjQUFjRCxLQUFkLDBEQUFjQSxLQUFkLENBQU47QUFDQSxlQUFPQSxTQUFTLElBQVQsS0FBa0JDLFFBQVEsUUFBUixJQUFvQkEsUUFBUSxVQUE5QyxDQUFQO0FBQ0gsS0FITTs7QUFNQSxhQUFTSixXQUFULENBQXNCRyxLQUF0QixFQUE2QjtBQUNsQyxlQUFPLE9BQU9BLEtBQVAsS0FBaUIsV0FBakIsSUFBZ0NBLFVBQVVFLFNBQWpEO0FBQ0Q7O0FBRUQ7OztBQUdPLGFBQVNKLE1BQVQsQ0FBZ0JLLEVBQWhCLEVBQW9CO0FBQ3pCLFlBQU1DLFFBQVEseUJBQWMsSUFBZCxDQUFkO0FBQ0EsZUFBTyxTQUFTQyxRQUFULENBQW1CQyxHQUFuQixFQUF3QjtBQUM3QixnQkFBTUMsTUFBTUgsTUFBTUUsR0FBTixDQUFaO0FBQ0EsbUJBQU9DLFFBQVFILE1BQU1FLEdBQU4sSUFBYUgsR0FBR0csR0FBSCxDQUFyQixDQUFQO0FBQ0QsU0FIRDtBQUlEOztBQUVNLFFBQU1FLGdDQUFZLFNBQVpBLFNBQVksQ0FBVVIsS0FBVixFQUFpQjtBQUN0QyxZQUFJLFFBQVFBLEtBQVIsSUFBaUIsb0JBQW1CQSxLQUFuQiwwREFBbUJBLEtBQW5CLEVBQXJCLEVBQ0ksT0FBT0EsS0FBUDtBQUNKLFlBQUdBLGlCQUFpQlMsTUFBakIsSUFBMkJULGlCQUFpQlUsTUFBNUMsSUFBc0RWLGlCQUFpQlcsT0FBMUUsRUFDSSxPQUFPWCxNQUFNWSxPQUFOLEVBQVA7QUFDSixZQUFJWixpQkFBaUJhLElBQXJCLEVBQTJCO0FBQ3ZCLGdCQUFJQyxPQUFPLElBQUlELElBQUosRUFBWDtBQUNBQyxpQkFBS0MsT0FBTCxDQUFhZixNQUFNZ0IsT0FBTixFQUFiO0FBQ0EsbUJBQU9GLElBQVA7QUFDSDtBQUNELFlBQUlkLGlCQUFpQmlCLE1BQWpCLElBQTJCakIsaUJBQWlCa0IsS0FBaEQsRUFBdUQ7QUFDbkQsZ0JBQUlKLE9BQVFkLGlCQUFpQmtCLEtBQWxCLEdBQXlCLEVBQXpCLEdBQTRCLEVBQXZDO0FBQ0EsaUJBQUssSUFBSUMsSUFBVCxJQUFpQm5CLEtBQWpCLEVBQXdCO0FBQ3BCLG9CQUFJQSxNQUFNb0IsY0FBTixDQUFxQkQsSUFBckIsQ0FBSixFQUNJTCxLQUFLSyxJQUFMLElBQWFuQixNQUFNbUIsSUFBTixJQUFZWCxVQUFVUixNQUFNbUIsSUFBTixDQUFWLENBQVosR0FBbUNuQixNQUFNbUIsSUFBTixDQUFoRDtBQUNQO0FBQ0QsbUJBQU9MLElBQVA7QUFDSDtBQUNELGNBQU0sSUFBSU8sS0FBSixDQUFVLGdEQUFWLENBQU47QUFDSCxLQW5CTSIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlXG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkKGZuKSB7XG4gIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGNsb25lRGVlcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChudWxsID09IHZhbHVlIHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIHZhbHVlKVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgaWYodmFsdWUgaW5zdGFuY2VvZiBOdW1iZXIgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcgfHwgdmFsdWUgaW5zdGFuY2VvZiBCb29sZWFuKVxuICAgICAgICByZXR1cm4gdmFsdWUudmFsdWVPZigpO1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgdmFyIGNvcHkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb3B5LnNldFRpbWUodmFsdWUuZ2V0VGltZSgpKTtcbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCB8fCB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBjb3B5ID0gKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpP1tdOnt9O1xuICAgICAgICBmb3IgKHZhciBhdHRyIGluIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoYXR0cikpXG4gICAgICAgICAgICAgICAgY29weVthdHRyXSA9IHZhbHVlW2F0dHJdP2Nsb25lRGVlcCh2YWx1ZVthdHRyXSk6dmFsdWVbYXR0cl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjbG9uZSBvYmohIEl0cyB0eXBlIGlzbid0IHN1cHBvcnRlZC5cIik7XG59Il19