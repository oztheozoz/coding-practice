function Trie() {
    var size = 0;
    var children = [];
    this.addStr = function (str, index) {
        if(str.length === index) return;
        size++;
        let child = children[getCharIndex(str[index])];
        if(child === undefined) {
            child = new Trie();
            setNode(str[index], child);
        }
        child.addStr(str, index + 1);
    }

    this.add = function(str) {
        this.addStr(str, 0);
    }

    this.print = function(str) {
        if(str === undefined) {
            str = '';
        }

        if(children.length === 0) {
            console.log(str);
        } else {
            for(let i = 0, l = children.length; i < l; i++) {
                if(children[i] !== undefined) {
                    children[i].print(str + getChar(i));
                }
            }
        }
    }

    function getCharIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    function getChar(index) {
        return String.fromCharCode('a'.charCodeAt(0) + index);
    }

    var getNode = function(char) {
        return children[getCharIndex(char)];
    }

    var setNode = function(char, node) {
        children[getCharIndex(char)] = node;
    }

    this.findCount = function(str, index) {
        if(str.length === index) {
            return size;
        }

        let child = children[getCharIndex(str[index])];
        if(child === undefined) {
            return 0;
        }

        return child.findCount(str, index + 1);
    }
}

var test = new Trie();
test.add('osbert');
test.add('oz');
test.add('oscar');
test.add('adam');
test.print();
var num = test.findCount('os', 0);
console.log(num);
