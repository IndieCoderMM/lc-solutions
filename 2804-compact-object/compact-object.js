/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
     if (Array.isArray(obj)) {
        return obj
            .map(compactObject)
            .filter(Boolean); 
    } else if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
            const value = compactObject(obj[key]);
            if (Boolean(value)) {
                acc[key] = value;
            }
            return acc;
        }, {});
    }
    return obj;
};