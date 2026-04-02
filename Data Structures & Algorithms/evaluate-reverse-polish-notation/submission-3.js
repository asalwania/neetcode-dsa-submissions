class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        let res = 0;

        const operator = {
            "+": (a,b) => a+b,
            "-": (a,b) => b-a,
            "*": (a,b) => a*b,
            "/": (a,b) => Math.trunc(b/a),
        }
        
        for(let el of tokens){
            if(isNaN(el)){
                const a = stack.pop();
                const b = stack.pop();
                stack.push(operator[el](a,b));
            }
            else{
                stack.push(+el)
            }
                
            // if(el === "+"){
                
            // }else if(el === "-"){

            // }else if(el === "*"){

            // }else if(el === "/"){

            // }else{
            //     stack.push(+el);
            // }
        }
        console.log(stack)

        return stack.pop();
    }
}
