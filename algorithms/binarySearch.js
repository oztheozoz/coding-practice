var input = [ 1, 2, 2, 3, 4, 4, 5, 6, 8, 10 ];

Array.prototype.binarySearch = function(num) {
    var _this = this;

    function search(left, right) {
        if(right < left) return -1;
        else if(left === right) {
            return checkIndexForNum(left);
        }

        var mid = Math.floor((left + right) / 2);
        if(num > _this[mid]) {
            return search(mid + 1, right);
        } else if(num < _this[mid]) {
            return search(left, mid - 1);
        } else {
            return checkIndexForNum(mid);
        }
    }

    function checkIndexForNum(index) {
        if(_this[index] === num) {
            return index;
        } else {
            return -1;
        }
    }

    return search(0, this.length - 1);
};

console.log(input.binarySearch(-1));
console.log(input.binarySearch(8));
console.log(input.binarySearch(4));
console.log(input.binarySearch(0));
console.log(input.binarySearch(10000));

