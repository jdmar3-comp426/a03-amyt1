import {variance, variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort();
    var midIndex;
    var median;
    if (array.length % 2 == 0) {
        midIndex = array.length/2;
        median = (array[midIndex] + array[midIndex+1])/2;
    } else {
        midIndex = (array.length/2)+0.5;
        median = array[midIndex];
    }
    return median;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    const returnVal = {};
    returnVal.length = array.length;
    returnVal.sum = getSum(array);
    returnVal.mean = returnVal.sum / returnVal.length;
    returnVal.median = getMedian(array);
    returnVal.min = array.sort()[0];
    returnVal.max = array.sort()[returnVal.length-1];
    returnVal.variance = variance(array, returnVal.mean);
    var sumVariance = 0;
    var difference = 0;
    for (let i = 0; i < length; i++) {
        difference += array[i] - returnVal.mean;
        difference = Math.pow(difference, 2);
        sumVariance += difference;
    }
    var standard_deviation = sumVariance / returnVal.length - 1;
    returnVal.standard_deviation = Math.sqrt(standard_deviation);
    return returnVal;
}

