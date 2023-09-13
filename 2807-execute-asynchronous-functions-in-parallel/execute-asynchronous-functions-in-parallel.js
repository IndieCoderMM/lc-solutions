/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        const result = []; 
        let count = 0;
        functions.forEach((fn, i) => {  
            fn().then(val => {
                result[i] = val;
                count++;
                if (count === functions.length) resolve(result);
            }).catch(e => reject(e));
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */