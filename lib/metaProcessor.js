(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', './utils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.utils);
    global.metaProcessor = mod.exports;
  }
})(this, function (module, exports, _utils) {
  'use strict';

  exports.__esModule = true;


  function metaProcessor(meta, response) {
    /*
     * @bugfix
     * @desc response 不一定是对象, 或为 Error , 或 status code 204  为 `undefined` 
     */

    if ((0, _utils.isObject)(response) && !(response instanceof Error)) {
      if (response.$meta) {
        console.warn('metaProcessor: $meta property has been used.');
      } else {
        response.$meta = meta;
      }
    }

    return response;
  }

  exports['default'] = metaProcessor;
  module.exports = exports['default'];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhUHJvY2Vzc29yLmpzIl0sIm5hbWVzIjpbIm1ldGFQcm9jZXNzb3IiLCJtZXRhIiwicmVzcG9uc2UiLCJFcnJvciIsIiRtZXRhIiwiY29uc29sZSIsIndhcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFdBQVNBLGFBQVQsQ0FBdUJDLElBQXZCLEVBQTZCQyxRQUE3QixFQUF1QztBQUNyQzs7Ozs7QUFLQSxRQUFJLHFCQUFTQSxRQUFULEtBQXNCLEVBQUVBLG9CQUFvQkMsS0FBdEIsQ0FBMUIsRUFBd0Q7QUFDdEQsVUFBSUQsU0FBU0UsS0FBYixFQUFvQjtBQUNsQkMsZ0JBQVFDLElBQVIsQ0FBYSw4Q0FBYjtBQUNELE9BRkQsTUFFTztBQUNMSixpQkFBU0UsS0FBVCxHQUFpQkgsSUFBakI7QUFDRDtBQUNGOztBQUVELFdBQU9DLFFBQVA7QUFDRDs7dUJBR2NGLGEiLCJmaWxlIjoibWV0YVByb2Nlc3Nvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi91dGlscyc7XG5cbmZ1bmN0aW9uIG1ldGFQcm9jZXNzb3IobWV0YSwgcmVzcG9uc2UpIHtcbiAgLypcbiAgICogQGJ1Z2ZpeFxuICAgKiBAZGVzYyByZXNwb25zZSDkuI3kuIDlrprmmK/lr7nosaEsIOaIluS4uiBFcnJvciAsIOaIliBzdGF0dXMgY29kZSAyMDQgIOS4uiBgdW5kZWZpbmVkYCBcbiAgICovXG5cbiAgaWYgKGlzT2JqZWN0KHJlc3BvbnNlKSAmJiAhKHJlc3BvbnNlIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgaWYgKHJlc3BvbnNlLiRtZXRhKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ21ldGFQcm9jZXNzb3I6ICRtZXRhIHByb3BlcnR5IGhhcyBiZWVuIHVzZWQuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlLiRtZXRhID0gbWV0YTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbWV0YVByb2Nlc3NvcjtcbiJdfQ==