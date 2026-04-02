class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const q =  new MaxPriorityQueue();
        stones.forEach(s => q.enqueue(s));
        while(q.size() > 1){
            const f = q.dequeue();
            const s = q.dequeue();
            console.log("f -> ", f);
            console.log("s -> ", s);
            console.log("front -> ", q.front());
            q.enqueue(f-s);
        }
        return q.dequeue() || 0;
    }
}
