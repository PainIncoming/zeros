module.exports = function getZerosCount(number, zerosCount = 0) {
    for (; number > 0; zerosCount += number = Math.floor(number / 5));

    return zerosCount;
};