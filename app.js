// extractValue
function extractValue(arr, userName) {
    return arr.reduce(function (accum, next) {
        accum.push(next[userName]);
        return accum;
    }, [])
}

// vowelCount
function vowelCount(str) {
    let vowels = 'aeiou';

    return str.split('').reduce(function (accum, next) {
        let lowerCase = next.toLowerCase();
        if (vowels.indexOf(lowerCase) !== -1) {
            if (accum[lowerCase]) {
                accum[lowerCase]++;
            } else {
                accum[lowerCase] = 1;
            }
        }
        return accum;
    }, {});
}

// addKeyAndValue
function addKeyAndValue(arr, key, value) {
    return arr.reduce(function (accum, next, idx) {
        accum[idx][key] = value;
        return accum;
    }, arr);
}

// partition
function partition(arr, cb) {
    return arr.reduce(function (acc, next) {
        if (cb(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[], []]);
}