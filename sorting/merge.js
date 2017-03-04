// input: unsorted integer array
// output: array is sorted in place

function mergeSort(array) {
    if(array.length > 0) {
        mergeSortRecurse(array, 0, array.length - 1);
    }

    function mergeSortRecurse(array, start, end) {
        if(start === end) return;

        var mid = Math.floor((start + end) / 2);
        mergeSortRecurse(array, start, mid);
        mergeSortRecurse(array, mid + 1, end);
        console.log('start mid end', start, mid, end);
        merge(array, start, mid, end);
    }

    function merge(array, start, mid, end) {
        console.log('before merge', array);
        var arrayPtr = start;
        var leftPtr = start;
        var rightPtr = mid + 1;
        var leftArr = [];
        var rightArr = [];
        var leftArrPtr = 0;
        var rightArrPtr = 0;

        for(let i = leftPtr, l = rightPtr; i < l; i++) {
            leftArr.push(array[i]);
        }

        for(let i = rightPtr, l = end; i <= l; i++) {
            rightArr.push(array[i]);
        }

        while(true) {
            if(leftArrPtr < leftArr.length && rightArrPtr < rightArr.length) {
                if(leftArr[leftArrPtr] < rightArr[rightArrPtr]) {
                    takeLeft();
                } else {
                    takeRight();
                }
            } else if(leftArrPtr < leftArr.length) {
                takeLeft();
            } else if(rightArrPtr < rightArr.length) {
                takeRight();
            } else {
                break;
            }
        }

        function takeLeft() {
            array[arrayPtr++] = leftArr[leftArrPtr++];
        }

        function takeRight() {
            array[arrayPtr++] = rightArr[rightArrPtr++];
        }

        console.log('after merge', array);
    }
}
var test = [10,8,2,4,6,5,4,3,2,1];
mergeSort(test);
console.log(test);