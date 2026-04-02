class Node {
    constructor(){
        this.children={};
        this.isLastNode=false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for(let i=0; i< word.length; i++){
            const char = word[i];
            if(!(char in curr.children)){
                curr.children[char] = new Node(); 
            }
            curr = curr.children[char];
        }
        curr.isLastNode = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for(let i=0; i< word.length; i++){
            const char = word[i];
            if(!(char in curr.children)){
               return false;
            }
            curr = curr.children[char];
        }
        return curr.isLastNode;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for(let i=0; i< prefix.length; i++){
            const char = prefix[i];
            if(!(char in curr.children)){
                return false;
            }
            curr = curr.children[char];
        }
        return true;
    }
}
