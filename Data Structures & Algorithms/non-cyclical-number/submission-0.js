class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const obj = {};
        while(n){
            n = this.squareOfDigits(n);
            if(obj[n]){
                return false;
            }
            obj[n]=true;
            if(n === 1) return true;
        }
        return false;

    }
    squareOfDigits(n){
        let sqr = 0;
        while(n){
            const d = n%10;
            sqr += d*d;
            n = Math.floor(n/10);
        }
        return sqr;
    }
}
