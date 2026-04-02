class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p,i) => [p,speed[i]]);
        pairs.sort((a,b) => b[0] - a[0]);
        let fleets=0;
        let maxTime = 0;
        for(let [p, s] of pairs){
            const currTime = (target - p)/s;
            if(currTime > maxTime){
                fleets++;
                maxTime = currTime;
            }
        }
        return fleets;
    }
}
