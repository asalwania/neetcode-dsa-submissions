class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxSpeed = 0;
        piles.forEach(p => maxSpeed = Math.max(maxSpeed,p))
        
        let l=1,r=maxSpeed;
        let res=maxSpeed

        while(l<=r){
            const mid = Math.floor((l+r)/2)
            const hourTook = this.getHourTook(mid,piles)
            
            if(hourTook > h){
                l = mid+1;
            }else{
                r = mid-1;
                res = Math.min(mid,res);
            }
        }
        return res;
    }

    getHourTook(speed,piles){
        let hourTook = 0;
        piles.forEach(p => hourTook += Math.ceil(p/speed))
        return hourTook;
    }
}
