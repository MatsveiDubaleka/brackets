module.exports = function check(str, bracketsConfig) {
    let value = "look";
    const result = str.split("");
    let sum = result.length;
    for (let i = 0; i < result.length; i++) {
        for (let arr of bracketsConfig) {
            if (arr.includes(result[i]) && result[i] === arr[0]) {
                if (result[i + 1] === arr[1]) {
                    result.splice(i, 2);
                    value = "find";
                    break;
                } else {
                    value = "look";
                    break;
                }
            } else if (arr.includes(result[i]) && result[i] !== arr[0]) {
                return false;
            }
        }
        if (value === "find") {
            i = -1;
            continue;
        }
    }
    return result.length === 0 ? true : false;
};
