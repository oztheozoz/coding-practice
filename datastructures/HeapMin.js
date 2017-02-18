function HeapMin() {
    var heap = [];
    var size = 0;

    this.push = function(num) {
        heap[size] = num;
        heapUp(size++);
    }

    this.peek = function() {
        if(size > 0) {
            return heap[0];
        } else {
            return null;
        }
    }

    this.pop = function() {
        if(size > 0) {
            var result = heap[0];
            heap[0] = heap[--size];
            heapDown(0);
            return result;
        } else {
            return null;
        }
    }

    function getParent(index) {
        if (index > 0 && index < size) {
            return Math.floor((index - 1) / 2);
        } else {
            throw new RangeError;
        }
    }

    function getLeftChild(index) {
        return 2 * index + 1;
    }

    function getRightChild(index) {
        return 2 * index + 2;
    }

    function swapValues(index1, index2) {
        var temp = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = temp;
    }

    function heapUp(index) {
        while(index > 0 && heap[getParent(index)] > heap[index]) {
            swapValues(index, getParent(index));
            index = getParent(index);
        }
    }

    function heapDown(index) {
        while(getLeftChild(index) < size) {
            var minValueIndex = getLeftChild(index);

            if(getRightChild(index) < size && heap[getRightChild(index)] < heap[minValueIndex]) {
                minValueIndex = getRightChild(index);
            }

            if(heap[index] > heap[minValueIndex]) {
                swapValues(index, minValueIndex);
                index = minValueIndex;
            } else {
                break;
            }
        }
    }
}

var test = new HeapMin();
test.push(9);
test.push(5);
test.push(2);
test.push(4);
test.push(8);
test.push(1);
var num;
while(num = test.pop()) {
    console.log(num);
}