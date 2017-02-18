function Trie2() {
    var size = 0;
    var children = {};
    this.addStr = function(str, index) {
        if(index < str.length) {
            size++;
            var char = str[index];
            var child = children[char];
            if(child === undefined) {
                child = new Trie2();
                children[char] = child;
            }

            child.addStr(str, index + 1);
        }
    }

    this.print = function(str) {
        if(str === undefined) {
            str = '';
        }

        if(Object.keys(children).length === 0 && children.constructor === Object) {
            console.log(str);
        } else {
            for(var key in children) {
                if(children.hasOwnProperty(key)) {
                    children[key].print(str + key);
                }
            }
        }
    }

    this.add = function(str) {
        this.addStr(str, 0);
    }

    this.findCount = function(str, index) {
        if(index < str.length) {
            var child = children[str[index]];

            if(child === undefined) {
                return 0;
            }

            return child.findCount(str, index + 1);
        }

        return size;
    }
}

var test = new Trie2();
test.add('osbert');
test.add('oz');
test.add('oscar');
test.add('adam');
test.print();
var num = test.findCount('osb', 0);
console.log(num);