class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    queue;
    k;
    constructor(k, nums) {
        console.log(nums)
        this.queue = new MinPriorityQueue();
        this.k = k;
        nums.forEach(num => this.add(num))

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.queue.enqueue(val);
        if(this.queue.size() > this.k){
             this.queue.dequeue();
        }
        // console.log(val)
        console.log(this.queue.back())
        return this.queue.front();
    }
}
