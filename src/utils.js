
export const isObject = function(value) {
    const type = typeof value
    return value != null && (type == 'object' || type == 'function');
}


export function isUndefined (value) {
  return typeof value === 'undefined' || value === undefined;
}

/**
 * Create a cached version of a pure function.
 */
export function cached(fn) {
  const cache = Object.create(null);
  return function cachedFn (str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

export const cloneDeep = function (value) {
    if (null == value || "object" != typeof value)
        return value;
    if(value instanceof Number || value instanceof String || value instanceof Boolean)
        return value.valueOf();
    if (value instanceof Date) {
        var copy = new Date();
        copy.setTime(value.getTime());
        return copy;
    }
    if (value instanceof Object || value instanceof Array) {
        var copy = (value instanceof Array)?[]:{};
        for (var attr in value) {
            if (value.hasOwnProperty(attr))
                copy[attr] = value[attr]?cloneDeep(value[attr]):value[attr];
        }
        return copy;
    }
    throw new Error("Unable to clone obj! Its type isn't supported.");
}