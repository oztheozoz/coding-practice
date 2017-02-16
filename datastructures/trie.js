function Trie() {
    this.size = 0;
    this.children = [];
    this.addStr = function (str, index) {
        if(str.length === index) return;
        this.size++;
        let child = this.children[getCharIndex(str[index])];
        if(child === undefined) {
            child = new Trie();
            this.setNode(str[index], child);
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

        if(this.children.length === 0) {
            console.log(str);
        } else {
            for(let i = 0, l = this.children.length; i < l; i++) {
                if(this.children[i] !== undefined) {
                    this.children[i].print(str + getChar(i));
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

    this.getNode = function(char) {
        return this.children[getCharIndex(char)];
    }

    this.setNode = function(char, node) {
        this.children[getCharIndex(char)] = node;
    }

    this.findCount = function(str, index) {
        if(str.length === index) {
            return this.size;
        }

        let child = this.children[getCharIndex(str[index])];
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
