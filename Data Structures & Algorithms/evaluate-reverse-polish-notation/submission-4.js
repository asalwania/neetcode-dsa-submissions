class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operations={
            "+":(a,b) => a+b,
            "-":(a,b) => a-b,
            "*":(a,b) => a*b,
            "/":(a,b) => Math.trunc(a/b)
        }
        for(let c of tokens){
            if(c in operations){
                const b = stack.pop();
                const a = stack.pop();
                stack.push(operations[c](a,b))
            }else{
                stack.push(+c)
            }
        }
        return stack.pop();
    }
}
