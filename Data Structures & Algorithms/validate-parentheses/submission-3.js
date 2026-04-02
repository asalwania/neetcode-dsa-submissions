class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const ob = {
            ')':'(',
            '}':'{',
            ']':'['
        }
        for(let i=0; i<s.length; i++){
            const currChar = s[i];
            console.log('stack',stack)
            if("({[".includes(currChar)){
                stack.push(currChar);
            }else{
                const removedEl = stack.pop();
                console.log('removedEl -> ',removedEl,' | ob -> ', ob)
                if(ob[currChar] !== removedEl) {
                    return false
                };
            }
        }
        return stack.length === 0;
    }
}

['[']
