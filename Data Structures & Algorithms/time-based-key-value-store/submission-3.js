class TimeMap {
    constructor() {
        // Use a Map for better key-value management
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, { t: [], v: [] });
        }
        const data = this.keyStore.get(key);
        data.t.push(timestamp);
        data.v.push(value);
    }

    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        const { t, v } = this.keyStore.get(key);
        let l = 0, r = t.length - 1;
        let res = "";

        // Standard Binary Search for the "Floor" value
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            
            if (t[mid] === timestamp) {
                return v[mid]; // Exact match found
            }
            
            if (t[mid] < timestamp) {
                res = v[mid]; // Potential candidate, look for closer one to the right
                l = mid + 1;
            } else {
                r = mid - 1; // Too large, look left
            }
        }

        return res;
    }
}