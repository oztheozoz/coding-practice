function Test(a, b) {
    var c = a;
    var d = b;
    this.num = 5;
    this.getVars = function() {
        getNum.call(this);
        console.log(c, d);
    }

    function getNum() {
        console.log(this.num);
    }
}

var oz = new Test('hi', 'bye');
oz.getVars();