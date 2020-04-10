const _ = {
    /*.clamp() takes three arguments: a number, a lower bound, and an upper bound
.clamp() modifies the provided number to be within the two provided bounds
If the provided number is smaller than the lower bound, it will return the lower bound as the final number
If the number is larger than the upper bound, it will return the upper bound as the final number
If the number is already within the two bounds, it will return the number as the final number*/
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    /*.inRange() takes three arguments: a number, a start value, and an end value
.inRange() checks to see if the provided number falls within the range specified by the start and end values
If the provided number is smaller than the start value, .inRange() will return false
If the provided number is larger than or equal to the end value, .inRange() will return false
If the provided number is within the start and end values, .inRange() will return true
If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value
If the provided start value is larger than the provided end value, the two values should be swapped*/
    inRange(number, start, end) {
        if (end == undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            const temp = end;
            end = start;
            start = temp;
        }
        const isInRange = start <= number && number < end;
        return isInRange;
    },
    /*.words() takes one argument: a string
.words() splits the string into an array of words
A word is defined by a space-separated string of characters, so each space character, ' ', 
indicates the end of one word and the start of the next
*/
    words(string) {
        return string.split(' ');
    },
    /*.pad() takes two arguments: a string and a length
.pad() adds spaces evenly to both sides of the string to make it reach the desired length
Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length
*/
    pad(string, length) {
        if (length <= string.length) {
            return string;
        }
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },
    /*.has() takes two arguments: an object and a key
.has() checks to see if the provided object contains a value at the specified key
.has() will return true if the object contains a value at the key and will return false if not */
    has(object, key) {
        const hasValue = object[key] === undefined ? false : true;
        return hasValue;
    },
    /*.invert() takes one argument: an object
.invert() iterates through each key / value pair in the provided object and swaps the key and value */
    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            // get old value
            let originalValue = object[key];
            // set new key as old value, with key as new value
            invertedObject[originalValue] = key;     
        }
        return invertedObject;
    },
    /*.findKey() takes two arguments: an object and a predicate function — a function that returns a boolean value
.findKey() iterates through each key / value pair in the provided object and calls the predicate function with the value
.findKey() returns the first key that has a value that returns a truthy value from the predicate function
.findKey() returns undefined if no values return truthy values from the predicate function*/
    findKey(object, predicate) {
        for (let key in object) {
            // save value of object's key
            const value = object[key];
            // apply the value in the function supplied in the predicate
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }
        }
        return undefined;
    }, 
    /*.drop() takes two arguments: an array and a number representing the number of items to drop from the beginning of the array
.drop() returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array
If the number of elements to drop is unspecified, your method should drop one element */
    drop(array, n) {
        if (!n) {
            n = 1;
        }
        const droppedArray = array.slice(n);
        return droppedArray;
    },
    /*.dropWhile() takes two arguments: an array and a predicate function
The supplied predicate function takes three arguments: the current element, the current element index, and the whole array
.dropWhile() creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value*/
    dropWhile(array, predicate) {
        //
        let dropNumber = array.findIndex((element, index) => {
            // want to drop elements until the predicate returns a falsy value. findIndex() looks for first truthy value so make every truthy value falsy and vice versa to get the value we want
            return !predicate(element, index, array);
        });
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    }, 
    /* .chunk() takes two arguments: an array and a size
.chunk() breaks up the supplied array into arrays of the specified size
.chunk() returns an array containing all of the previously-created array chunks in the order of the original array
If the array can’t be broken up evenly, the last chunk will be smaller than the specified size
If no size is supplied to the method, the size is set to 1 */
    chunk(array, size) {
        if (size == undefined) {
            size = 1;
        }
        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
};
