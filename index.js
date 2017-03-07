'use strict';
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {

            if (this == null) {
                throw new TypeError('this is null or not defined');
            }

            var obj = Object(this);
            var len = obj.length >>> 0;

            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            var thisArg = arguments[1];

            var index = 0;

            while (index < len) {
                var iValue = obj[index];
                if (predicate.call(thisArg, iValue, index, obj)) {
                    return iValue;
                }
                index++;
            }

            return undefined;
        }
    });
}