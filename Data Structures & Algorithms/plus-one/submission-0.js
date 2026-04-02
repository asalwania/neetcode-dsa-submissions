class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        digits = digits.reverse();
        let carry = 0;
        let i = 0;
        // [0,9,9]
        //  0,0,0
        while(i < digits.length){
            if(digits[i] === 9){
                digits[i]=0;
                carry=1;
            }else{
                digits[i] = digits[i]+1;
                carry=0;
            }
            if(carry ===0) break; 
            i++; 
        }
        if(carry)digits.push(carry);
        return digits = digits.reverse();
    }
}
