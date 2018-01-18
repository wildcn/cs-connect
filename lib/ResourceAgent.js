(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', 'babel-runtime/helpers/classCallCheck', 'babel-runtime/core-js/promise', './utils', './Session', './metaProcessor'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/core-js/promise'), require('./utils'), require('./Session'), require('./metaProcessor'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.classCallCheck, global.promise, global.utils, global.Session, global.metaProcessor);
    global.ResourceAgent = mod.exports;
  }
})(this, function (module, exports, _classCallCheck2, _promise, _utils, _Session, _metaProcessor2) {
  'use strict';

  exports.__esModule = true;

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _promise2 = _interopRequireDefault(_promise);

  var _Session2 = _interopRequireDefault(_Session);

  var _metaProcessor3 = _interopRequireDefault(_metaProcessor2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function promiseResolveReduce(initialArgument, functions) {
    return functions.reduce(function (promise, func) {
      return promise.then(func);
    }, _promise2['default'].resolve(initialArgument));
  }
  function safeTransfer(value) {
    if (value instanceof Error) {
      //@TODO ERROR要有协议的传输 否则ERROR存在被其他更改风险
      return value;
    }
    return (0, _utils.cloneDeep)(value);
  }

  var ResourceAgent = function () {
    function ResourceAgent(resourceConfigs, processor) {
      var _this = this;

      (0, _classCallCheck3['default'])(this, ResourceAgent);
      this._requestInterceptors = [];
      this._responseInterceptors = [];
      this._session = null;
      this.resource = {};

      this._session = new _Session2['default']();
      resourceConfigs.forEach(function (resourceConfig) {
        _this.resource[resourceConfig.name] = _this.createResource(resourceConfig, processor);
      });
    }

    ResourceAgent.prototype.addRequestInterceptors = function addRequestInterceptors(interceptors) {
      if (interceptors) {
        var _requestInterceptors;

        (_requestInterceptors = this._requestInterceptors).push.apply(_requestInterceptors, [].concat(interceptors));
      }
    };

    ResourceAgent.prototype.addResponseInterceptors = function addResponseInterceptors(interceptors) {
      if (interceptors) {
        var _responseInterceptors;

        (_responseInterceptors = this._responseInterceptors).push.apply(_responseInterceptors, [].concat(interceptors));
      }
    };

    ResourceAgent.prototype.createResource = function createResource(resourceConfig, processor) {
      var requestInterceptors = this._requestInterceptors;
      var responseInterceptors = this._responseInterceptors;
      var session = this._session;
      var name = resourceConfig.name,
          path = resourceConfig.path,
          methods = resourceConfig.methods;


      return (0, _utils.cached)(function (params) {
        return new Proxy({}, {
          // Proxy handler.get
          get: function get(target, method, receiver) {
            if (methods.indexOf(method) == -1) {
              throw new Error('[ResourceProxy] Can\'t use "' + method + '" , #' + name + '# must allow ' + methods);
            }

            return function (payload) {
              var _metaProcessor = function _metaProcessor(data) {
                return data;
              };
              if (payload && payload.$meta) {
                var $meta = payload.$meta;

                delete payload.$meta;
                _metaProcessor = _metaProcessor3['default'].bind(null, $meta);
              }

              var options = {
                name: name,
                path: path,
                method: method,
                session: session,
                params: params || null,
                payload: payload || null
              };

              if (processor === null) {
                throw new Error('Can\'t find processor.');
              }

              var queue = [].concat(requestInterceptors, processor, safeTransfer, _metaProcessor, responseInterceptors);
              return promiseResolveReduce(options, queue);
            };
          }
        });
      });
    };

    return ResourceAgent;
  }();

  exports['default'] = ResourceAgent;
  module.exports = exports['default'];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXNvdXJjZUFnZW50LmpzIl0sIm5hbWVzIjpbInByb21pc2VSZXNvbHZlUmVkdWNlIiwiaW5pdGlhbEFyZ3VtZW50IiwiZnVuY3Rpb25zIiwicmVkdWNlIiwicHJvbWlzZSIsImZ1bmMiLCJ0aGVuIiwicmVzb2x2ZSIsInNhZmVUcmFuc2ZlciIsInZhbHVlIiwiRXJyb3IiLCJSZXNvdXJjZUFnZW50IiwicmVzb3VyY2VDb25maWdzIiwicHJvY2Vzc29yIiwiX3JlcXVlc3RJbnRlcmNlcHRvcnMiLCJfcmVzcG9uc2VJbnRlcmNlcHRvcnMiLCJfc2Vzc2lvbiIsInJlc291cmNlIiwiZm9yRWFjaCIsInJlc291cmNlQ29uZmlnIiwibmFtZSIsImNyZWF0ZVJlc291cmNlIiwiYWRkUmVxdWVzdEludGVyY2VwdG9ycyIsImludGVyY2VwdG9ycyIsInB1c2giLCJjb25jYXQiLCJhZGRSZXNwb25zZUludGVyY2VwdG9ycyIsInJlcXVlc3RJbnRlcmNlcHRvcnMiLCJyZXNwb25zZUludGVyY2VwdG9ycyIsInNlc3Npb24iLCJwYXRoIiwibWV0aG9kcyIsInBhcmFtcyIsIlByb3h5IiwiZ2V0IiwidGFyZ2V0IiwibWV0aG9kIiwicmVjZWl2ZXIiLCJpbmRleE9mIiwicGF5bG9hZCIsIl9tZXRhUHJvY2Vzc29yIiwiZGF0YSIsIiRtZXRhIiwiYmluZCIsIm9wdGlvbnMiLCJxdWV1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLFdBQVNBLG9CQUFULENBQThCQyxlQUE5QixFQUErQ0MsU0FBL0MsRUFBMEQ7QUFDeEQsV0FBT0EsVUFBVUMsTUFBVixDQUFpQixVQUFDQyxPQUFELEVBQVVDLElBQVYsRUFBbUI7QUFDekMsYUFBT0QsUUFBUUUsSUFBUixDQUFhRCxJQUFiLENBQVA7QUFDRCxLQUZNLEVBRUoscUJBQVFFLE9BQVIsQ0FBZ0JOLGVBQWhCLENBRkksQ0FBUDtBQUdEO0FBQ0QsV0FBU08sWUFBVCxDQUFz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S0FBOUIsQ0FBUDtBQUNELGFBdkJEO0FBd0JEO0FBL0JrQixTQUFkLENBQVA7QUFpQ0QsT0FsQ00sQ0FBUDtBQW1DRCxLOzs7Ozt1QkFsRWtCbEMsYSIsImZpbGUiOiJSZXNvdXJjZUFnZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FjaGVkLCBjbG9uZURlZXAgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBTZXNzaW9uIGZyb20gJy4vU2Vzc2lvbic7XG5pbXBvcnQgbWV0YVByb2Nlc3NvciBmcm9tICcuL21ldGFQcm9jZXNzb3InO1xuZnVuY3Rpb24gcHJvbWlzZVJlc29sdmVSZWR1Y2UoaW5pdGlhbEFyZ3VtZW50LCBmdW5jdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9ucy5yZWR1Y2UoKHByb21pc2UsIGZ1bmMpID0+IHtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmMpO1xuICB9LCBQcm9taXNlLnJlc29sdmUoaW5pdGlhbEFyZ3VtZW50KSk7XG59XG5mdW5jdGlvbiBzYWZlVHJhbnNmZXIodmFsdWUpIHtcbiAgaWYodmFsdWUgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgLy9AVE9ETyBFUlJPUuimgeacieWNj+iurueahOS8oOi+kyDlkKbliJlFUlJPUuWtmOWcqOiiq+WFtuS7luabtOaUuemjjumZqVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gY2xvbmVEZWVwKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb3VyY2VBZ2VudCB7XG4gIF9yZXF1ZXN0SW50ZXJjZXB0b3JzID0gW107XG4gIF9yZXNwb25zZUludGVyY2VwdG9ycyA9IFtdO1xuICBfc2Vzc2lvbiA9IG51bGw7XG4gIHJlc291cmNlID0ge307XG5cbiAgY29uc3RydWN0b3IgKHJlc291cmNlQ29uZmlncywgcHJvY2Vzc29yKSB7XG4gICAgdGhpcy5fc2Vzc2lvbiA9IG5ldyBTZXNzaW9uKCk7XG4gICAgcmVzb3VyY2VDb25maWdzLmZvckVhY2gocmVzb3VyY2VDb25maWcgPT4ge1xuICAgICAgdGhpcy5yZXNvdXJjZVtyZXNvdXJjZUNvbmZpZy5uYW1lXSA9IHRoaXMuY3JlYXRlUmVzb3VyY2UocmVzb3VyY2VDb25maWcsIHByb2Nlc3Nvcik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9ycykge1xuICAgIGlmIChpbnRlcmNlcHRvcnMpIHtcbiAgICAgIHRoaXMuX3JlcXVlc3RJbnRlcmNlcHRvcnMucHVzaCguLi4oW10uY29uY2F0KGludGVyY2VwdG9ycykpKTtcbiAgICB9XG4gIH1cblxuICBhZGRSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcnMpIHtcbiAgICBpZiAoaW50ZXJjZXB0b3JzKSB7XG4gICAgICB0aGlzLl9yZXNwb25zZUludGVyY2VwdG9ycy5wdXNoKC4uLihbXS5jb25jYXQoaW50ZXJjZXB0b3JzKSkpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVJlc291cmNlKHJlc291cmNlQ29uZmlnLCBwcm9jZXNzb3IpIHtcbiAgICBsZXQgcmVxdWVzdEludGVyY2VwdG9ycyA9IHRoaXMuX3JlcXVlc3RJbnRlcmNlcHRvcnM7XG4gICAgbGV0IHJlc3BvbnNlSW50ZXJjZXB0b3JzID0gdGhpcy5fcmVzcG9uc2VJbnRlcmNlcHRvcnM7XG4gICAgbGV0IHNlc3Npb24gPSB0aGlzLl9zZXNzaW9uO1xuICAgIGxldCB7IG5hbWUsIHBhdGgsIG1ldGhvZHMgfSA9IHJlc291cmNlQ29uZmlnO1xuXG4gICAgcmV0dXJuIGNhY2hlZChmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkoe30sIHtcbiAgICAgICAgLy8gUHJveHkgaGFuZGxlci5nZXRcbiAgICAgICAgZ2V0OiBmdW5jdGlvbih0YXJnZXQsIG1ldGhvZCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAobWV0aG9kcy5pbmRleE9mKG1ldGhvZCkgPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgW1Jlc291cmNlUHJveHldIENhbid0IHVzZSBcIiR7bWV0aG9kfVwiICwgIyR7bmFtZX0jIG11c3QgYWxsb3cgJHttZXRob2RzfWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbihwYXlsb2FkKSB7XG4gICAgICAgICAgICBsZXQgX21ldGFQcm9jZXNzb3IgPSBkYXRhID0+IGRhdGE7XG4gICAgICAgICAgICBpZiAocGF5bG9hZCAmJiBwYXlsb2FkLiRtZXRhKSB7XG4gICAgICAgICAgICAgIGxldCB7ICRtZXRhIH0gPSBwYXlsb2FkO1xuICAgICAgICAgICAgICBkZWxldGUgcGF5bG9hZC4kbWV0YTtcbiAgICAgICAgICAgICAgX21ldGFQcm9jZXNzb3IgPSBtZXRhUHJvY2Vzc29yLmJpbmQobnVsbCwgJG1ldGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICBzZXNzaW9uLFxuICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyB8fCBudWxsLFxuICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkIHx8IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzb3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBmaW5kIHByb2Nlc3Nvci5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHF1ZXVlID0gW10uY29uY2F0KHJlcXVlc3RJbnRlcmNlcHRvcnMsIHByb2Nlc3NvcixzYWZlVHJhbnNmZXIsIF9tZXRhUHJvY2Vzc29yLCByZXNwb25zZUludGVyY2VwdG9ycyk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVSZWR1Y2Uob3B0aW9ucywgcXVldWUpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=