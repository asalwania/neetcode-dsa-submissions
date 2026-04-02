class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack=[];
        for(let i=0; i<temperatures.length; i++){
            const el = temperatures[i];
            while(stack.length && stack[stack.length-1][0] < el){
                const [t,idx] = stack.pop();
                res[idx] = i -idx;
            }
            stack.push([el, i]);
        }
        return res;
    }
}
