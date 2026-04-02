class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [0];
        const res = new Array(temperatures.length).fill(0)

        for(let i=1; i<temperatures.length; i++){
            const curr = temperatures[i];
            while(stack.length > 0 && curr > temperatures[stack[stack.length -1]]){
                const top = stack.pop()
                res[top] = i - top;
            }
            stack.push(i);
        }
        return res;
    }
}
