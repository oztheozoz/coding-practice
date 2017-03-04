// input: unsorted integer array
// output: array is sorted in place

// [4,1,3,2] -> [1,2,4,3] -> [1,2,3,4]
// [4,1,3,2,4] -> [2,1,3,4,4] -> [2,1,3,4,4] -> [1,2,3,4,4]
/*

 */
function quicksort(array, left, right) {
    if(left >= right || right < left) return;

    var pivotIndex = partition(array, left, right);
    quicksort(array, left, pivotIndex - 1);
    quicksort(array, pivotIndex + 1, right);
}

function partition(array, left, right) {
    var pivot = array[right];
    var i = left;
    var j = right - 1;

    while(j !== i) {
        if(array[i] >= pivot && array[j] < pivot) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
        } else if(array[i] >= pivot) {
            j--;
        } else if(array[j] < pivot) {
            i++;
        } else {
            i++;
        }
    }

    if(array[i] > pivot) {
        temp = array[i];
        array[i] = pivot;
        array[right] = temp;
        return i;
    } else {
        return right;
    }
}

var test = [99,82,115,2,93,72,148,148,148,149,147,148,10,5,62,91,3,-67];
quicksort(test, 0, test.length - 1);
console.log(test);


/*
 var pivot = array[right];
 var pivotIndex = right;
 var ptr = left;

 while(ptr < pivotIndex) {
 if(array[ptr] > array[pivotIndex]) {
 moveRightOfPivot();
 } else {
 ptr++;
 }
 }

 function moveRightOfPivot() {
 var element = array.splice(ptr, 1);
 array.push(element[0]);
 pivotIndex--;
 }
 */